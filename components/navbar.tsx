import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToggleMode } from "./toggle-mode";
import SignInBtn from "./actions/sign-in-btn";

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
            <Suspense
              fallback={<p className="text-sm font-medium">Loading...</p>}
            >
              <SignInBtn />
            </Suspense>
            <ToggleMode />
          </div>
        </div>
      </div>
    </nav>
  );
}
