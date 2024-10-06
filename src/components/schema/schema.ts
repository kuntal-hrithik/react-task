import * as zod from "zod";

export const schema = zod.object({
  id: zod.number().optional(),
  name: zod.string().min(3, "Name must be at least 3 characters"),
  email: zod.string().email(),
  phone: zod.string(),
  website: zod.string(),
  company: zod.object({
    name: zod.string().min(3, "Company name must be at least 3 characters"),
  }),
  address: zod.object({
    city: zod.string(),
    zipcode: zod.string(),
    street: zod.string(),
  }),
});
