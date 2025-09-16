"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Button from "../ui/Button";

const navLinks = [
  {
    id: 1,
    item: "Home",
    link: "/home",
  },
  {
    id: 2,
    item: "About us",
    link: "/about-us",
  },
  {
    id: 3,
    item: "Services",
    link: "/services",
  },
];

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 px-4 md:px-0"
        )}
      >
        <div className="relative rounded-full border border-transparent bg-persian shadow-input flex justify-between items-center px-4 py-4 ">
          <div>Logo</div>
          <div className="space-x-4 hidden md:block">
            {navLinks.map(({ id, item, link }) => (
              <MenuItem key={id} link={link} item={item}></MenuItem>
            ))}
          </div>
          <div>
            <Button>Contact Us</Button>
          </div>
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
