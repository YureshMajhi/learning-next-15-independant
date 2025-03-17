"use client";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center gap-5">
      <Link className={pathname === "/" ? "font-bold" : "text-blue-300"} href={"/"}>
        Home
      </Link>
      <Link
        className={pathname === "/about" ? "font-bold" : "text-blue-300"}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={pathname === "/products/1" ? "font-bold" : "text-blue-300"}
        href={"/products/1"}
      >
        Products 1
      </Link>
      <Link
        className={pathname === "/products/2" ? "font-bold" : "text-blue-300"}
        href={"/products/2"}
      >
        Products 2
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Navigation;
