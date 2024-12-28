import React from "react";
import { LoginForm } from "~/src/components/auth/login-form";

export default function SignupPage() {
  return (
    <div className="flex-1 container flex justify-center">
      <div className="max-w-sm flex-1 py-12 md:py-24">
          <LoginForm />
      </div>
    </div>
  );
}
