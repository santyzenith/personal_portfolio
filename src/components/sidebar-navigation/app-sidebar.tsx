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
        <div className="flex w-full fixed justify-start">
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
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#experiences">
                        <span>Experience</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#projects">
                        <span>Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#publications">
                        <span>Publications</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#contact">
                        <span>Contact</span>
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
