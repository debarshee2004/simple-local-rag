"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function RegisterWithEmail(values: {
  emailAddress: string;
  password: string;
  passwordConfirm: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: values.emailAddress,
    password: values.password,
  });
  return JSON.stringify(result);
}

export async function LoginWithEmail(values: {
  emailAddress: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: values.emailAddress,
    password: values.password,
  });
  return JSON.stringify(result);
}
