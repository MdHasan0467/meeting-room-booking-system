import { ObjectId } from "mongodb";

export type TSlot = {
    room: string; // Assuming room is stored as ObjectId in MongoDB
    date: Date;
    startTime: string; // Format should be HH:mm
    endTime: string; // Format should be HH:mm
    isBooked: boolean;
    durationInMinutes?: number; // Optional as it will be calculated automatically
}