import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { RoomServices } from './room.service';

const createRoom = catchAsync(async (req, res) =>{
    const result = await RoomServices.createRoomIntoDB(req.body);
    sendResponse(res, {
      statusCode : httpStatus.OK,
      success : true,
      message : 'Room created successfully',
      data : result,
  })
} )




const getAllRooms = catchAsync(async (req, res) =>{
    const result = await RoomServices.getAllRoomFromDB();
    sendResponse(res, {
      statusCode : httpStatus.OK,
      success : true,
      message : 'Rooms are received successfully',
      data : result,
  })
} )



const getSingleRoom = catchAsync(async (req, res) =>{
    const id = req.params.roomId
    const result = await RoomServices.getSingleRoomFromDB(id);
    sendResponse(res, {
      statusCode : httpStatus.OK,
      success : true,
      message : 'Room is received successfully',
      data : result,
  })
} )







const updateSingleRoom = catchAsync(async (req, res) =>{
    const id = req.params.roomId

    const updatedRoomData = req.body;

    const result = await RoomServices.updateSingleRoomFromDB( id, updatedRoomData );

    if (result) {
      return sendResponse(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'Room is updated successfully',
        data : result,
    })
    } else {
        return res.status(404).json({
          success: false,
          message: 'Room not found',
        });
      } 
    
} )






const deleteRoom = catchAsync(async (req, res) =>{
    const id = req.params.roomId


    const result = await RoomServices.deleteRoomFromDB( id);
    console.log('delete rooms', result);
    sendResponse(res, {
      statusCode : httpStatus.OK,
      success : true,
      message : 'Room is deleted successfully',
      data : result,
  })
} )






export const RoomController = {
  createRoom,
  getAllRooms,
  getSingleRoom,
  updateSingleRoom,
  deleteRoom,
};
