import { NavMenu } from "@/components/header-navigation/header-nav-menu";
import { AppSidebar } from "@/components/sidebar-navigation/app-sidebar";
import { HomeContent } from "@/components/home/home";
import { ExperienceTimeline } from "@/components/experience/experience";

export default function Home() {
  return (
    <main className="px-1 w-screen h-screen overflow-x-hidden">
      <AppSidebar />
      <NavMenu />
      <div className="size-full p-15">
        <div className="size-full">
          <HomeContent />
        </div>
        <div className="size-full">
          <ExperienceTimeline />
        </div>
      </div>
    </main>
  );
}
