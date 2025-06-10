/**
 * This navbar is used only in protected routes.
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export default function DashNavbar() {
  return (
    <nav className="w-full bg-background p-6">
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
                alt="user name"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
