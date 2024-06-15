import { z } from "zod"

export const amenitiesValidationSchema = z.object({
    
})

const createRoomValidationSchema = z.object({
    body : z.object({
        name: z.string(),
        roomNo: z.number(),
        floorNo: z.number(),
        capacity: z.number(),
        pricePerSlot: z.number(),
        amenities: z.array(amenitiesValidationSchema)
    })
})