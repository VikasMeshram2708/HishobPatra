/**
 * This is Dashboard layout
 */
import DashNavbar from "@/components/dashboard/dash-navbar";
import { DashSidebar } from "@/components/dashboard/dash-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AuthProvider from "../context/auth-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashSidebar />
      <SidebarTrigger />
      <main className="flex flexlcol min-h-screen realtive w-full h-full bg-background">
        <div className="flex-1">
          <DashNavbar />
          <AuthProvider>{children}</AuthProvider>
        </div>
      </main>
    </SidebarProvider>
  );
}
