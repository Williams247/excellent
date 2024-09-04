import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
}

export function TextInput({ type, label, className, placeholder }: Props) {
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
        />
      </div>
    </div>
  );
}
