"use server";

import createSupabaseServerClient from "@/lib/supabase/server";

export default async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}
