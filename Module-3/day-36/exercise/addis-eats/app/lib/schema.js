import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const checkoutSchema = z
  .object({
    deliveryMode: z.enum(["prompt", "pickup"]),
    recipientName: z
      .string()
      .min(2, "Recipient name is required (min 2 characters)"),
    phone: z
      .string()
      .min(9, "Phone number is required")
      .regex(
        /^(\+251|0)?9\d{8}$/,
        "Enter a valid Ethiopian phone number (e.g. 0911234567 or +251911234567)",
      ),
    email: z.string().email("Please enter a valid email address"),
    subCity: z.string().optional(),
    streetInfo: z.string().optional(),
    landmark: z.string().optional(),
    dispatchTiming: z.enum(["immediate", "schedule"]),
    paymentMethod: z.enum(["telebirr", "cbe", "cash", "amole"]),
    telebirrPhone: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Conditional validation: require address fields if delivery mode is 'prompt'
    if (data.deliveryMode === "prompt") {
      if (!data.subCity || data.subCity.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["subCity"],
          message: "Please select a sub-city for delivery",
        });
      }
      if (!data.streetInfo || data.streetInfo.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["streetInfo"],
          message: "Street/Building details are required for delivery",
        });
      }
    }

    // Conditional validation: require Telebirr phone if Telebirr is selected
    if (data.paymentMethod === "telebirr") {
      if (!data.telebirrPhone || !/^09\d{8}$/.test(data.telebirrPhone)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["telebirrPhone"],
          message: "Enter a valid 10-digit Telebirr phone (e.g. 0911234567)",
        });
      }
    }
  });
