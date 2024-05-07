import { z } from "zod";

const UpdateTodoSchema = z.object({
  title: z.string().max(24),
});

export default UpdateTodoSchema;
