import { z } from "zod";

const CreateTodoSchema = z.object({
  title: z.string().max(24),
});

export default CreateTodoSchema;
