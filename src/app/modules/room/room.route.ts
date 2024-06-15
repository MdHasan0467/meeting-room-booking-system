import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { RoomController } from './room.controller';

const router = express.Router();

router.post('/', RoomController.createRoom);
router.get('/', RoomController.getAllRooms);
router.get('/:roomId', RoomController.getSingleRoom);
router.put('/:roomId', RoomController.updateSingleRoom);
router.delete('/:roomId', RoomController.deleteRoom);

export const RoomRoute = router;
