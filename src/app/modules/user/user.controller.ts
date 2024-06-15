import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req, res) =>{
  const user = req.body;
    // console.log('user', user);
    const result = await UserServices.createUserIntoDB(user);

    console.log('object', result);

    

    sendResponse(res, {
      statusCode : httpStatus.OK,
      success : true,
      message : 'User registered successfully',
      data : result,
  })
} )

export const UserController = {
  createUser,
};
