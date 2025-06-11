import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToggleMode } from "./toggle-mode";
import SignInBtn from "./actions/sign-in-btn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth-options";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SignOutBtn from "./signout-btn";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
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
              {session && session?.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={session?.user?.image || ""}
                        alt={session?.user?.name || ""}
                      />
                      <AvatarFallback>
                        {session?.user?.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/dashboard/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SignOutBtn />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <SignInBtn />
              )}
            </Suspense>
            <ToggleMode />
          </div>
        </div>
      </div>
    </nav>
  );
}
