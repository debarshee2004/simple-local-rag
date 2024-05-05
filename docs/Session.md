# How to Create a Session

## Create a Supabase Server Client

```ts
"use server";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );
}
```

## User Register with Email and Password

```ts
// In the server action
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
```

## Onclick function of the (User Register with Email and Password)

```ts
function onSubmit(data: z.infer<typeof FormSchema>) {
  const result = await signUpWithEmailAndPassword(data);
  const { error } = JSON.parse(result);
  if (error?.message) {
    ...
  } else {
    ...
  }
}
```

# Page Protection

## Read User Session

```ts
"use server";

import { createSupabaseServerClient } from "...";
import { unstable_noStore as noStore } from "next/cache";

export async function readUserSession() {
  noStore();
  const supabsae = await createSupabaseServerClient();
  return await supabsae.auth.getSession();
}
```

```ts
// For protected pages
const { data } = await readUserSession();

if (data.session) {
  return redirect("/protected");
}
```

```ts
// For public pages
const { data } = await readUserSession();

if (!data.session) {
  return redirect("/public");
}
```

## Sign-Out User

```ts
const logout = async () => {
  "use server";
  const supabse = await createSupabaseServerClient();
  await supabse.auth.signOut();
  redirect("/auth-server");
};
```

## User Sign-In with Email and Password

```ts
export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword(data);
  return JSON.stringify(result);
}
```

## Onclick function of the (User Sign-In with Email and Password)

```ts
function onSubmit(data: z.infer<typeof FormSchema>) {
  startTransition(async () => {
    const result = await signInWithEmailAndPassword(data);
    const { error } = JSON.parse(result);
    if (error?.message)
      ...
  });
}
```

# OAuth (To be Refactored)

## Using GitHub

```ts
export async function loginWithGithub() {
  const supabase = await createSupabaseServerClient();

  supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `http://localhost:3000/auth-server/callback`,
    },
  });
}
```

```ts
const supabase = createSupabaseBrowerClient();
const loginWithGithub = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${location.origin}/oauth/callback`,
    },
  });
};
```

## The Callback function

```ts
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const isAuth = cookies().get("supabase-auth-token");

  if (isAuth) {
    return NextResponse.redirect(requestUrl.origin);
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(requestUrl.origin);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect("/auth/auth-code-error");
}
```

# The Middleware

```ts
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  await supabase.auth.getSession();

  return response;
}
```
