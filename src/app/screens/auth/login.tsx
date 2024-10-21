import React from "react";
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Auth } from "../../layout/auth.tsx";
import { Card } from "../../components/card/main.tsx";
import { TextInput } from "../../components/widgets/input/text-input.tsx";
import { Button } from "../../components/widgets/button/index.tsx";
import { loginSchema, loginSchemaType } from "./schema.ts";

export function LoginPage() {
  const formHook = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  function loginFunc(event: loginSchemaType) {
    console.log(event)
    redirect("/topics")
  }

  return (
    <Auth>
      <div className="h-screen w-full flex justify-center items-center">
        <Card className="mt-10 w-[25rem]">
          <form onSubmit={formHook.handleSubmit(loginFunc)}>
            <p className="text-center font-bold text-xl font-noto-sans-bold">
              Login
            </p>
            <p className="text-center text-[gray] text-md mt-1 font-noto-sans-semi-bold">
              Login to your account
            </p>
            <div className="mt-6">
              <TextInput
                label="ID Code"
                placeholder="12op1233osc"
                className="text-sm"
                handler={formHook}
                name="code"
              />
            </div>
            <div className="mt-4">
              <TextInput
                label="Password"
                placeholder="*******"
                className="text-sm"
                handler={formHook}
                name="password"
              />
            </div>
            <div className="mt-7">
              <Button>Login</Button>
            </div>
          </form>
        </Card>
      </div>
    </Auth>
  );
}
