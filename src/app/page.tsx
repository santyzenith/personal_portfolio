import { NavMenu } from "@/components/header-navigation/header-nav-menu";
import { AppSidebar } from "@/components/sidebar-navigation/app-sidebar";
import { HomeContent } from "@/components/home/home";
import Timeline from "@/components/experience/experience";
import { CarouselProjects } from "@/components/projects/projects";
import { Publications } from "@/components/publications/publications";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <AppSidebar />
      <NavMenu />
      <div className="flex flex-col mx-5 md:mx-20">
        <div id="home" className="h-screen">
          <HomeContent />
        </div>
        <div id="experiences" className="min-h-screen scroll-mt-5 md:scroll-mt-15">
          <Timeline />
        </div>
        <div id="projects" className="h-screen">
          <CarouselProjects />
        </div>
        <div id="publications" className="h-screen">
          <Publications />
        </div>
        <div id="contact" className="h-screen">
          <Contact />
        </div>
      </div>
    </main>
  );
}
