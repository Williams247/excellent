import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { menus } from "./constant.ts";
import { Logout } from "../components/icons/logout.tsx";

export function Main(props) {
  return (
    <div className="flex h-screen">
      <div
        className={twMerge(
          "py-2 flex justify-between flex-col",
          "w-[18rem] border border-r-2 px-2"
        )}
      >
        <div>
          <ul>
            {menus.map(({ text, link, Icon }, index) => (
              <Link key={index} to={link}>
                <li className="mt-5 flex gap-2">
                  <Icon />
                  <span className="text-sm">{text}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <button className="flex gap-2">
            <Logout />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
      <div className="w-full px-5 py-5">{props.children}</div>
    </div>
  );
}
