import React from "react";
import { twMerge } from "tailwind-merge";
import { UseFormReturn } from "react-hook-form";
import { FormError } from "./form-error.tsx";
interface Props {
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  name: string;
  handler: UseFormReturn<any>;
}

export function TextInput({
  type,
  label,
  className,
  placeholder,
  name,
  handler,
}: Props) {
  return (
    <div>
      {label && (
        <label className="text-sm text-[gray] font-noto-sans-regular">
          {label}
        </label>
      )}

      <div
        className={twMerge(
          "rounded-sm border rounded-md mt-1",
          className ?? ""
        )}
      >
        <input
          type={type ?? "text"}
          className="border-none outline-none :focus:border-none :focus:outline-none w-full font-noto-sans-regular"
          placeholder={placeholder}
          {...handler.register(name)}
        />
      </div>
      {handler.formState.errors[name] && (
        <FormError
          className="mt-2"
          message={handler.formState.errors[name]?.message as string}
        />
      )}
    </div>
  );
}
