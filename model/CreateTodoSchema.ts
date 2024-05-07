import { z } from "zod";

const CreateTodoSchema = z.object({
  title: z.string().min(1).max(24),
});

export default CreateTodoSchema;
