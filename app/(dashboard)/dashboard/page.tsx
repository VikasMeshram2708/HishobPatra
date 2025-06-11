import { authOptions } from "@/app/utils/auth-options";
import { getServerSession } from "next-auth";
import React from "react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen w-full">
      <h2>Dashboard Page</h2>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </div>
  );
}
