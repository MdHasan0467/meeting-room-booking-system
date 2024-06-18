import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { slotModel } from "./slot.model";
import { TSlot } from "./slot.interface";

const createSlotIntoDB = async (payload: TSlot) => {
  // Parse string times to Date objects
  const startTimeDate = parseTimeStringToDate(payload.startTime);
  const endTimeDate = parseTimeStringToDate(payload.endTime);

  // Update payload with Date objects
  const payloadWithDates = {
      ...payload,
      startTime: startTimeDate,
      endTime: endTimeDate
  };

  // Check if a slot with the same room and date already exists
  const isSlotExist = await slotModel.findOne({ room: payloadWithDates.room, date: payloadWithDates.date });

  // If a slot with the same room and date already exists, throw an error
  if (isSlotExist) {
      throw new AppError(httpStatus.CONFLICT, "The slot already exists in the database!");
  }

  // Create a new slot with the updated payload containing Date objects
  const result = await slotModel.create(payloadWithDates);
  return result;
};

// Helper function to parse string time to Date object
const parseTimeStringToDate = (timeString: string): Date => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0); // Optionally set seconds to 0 if needed
  return date;
};


  
  export const SlotServices = {
    createSlotIntoDB,
  };