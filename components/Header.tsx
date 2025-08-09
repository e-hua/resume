import React from "react";
import Nav from "@/components/Nav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Chen Guanhua</h1>
        <div className="hidden md:flex">
          {/* Shows the header under desktop mode */}
          <Nav />
          {/* Shows the header under mobile mode */}
        </div>
        <div className="md:hidden"> Mobile Nav</div>
      </div>
    </header>
  );
}
