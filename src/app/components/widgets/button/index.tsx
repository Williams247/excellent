import React from "react";
import { twMerge } from "tailwind-merge";

export function Button(props) {
  return (
    <button
      className={twMerge(
        "bg-primary-200 hover:bg-primary-300 w-full py-2 text-center rounded-md text-white font-noto-sans-semi-bold",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
