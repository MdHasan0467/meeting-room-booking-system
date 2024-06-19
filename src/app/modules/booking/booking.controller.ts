import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";

const createBooking = catchAsync(async (req, res) =>{

    const result = await BookingServices.createBookingIntoDB(req.body);
    sendResponse(res, {
      statusCode : httpStatus.OK,
      success : true,
      message : 'Room created successfully',
      data : result,
  })
} )



export const BookingController = {
    createBooking,
  };