import React from "react";
import { twMerge } from "tailwind-merge";

export function Card(props) {
  return (
    <div
      className={twMerge(
        "border rounded-lg px-5 py-5 bg-white",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
