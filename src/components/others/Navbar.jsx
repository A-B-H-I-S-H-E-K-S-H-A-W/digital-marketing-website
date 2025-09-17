"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const navLinks = [
  { id: 1, item: "Home", link: "/home" },
  { id: 2, item: "About us", link: "/about-us" },
  { id: 3, item: "Services", link: "/services" },
];

export function Navbar() {
  const [isAfterHero, setIsAfterHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsAfterHero(window.scrollY > heroHeight - window.innerHeight / 2);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isAfterHero ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isAfterHero ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={cn(
              "inset-x-0 max-w-5xl fixed bottom-12 mx-auto z-50 px-4 md:px-0 transition-all duration-500 ease-in-out"
            )}
          >
            <div className="relative rounded-full border border-transparent bg-persian shadow-input flex justify-between items-center px-4 py-4">
              <div>
                <Link href={"/"}>
                  <Image src={logo} alt="logo" className="md:w-50 w-40" />
                </Link>
              </div>
              <div className="space-x-6 hidden md:block">
                {navLinks.map(({ id, item, link }) => (
                  <MenuItem key={id} link={link} item={item} />
                ))}
              </div>
              <div>
                <Button>Contact Us</Button>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <div
            className={cn(
              "inset-x-0 max-w-5xl absolute top-12 mx-auto z-50 px-4 md:px-0 transition-all duration-500 ease-in-out"
            )}
          >
            <div className="relative rounded-full border border-transparent bg-persian shadow-input flex justify-between items-center px-4 py-4">
              <div>
                <Link href={"/"}>
                  <Image src={logo} alt="logo" className="md:w-50 w-40" />
                </Link>
              </div>
              <div className="space-x-6 hidden md:block">
                {navLinks.map(({ id, item, link }) => (
                  <MenuItem key={id} link={link} item={item} />
                ))}
              </div>
              <div>
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
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
