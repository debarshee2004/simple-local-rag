"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import LoginFormSchema from "@/model/LoginFormSchema";
import GitHubButton from "@/components/GitHubButton";
import GoogleButton from "@/components/GoogleButton";

const RegisterUser = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });
  const handleLogInSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    console.log(values);
  };
  return (
    <Card className="flex flex-col text-left h-3/5 w-[320px] sm:w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>Enter your email and password</CardDescription>
      </CardHeader>
      <div className="flex flex-col text-center px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogInSubmit)}>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-sm text-right py-1 text-gray-500">
                <Link href="/signup">Forgot Password?</Link>
              </div>
            </div>
            <div className="py-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
        <Link className="text-sm text-gray-500" href="/sign-up">
          Don`t have an account? Create Here.
        </Link>
      </div>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm uppercase">
          <span className="px-2">Or continue with</span>
        </div>
      </div>
      <div className="flex justify-evenly p-4">
        <div className="px-1">
          <GoogleButton />
        </div>
        <div className="px-1">
          <GitHubButton />
        </div>
      </div>
    </Card>
  );
};

export default RegisterUser;
