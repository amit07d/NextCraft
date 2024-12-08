import { z } from 'zod'

export const signInSchema = z.object({                 
    identifier: z.string(),
    password: z.string()
})

// in industry level we use identifier not email