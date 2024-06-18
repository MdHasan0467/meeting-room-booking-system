

export type TSlot = {
    room: string; //^ Assuming room is stored as ObjectId in MongoDB
    date: Date;
    startTime: string; //^ Format should be HH:mm
    endTime: string; //^ Format should be HH:mm
    isBooked: boolean;
    SlotDuration?: number; //^ Optional as it will be calculated automatically
}