import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { slotModel } from './slot.model';
import { TSlot } from './slot.interface';
// import { TSlot } from "./slot.interface";

const createSlotIntoDB = async (payload: TSlot) => {
  // Check if a slot with the same room already exists
  const isSlotExist = await slotModel.findOne({ room: payload?.room });

  // If slot exists, throw an error
  if (isSlotExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      'The slot already exists in the database!',
    );
  }

  // Create a new slot
  const result = await slotModel.create(payload);
  return result;
};

export const SlotServices = {
  createSlotIntoDB,
};
