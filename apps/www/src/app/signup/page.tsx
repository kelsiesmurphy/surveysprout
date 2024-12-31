import React from "react";
import { SignupForm } from "~/src/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="flex-1 container flex justify-center">
      <div className="max-w-sm flex-1 py-12 md:py-24">
        <SignupForm />
      </div>
    </div>
  );
}
