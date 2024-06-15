import { TRoom } from "./room.interface"
import { roomModel } from "./room.model"

const createRoomIntoDB = async (payload : TRoom) => {
    const result = await roomModel.create(payload);
    return result
}



const getAllRoomFromDB = async () => {
    const result = await roomModel.find({isDeleted: false})
    return result
}




const getSingleRoomFromDB = async (id : string) => {
    const result = await roomModel.findById(id)
    return result
}






const updateSingleRoomFromDB = async (id : string, payload : any) => {
    const result = await roomModel.findByIdAndUpdate(id, payload, { new: true })
    return result
}



const deleteRoomFromDB = async (id : string) => {

    console.log("id", id);
    const result = await roomModel.updateOne({id}, {isDeleted: true}, {new: true})
    return result
}


export const RoomServices = {
    createRoomIntoDB,
    getAllRoomFromDB,
    getSingleRoomFromDB,
    updateSingleRoomFromDB,
    deleteRoomFromDB,
}