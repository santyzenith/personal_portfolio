import { NavMenu } from "@/components/header-navigation/header-nav-menu";
import { AppSidebar } from "@/components/sidebar-navigation/app-sidebar";
import { HomeContent } from "@/components/home/home";
import Timeline from "@/components/experience/experience";
import { CarouselProjects } from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <AppSidebar />
      <NavMenu />
      <div className="flex flex-col mx-5 md:mx-20">
        <div id="home" className="h-screen">
          <HomeContent />
        </div>
        <div id="experiences" className="justify-center">
          <Timeline />
        </div>
        <div id="projects" className="justify-center">
          <CarouselProjects />
        </div>
      </div>
    </main>
  );
}
