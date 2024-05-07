"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export async function createTodo(title: string) {
  const supabse = await createSupabaseServerClient();
  const result = await supabse.from("todo").insert({ title }).single();
  console.log(result);
  revalidatePath("/todo");
  return JSON.stringify(result);
}

export async function readTodo() {
  noStore();
  const supabse = await createSupabaseServerClient();
  return await supabse.from("todo").select("*");
}

export async function deleteTodoById(id: string) {
  const supabse = await createSupabaseServerClient();
  await supabse.from("todo").delete().eq("id", id);
  revalidatePath("/todo");
}

export async function updateTodoById(todo: any) {
  const completed = !todo.completed;
  const Uid = todo.id;
  const supabse = await createSupabaseServerClient();
  await supabse.from("todo").update({ completed }).eq("id", Uid);
  revalidatePath("/todo");
}
