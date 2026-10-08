// import { z } from "zod";
// export const orderSchema = z.object({
//   name: z
//     .string({ required_error: "Name is required" })
//     .min(2, "Name must be at least 2 characters"),
//   phone: z
//     .string({ required_error: "Phone number is required" })
//     .regex(
//       /^(09|\\+2519)\\d{8}$/,
//       "Phone number must start with 09… or +2519… followed by 8 digits",
//     ),
//   dishId: z.string().optional(),
//   quantity: z
//     .number()
//     .min(1, "Quantity must be at least 1")
//     .optional()
//     .default(1),
//   notes: z.string().max(200, "Notes cannot exceed 200 characters").optional(),
// });

import { z } from "zod";

export const orderSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Delivery address is required"),
  items: z
    .array(
      z.object({
        id: z.string(),
        quantity: z.number().min(1, "Quantity must be at least 1"),
      }),
    )
    .min(1, "Your cart must contain at least one item"),
});
