"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@repo/ui/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import SurveySproutLogo from "../logo";
import { useToast } from "@repo/ui/hooks/use-toast";
import Link from "next/link";
import { ForgotPaswordModal } from "./forgot-password";
import GoogleSignOn from "./google-sign-on";
import { useState } from "react";
import { signIn } from "~/src/lib/auth";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setError(null);
      await signIn(values.email, values.password);
      toast({
        description: "You have successfully logged in.",
      });
      router.push(`${process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL}`);
    } catch (err) {
      setError("Invalid email or password.");
    }
  }

  return (
    <Form {...form}>
      <div className="space-y-3 flex flex-col items-center text-center pb-8">
        <SurveySproutLogo />
        <h1 className="text-2xl md:text-3xl font-semibold">
          Log in to your account
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Please enter your details.
        </p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <ForgotPaswordModal />
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
        <GoogleSignOn />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="text-sm text-muted-foreground text-center">
          Don't have an account?{" "}
          <Button variant="link" className="px-0" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </p>
      </form>
    </Form>
  );
}
