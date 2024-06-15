import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (payload: User) => {

  //! if the user is already registered!
  const isUserExist = await UserModel.findOne({email: payload?.email})

  //! if the user is already registered then throw an error
  if(isUserExist){
    throw new AppError(httpStatus.CONFLICT, "User already registered!");
  }

  //! if the user is not available in the database then create a new user
  const result = await UserModel.create(payload);
  return result;
};

export const UserServices = {
  createUserIntoDB: createUserIntoDB,
};
