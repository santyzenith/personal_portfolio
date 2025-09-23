"use client";

import React from "react";
import {
  SidebarHeader,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  // SidebarFooter,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar";


export function AppSidebar() {

  const { isMobile } = useSidebar();

  return (
    isMobile && (
      <>
        <div className="flex w-full fixed justify-start z-10">
          <SidebarTrigger className="cursor-pointer ml-1" />
        </div>
        <Sidebar>
          <SidebarHeader>
            Menu
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#home">
                        <span className="text-base font-bold">Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#experiences">
                        <span className="text-base font-bold">Experience</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#projects">
                        <span className="text-base font-bold">Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#publications">
                        <span className="text-base font-bold">Publications</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#contact">
                        <span className="text-base font-bold">Contact</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          {/* <SidebarFooter className="border-t-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <span className="text-sm md:text-base cursor-pointer">
                <Settings />
                Configuración
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}
        </Sidebar>
      </>
    )
  );
};
