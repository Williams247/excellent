import React from "react";
import { Auth } from "../layout/auth.tsx";
import { Card } from "../components/card/main.tsx";
import { TextInput } from "../components/widgets/input/text-input.tsx";
import { Button } from "../components/widgets/button/index.tsx";
import { Link } from "react-router-dom";

export function TutorLoginPage() {
  return (
    <Auth>
      <div className="h-screen w-full flex justify-center items-center">
        <Card className="mt-10 w-[25rem]">
          <p className="text-center font-bold text-xl font-noto-sans-bold">
            Login
          </p>
          <p className="text-center text-[gray] text-md mt-1 font-noto-sans-semi-bold">
            Login to your account
          </p>
          <div className="mt-6">
            <TextInput
              label="Email"
              placeholder="williams@gmail.com"
              className="text-sm"
            />
          </div>
          <div className="mt-4">
            <TextInput
              label="Password"
              placeholder="*******"
              className="text-sm"
            />
          </div>
          <div className="mt-7">
            <Button>Login</Button>
          </div>
          <div className="flex justify-end">
            <Link
              to="/"
              className="text-sm mt-4 font-noto-sans-semi-bold text-primary-300 hover:underline"
            >
              Login as student
            </Link>
          </div>
        </Card>
      </div>
    </Auth>
  );
}
