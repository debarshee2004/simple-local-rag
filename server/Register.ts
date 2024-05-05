"use server";

import createSupabaseServerClient from "@/lib/supabase/server";

export async function RegisterWithEmail(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}
