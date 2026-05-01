import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-40 h-14 flex items-center gap-3 px-4 backdrop-blur-xl bg-background/70 border-b border-border/50">
            <SidebarTrigger />
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Nexarion · Family of anime editors
            </span>
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="border-t border-border/50 mt-20">
            <div className="container py-8 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nexarion Family — Crafted with ✦ for anime editors.
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
