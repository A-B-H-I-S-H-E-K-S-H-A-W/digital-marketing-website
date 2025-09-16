"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    item: "Services",
    link: "/services",
  },
  {
    id: 2,
    item: "About us",
    link: "/about-us",
  },
  {
    id: 3,
    item: "Contact",
    link: "/contact",
  },
];

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
        <div className="relative rounded-full border border-transparent bg-persian shadow-input flex justify-center space-x-4 px-8 py-6 ">
          {navLinks.map(({ id, item, link }) => (
            <MenuItem key={id} link={link} item={item}></MenuItem>
          ))}
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({ item, link }) => {
  return (
    <Link
      className="relative cursor-pointer text-foreground hover:opacity-[0.9]"
      href={link}
    >
      {item}
    </Link>
  );
};
