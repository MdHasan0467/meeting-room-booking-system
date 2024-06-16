import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { slotModel } from "./slot.model";
import { TSlot } from "./slot.interface";

const createSlotIntoDB = async (payload: TSlot) => {

    //! if the slot is already registered!
    const isSlotExist = await slotModel.findOne({room: payload?.room})
  
    //! if the slot is already registered then throw an error
    if(isSlotExist){
      throw new AppError(httpStatus.CONFLICT, "The slot already exist in database!");
    }
  
    //! if the slot is not available in the database then create a new slot
    const result = await slotModel.create(payload);
    return result;
  };
  
  export const SlotServices = {
    createSlotIntoDB,
  };