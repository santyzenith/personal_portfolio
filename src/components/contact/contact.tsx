"use client";

import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Facebook, Instagram } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().optional(),
});

export function Contact() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("❌ Error: " + data.error);
        return;
      }

      alert("¡Thanks!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex w-full self-center justify-evenly flex-wrap my-auto">
        <div className="flex justify-center md:justify-start">
          <span className="break-all text-center md:text-left px-5 pb-5 md:pb-0 text-4xl md:text-6xl font-bold">
            Contact
          </span>
        </div>
        <div className="px-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                      <Input placeholder="Your message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-center">
                <Button type="submit" className="cursor-pointer">Get in touch</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <footer className="w-screen -mx-10 md:-mx-20">
        <Separator />
        <div className="flex flex-wrap-reverse py-5 justify-between">
          <div className="flex w-full md:w-4/5 text-center justify-center md:justify-start text-muted-foreground">
            <span className="px-5">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Santiago García
              </Link>
              . All rights reserved. Made with ❤️ in Ecuador.
            </span>
          </div>
          <div className="flex w-full md:w-1/5 flex-wrap md:flex-nowrap items-center justify-center space-x-4">
            <Link href="#" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
