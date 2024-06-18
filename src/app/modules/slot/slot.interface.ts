import { ObjectId } from "mongodb";

export type TSlot = {
    room: string; // Reference to the specific room being booked
    date: Date; // Date of the booking
    startTime: string; // Start time of the slot
    endTime: string; // End time of the slot
    isBooked: boolean; // Boolean to indicate whether the slot has been marked as booked
}