import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { slotModel } from './slot.model';
import { TSlot } from './slot.interface';
import { Types } from 'mongoose';


export type TGetAvailableSlotsParams = {
  date?: string; // Date format: YYYY-MM-DD
  roomId?: string; // RoomId format: ObjectId string
}




const createSlotIntoDB = async (payload: TSlot) => {
  //! Check if a slot with the same room, date, start time, and end time already exists
  //^ Check if there is any existing slot that overlaps with the new slot
  const existingSlot = await slotModel.findOne({
    date: payload.date,
    $or: [
      {
        startTime: { $lt: payload.endTime }, //* Existing slot ends after new slot starts
        endTime: { $gt: payload.startTime }, //* Existing slot starts before new slot ends
      },
      {
        startTime: { $gte: payload.startTime, $lt: payload.endTime }, //* Existing slot starts within new slot
      },
      {
        endTime: { $gt: payload.startTime, $lte: payload.endTime }, //* Existing slot ends within new slot
      },
    ],
  });

  //! If slot exists, throw an error
  if (existingSlot) {
    throw new AppError(
      httpStatus.CONFLICT,
      'A slot with the same room, date, start time, and end time already exists!',
    );
  }



  //! Create a new slot
  const result = await slotModel.create(payload);
  return result;
};




const getAvailableSlotsIntoDB = async ({ date, roomId }: TGetAvailableSlotsParams) => {
  try {

    console.log('DID');

    let query: any = { isBooked: false };

    if (date) {
      query.date = new Date(date);
    }

    if (roomId) {
      if (!Types.ObjectId.isValid(roomId)) {
        throw new Error('Invalid roomId');
      }
      query.room = new Types.ObjectId(roomId);
    }

    const availableSlots = await slotModel.find(query);
    return availableSlots;
  } catch (error) {
    console.error('Error fetching available slots:', error);
    throw new Error('Failed to fetch available slots');
  }
};




export const SlotServices = {
  createSlotIntoDB,
  getAvailableSlotsIntoDB
};
