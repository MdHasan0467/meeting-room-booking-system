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
    durationInMinutes: {
        type: Number,
        default: 0 // Default to 0 initially
    }
});

// Define a pre-save hook to calculate durationInMinutes
slotSchema.pre<TSlot>('save', function(next: any) {
    const start = this.startTime.split(':');
    const end = this.endTime.split(':');
    const startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
    const endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);
    this.durationInMinutes = endMinutes - startMinutes;
    next();
});

export const slotModel = model<TSlot>('slot', slotSchema);