import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background w-full p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* image or heading */}
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="hishbo-patra official"
            />
            <AvatarFallback>HP</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
