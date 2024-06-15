import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { UserModel } from "../user/user.model";
import { TLoginUser } from "./auth.interface";


const loginUser = async (payload : TLoginUser) => {

    // if the user is exist in database
    const isUserExist = await UserModel.findOne({email: payload?.email})

    console.log(isUserExist);


    if(!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND,"This user not found!")
    }

    // console.log(payload);
    return isUserExist
}

export const AuthServices = {
    loginUser,
}