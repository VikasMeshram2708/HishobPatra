import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RegisterFormHeader() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link href="/" className="flex flex-col items-center gap-2 font-medium">
        <div className="flex size-8 items-center justify-center rounded-md">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://ik.imagekit.io/kxstc2rku/HishobPatra/HP-header.png?updatedAt=1749549885452"
              alt="hishbo-patra official"
              width={50}
              height={50}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
        <span className="sr-only">Acme Inc.</span>
      </Link>
      {/* <h1 className="text-xl font-bold">Welcome to हिशोबपत्र.</h1> */}
      <div className="text-center text-sm">
        Already have an account ?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
}
