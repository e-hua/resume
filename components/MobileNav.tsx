"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "academics",
    path: "/academics",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
];

export default function MobileNav() {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTitle></SheetTitle>
      <SheetTrigger>
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="my-20 flex flex-col justify-center items-center gap-8">
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
      </SheetContent>
    </Sheet>
  );
}
