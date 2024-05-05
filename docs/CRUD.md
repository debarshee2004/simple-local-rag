# CRUD Operations using Supabase

## Create Table

```
id {
    type: id
    value: unique_id()
}
title {
    type: text
}
completed {
    type: boolean
    default: false
}
createdAt {
    type: date
    value: now()
}
createdBy {
    type: id
    value: user_id()
}
```

## Table Policies

Setup so that only the user is authenticated to see their own todos

## Imports

```ts
"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
```

## Create Function

```ts
export async function createTodo(title: string) {
  const supabse = await createSupabaseServerClient();
  const result = await supabse.from("todo").insert({ title }).single();
  revalidatePath("/todo");
  return JSON.stringify(result);
}
```

## Onsubmit Function of Create Form

```ts
function onSubmit(data: z.infer<typeof FormSchema>) {
  const result = await createTodo(data.title);
  const { error, data: todo } = JSON.parse(result);

  if (error?.message) {
    ...
  } else {
    ...
  }
}
```

## Read All Function

```ts
export async function readTodo() {
  noStore();
  const supabse = await createSupabaseServerClient();
  return await supabse.from("todo").select("*");
}
```

## Read Seleted Function

```ts
export async function readTodo(id: string) {
  noStore();
  const supabse = await createSupabaseServerClient();
  return await supabse.from("todo").select("id", id);
}
```

## Delete Function

```ts
export async function deleteTodoById(id: string) {
  const supabse = await createSupabaseServerClient();
  await supabse.from("todo").delete().eq("id", id);
  revalidatePath("/todo");
}
```

## Update Function

```ts
export async function updateTodoById(id: string, completed: boolean) {
  const supabse = await createSupabaseServerClient();
  await supabse.from("todo").update({ completed }).eq("id", id);
  revalidatePath("/todo");
}
```
