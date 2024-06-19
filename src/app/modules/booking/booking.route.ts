import express from 'express';
import { BookingController } from './booking.controller';

const router = express.Router();

router.post('/', BookingController.createBooking)
router.get('/availability', )

export const BookingRoute = router;