import { TBooking } from "./booking.interface";
import { bookingModel } from "./booking.model";

const createBookingIntoDB = async (payload : TBooking) => {

    const result = await bookingModel.create(payload);
    return result
}



export const BookingServices = {
    createBookingIntoDB,
}