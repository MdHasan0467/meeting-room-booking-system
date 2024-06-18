import { Schema, model } from "mongoose";
import { TSlot } from "./slot.interface";

const slotSchema = new Schema({
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    SlotDuration: {
        type: Number,
        default: 0 //* Default to 0 initially
    },
    slotQuantity: {
        type: Number,
        default: 1
    }
});

//! Define a pre-save hook to calculate Slot duration In Minutes
slotSchema.pre<TSlot>('save', function(next: any) {
    const start = this.startTime.split(':');
    const end = this.endTime.split(':');
    const startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
    const endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);
    this.SlotDuration = endMinutes - startMinutes;
    this.slotQuantity = Math.ceil(this.SlotDuration / 60); // Calculate slotQuantity based on hour slots
    next();
});

export const slotModel = model<TSlot>('slot', slotSchema);