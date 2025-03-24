import {
  Calendar,
  Home,
  Image,
  Inbox,
  Plus,
  Search,
  Settings,
  UserRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center flex-row">
        <Image size={40} strokeWidth={1.5} />
        <div> One Assistant</div>
      </SidebarHeader>
      <div className="bg-[#FEF6F6] py-6 px-2 mb-6 mx-4 mt-0 rounded-[12] flex flex-col flex-auto">
        <SidebarContent>
          <div className="bg-[#E0E7F0]  px-4 h-12 flex justify-center items-center rounded-[25]">
            <Plus size={24} strokeWidth={1} />
            <div> New Workspace</div>
          </div>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <div className="flex bg-[#E0E7F0] my-2 px-4 h-12">
                    <item.icon />
                    <span>{item.title}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-0">
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center ">
              <div className="aspect-square h-10 rounded-full bg-[#EADDFF] flex items-center justify-center">
                <UserRound size={28} color="#000000" strokeWidth={1} />
              </div>
              <SidebarMenuButton>nghiahh@1bitlab.io</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
