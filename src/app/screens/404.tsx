import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <p>Invalid Navigation</p>
      <Link
        to="/"
        className="text-sm mt-4 font-noto-sans-semi-bold text-primary-300 hover:underline"
      >
        Go Home
      </Link>
    </div>
  );
}
