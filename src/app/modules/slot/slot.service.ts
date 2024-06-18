import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { slotModel } from "./slot.model";
import { TSlot } from "./slot.interface";

const createSlotIntoDB = async (payload: TSlot) => {
  // Calculate slot duration in minutes
  const startTimeMinutes = parseTimeToMinutes(payload.startTime);
  const endTimeMinutes = parseTimeToMinutes(payload.endTime);
  const slotDuration = endTimeMinutes - startTimeMinutes;

  // Check if a slot with the same room already exists
  const isSlotExist = await slotModel.findOne({ room: payload?.room });

  // If a slot with the same room already exists, throw an error
  if (isSlotExist) {
      throw new AppError(httpStatus.CONFLICT, "The slot already exists in the database!");
  }

  // Include slotDuration in payload
  const slotDataWithDuration = {
      ...payload,
      slotDuration: slotDuration
  };

  // Create a new slot with the updated payload
  const result = await slotModel.create(slotDataWithDuration);
  return result;
};

//& Helper function to convert time to minutes since midnight
const parseTimeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};
  
  export const SlotServices = {
    createSlotIntoDB,
  };