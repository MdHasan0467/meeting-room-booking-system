import { Schema, model } from "mongoose";
import { TSlot } from "./slot.interface";

const slotSchema = new Schema({
    room: {
        type: String, //^ ObjectID for the room referencing
        // ref: 'Room',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String, // Store as String in "HH:mm" format
        required: true
    },
    endTime: {
        type: String, // Store as String in "HH:mm" format
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    }
});

export const slotModel = model<TSlot>('slot', slotSchema);