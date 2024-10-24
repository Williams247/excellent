import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
}

export function Radio({ text }: Props) {
  return (
    <div>
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className={twMerge(
          "w-4 h-4 text-primary-100 bg-white border-gray-300 focus:ring-primary-100 dark:focus:ring-primary-100",
          "focus:ring-primary-100 dark:border-primary-100"
        )}
      />
      <label for="default-radio-1" className="ms-2 text-sm">
        {text}
      </label>
    </div>
  );
}
