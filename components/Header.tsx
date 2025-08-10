import React from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  return (
    <header className="py-8 md:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Hua</h1>
        <div className="hidden md:flex">
          {/* Shows the header under desktop mode */}
          <Nav />
          {/* Shows the header under mobile mode */}
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
