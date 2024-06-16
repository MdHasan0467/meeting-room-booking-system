import express from 'express';
import { SlotController } from './slot.controller';

const router = express.Router();

router.post('/', SlotController.createSlot)

export const SlotRoute = router;