import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  message: string;
  className?: string;
}

export function FormError({ message, className }: Props) {
  return <p className={twMerge("text-[red] text-sm", className)}>{message}</p>;
}
