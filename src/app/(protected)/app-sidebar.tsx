"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Plus,
  Presentation,
  Settings,
  Shield,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Sidebar menu items (static frontend data)
const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Fulfill", url: "/fulfill", icon: Truck },
  { title: "Q&A", url: "/qa", icon: Bot },
  { title: "Meetings", url: "/meetings", icon: Presentation },
  { title: "Billing", url: "/billing", icon: CreditCard },
  { title: "Setting", url: "/setting", icon: Settings },
  { title: "Security", url: "/security", icon: Shield },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="floating">
      {/* Sidebar Header */}
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2">
          <Image
            src="/undraw_cybership.svg"
            alt="logo"
            width={60}
            height={60}
          />
          {open && (
            <h1 className="text-xl font-semibold text-primary/90">Cybership</h1>
          )}
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-y-1">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          "group flex h-12 items-center gap-4 px-4 transition-colors hover:bg-primary/10",
                          {
                            "bg-primary/10 text-primary": isActive,
                          },
                        )}
                      >
                        <item.icon
                          size={22}
                          className={cn("shrink-0", {
                            "text-primary": isActive,
                            "text-muted-foreground": !isActive,
                          })}
                        />
                        <span className="text-sm font-medium tracking-wide">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-4">
          <Link href="/create-order">
            <Button size="sm" variant="outline" className="w-fit gap-y-1">
              <Plus />
              Create Order
            </Button>
          </Link>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
