import { z } from "zod";

const UpdateTodoSchema = z.object({
  title: z.string().min(1).max(24),
});

export default UpdateTodoSchema;
