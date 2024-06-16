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
    }
});

export const slotModel = model<TSlot>('slot', slotSchema);