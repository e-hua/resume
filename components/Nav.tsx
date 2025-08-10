"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
];

export default function Nav() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            href={link.path}
            key={idx}
            className={
              (link.path === pathName
                ? "text-accent border-b-2 border-accent "
                : "") +
              "capitalize font-medium hover:text-accent transition-all"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
