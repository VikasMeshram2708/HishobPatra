"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  return (
    <button
      className="flex items-center gap-2 cursor-pointer"
      onClick={async () => await signOut()}
    >
      <LogOut />
      Logout
    </button>
  );
}
