import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ToggleMode } from "./toggle-mode";

export default function Navbar() {
  return (
    <nav className="bg-background w-full p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            {/* image or heading */}
            <Image
              src="https://ik.imagekit.io/kxstc2rku/HishobPatra/HP-header.png?updatedAt=1749549885452"
              alt="hishbo-patra official"
              width={50}
              height={50}
              className="w-auto h-auto object-contain bg-cover"
            />
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="link">
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/signup">Signup</Link>
            </Button>
            <ToggleMode />
          </div>
        </div>
      </div>
    </nav>
  );
}
