import DashNavbar from "@/components/dashboard/dash-navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashNavbar />
      {children}
    </div>
  );
}
