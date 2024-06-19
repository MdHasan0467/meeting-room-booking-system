import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const bookingSchema = new Schema<TBooking>({
  date: { type: Date, required: true },
  slots: [{ type: Schema.Types.ObjectId, required: true }],
  room: { type: Schema.Types.ObjectId, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
});

export const bookingModel = model<TBooking>('booking', bookingSchema);
