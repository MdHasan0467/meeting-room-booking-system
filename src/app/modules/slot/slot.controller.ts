import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotServices } from "./slot.service";

const createSlot = catchAsync(async (req, res) =>{

    const result = await SlotServices.createSlotIntoDB(req.body);


    sendResponse(res, {
        success : true,
        statusCode : httpStatus.OK,
        message : 'Slots created successfully',
        data : result,
  })
} )

const getAvailableSlots = catchAsync(async (req, res) =>{

  console.log('Do IT', req.query);

  const { date, room } = req.query;
  const params = { date: date as string, roomId: room as string };


  const result = await SlotServices.getAvailableSlotsIntoDB(params)


    return res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Available slots retrieved successfully',
      total: result.length,
      data: result
    });

} )

export const SlotController = {
    createSlot,
    getAvailableSlots
  };