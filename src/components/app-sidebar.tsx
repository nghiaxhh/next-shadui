"use client";

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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { changeConversationName } from "@/lib/features/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

// Menu items.
const items = [
  {
    id: 1,
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    id: 2,
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    id: 3,
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    id: 5,
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const dispatch = useAppDispatch();
  const conversationId = useAppSelector(
    (state) => state.conversation.conversation.id
  );

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center flex-row">
        <Image size={40} strokeWidth={1.5} />
        <div> One Assistant</div>
      </SidebarHeader>
      <div className="bg-[#FEF6F6] py-6 px-4  ml-4 mt-0 rounded-[12] flex flex-col flex-auto">
        <SidebarContent>
          <div className="bg-[#E0E7F0]  px-4 h-12 flex justify-center items-center rounded-[25]">
            <Plus size={24} strokeWidth={1} />
            <div> New Workspace</div>
          </div>
          <SidebarMenu>
            {items.map((item, idx) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  className={`cursor-pointer ${
                    item.id === conversationId && "bg-cyan-200"
                  }`}
                  asChild
                  onClick={() => {
                    dispatch(
                      changeConversationName({
                        id: item.id,
                        title: item.title,
                      })
                    );
                  }}
                >
                  <div className="flex justify-between bg-[#E0E7F0] my-2 px-4 h-12">
                    <span>{item.title}</span>
                    <item.icon />
                  </div>
                </SidebarMenuButton>
                {idx === 0 && (
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>Thread ABC</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>Thread ABC</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>Thread ABC</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                )}
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
              <SidebarMenuButton>admin@1bitlab.io</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
