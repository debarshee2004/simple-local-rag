"use server";

export async function RegisterWithEmail(values: {
  emailAddress: string;
  password: string;
  passwordConfirm: string;
}) {
  console.log("Register Form Working");
  console.log(values);
}

export async function LoginWithEmail(values: {
  emailAddress: string;
  password: string;
}) {
  console.log("Login Form Working");
  console.log(values);
}
