"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import UpdateTodoSchema from "@/model/UpdateTodoSchema";

const UpdateTodo = () => {
  const form = useForm<z.infer<typeof UpdateTodoSchema>>({
    resolver: zodResolver(UpdateTodoSchema),
    defaultValues: {
      title: "",
    },
  });
  const handleUpdateTodo = async (values: z.infer<typeof UpdateTodoSchema>) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16 w-full flex justify-between fixed z-50 bg-[#0C0A09]">
        <div className="p-3">
          <Link href="/todo">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="min-h-screen w-full flex justify-center items-center">
        <Card className="flex flex-col text-left h-3/5 w-[320px] sm:w-[400px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Update Todo</CardTitle>
          </CardHeader>
          <div className="flex flex-col text-center px-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleUpdateTodo)}>
                <div className="flex flex-col py-2 text-left">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Add Updated Todo Here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="py-3">
                  <Button className="w-full" type="submit">
                    Update
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UpdateTodo;