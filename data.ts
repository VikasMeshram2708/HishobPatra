/**
 * Dashboard navbar data
 */

interface NavbarData {
    label:string;
    href:string
}

export const navbarData: NavbarData[] = [
{
    label: "Dashboard", 
    href: "/dashboard",
  },
  {
    label: "Customers", 
    href: "/dashboard/customers",
  },
  {
    label: "Invoices", 
    href: "/dashboard/invoices",
  },
  {
    label: "Payments", 
    href: "/dashboard/payments",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
  },
];