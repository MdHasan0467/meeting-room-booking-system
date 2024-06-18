import express from 'express';
import { SlotController } from './slot.controller';

const router = express.Router();

router.post('/', SlotController.createSlot)
router.get('/availability', SlotController.getAvailableSlots)

export const SlotRoute = router;