/**
 * This navbar is used only in protected routes.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { navbarData } from "@/data";
import { usePathname } from "next/navigation";

export default function DashNavbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background p-6 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              {/* image or heading */}
              <Image
                src="https://ik.imagekit.io/kxstc2rku/HishobPatra/HP-header.png?updatedAt=1749549885452"
                alt="hishbopatra official"
                width={50}
                height={50}
                className="w-auto h-auto object-contain bg-cover"
              />
            </Link>
            <ul className="flex items-center gap-4">
              {navbarData.map((elem, idx) => (
                <li key={idx} className="text-sm font-medium">
                  <Link
                    href={elem.href}
                    className={`transition-colors hover:text-primary ${
                      pathname === elem.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {elem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {/* Searchbar */}
            <div className="relative">
              <SearchIcon className="absolute w-5 h-5 text-muted-foreground top-2 left-2" />
              <Input
                placeholder="Search Dashboard"
                type="string"
                className="pl-8"
              />
            </div>
            <Avatar>
              <AvatarImage
                alt={session?.user?.name ?? "User Name"}
                src={session?.user?.image ?? "https://github.com/shadcn.png"}
              />
              <AvatarFallback>
                {session?.user?.name?.charAt(0) ?? "U"}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
