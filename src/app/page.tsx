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
        <div className="h-screen border-2 border-amber-700">
          <HomeContent />
        </div>
        <div className="border-2 border-amber-300 justify-center">
          <Timeline />
        </div>
        <div className="border-2 border-amber-950 justify-center">
          <CarouselProjects />
        </div>
      </div>
    </main>
  );
}
