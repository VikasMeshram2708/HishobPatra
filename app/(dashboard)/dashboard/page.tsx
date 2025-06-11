import { authOptions } from "@/app/utils/auth-options";
import DashCards from "@/components/dashboard/dash-cards";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/");
  return (
    <div className="w-full">
      <div className="space-y-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <DashCards />
      </div>
    </div>
  );
}
