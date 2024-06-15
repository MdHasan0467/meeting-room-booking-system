import { z } from "zod"


const createUserValidationSchema = z.object({
    body : z.object({
        name: z.string({required_error:"name is required"}),
        email: z.number({required_error:"email is required"}),
        role: z.number({required_error:"role is required"}),
        password: z.number({required_error:"password is required"}),
        phone: z.number({required_error:"phone is required"}),
        address: z.number({required_error:"address is required"}),
    })
})


export const UserValidation = {
    createUserValidationSchema,
}