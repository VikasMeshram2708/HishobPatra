/**
 * This is Dashboard layout
 */
import DashNavbar from "@/components/dashboard/dash-navbar";
import { DashSidebar } from "@/components/dashboard/dash-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
