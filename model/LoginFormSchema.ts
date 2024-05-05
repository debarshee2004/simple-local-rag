import { z } from "zod";

const LoginFormSchema = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(8),
});

export default LoginFormSchema;
