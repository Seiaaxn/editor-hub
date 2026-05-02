import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useDensity } from "@/hooks/use-density";
import { LayoutGrid, Rows3 } from "lucide-react";
import { cn } from "@/lib/utils";

const titles: Record<string, string> = {
  "/": "Home",
  "/members": "Members",
  "/members/list": "Daftar 105 Member",
  "/top": "Top Member",
  "/admins": "Admin",
  "/selection": "Group Seleksi",
  "/selection/status": "Status Seleksi",
  "/tiktok": "Cek TikTok",
};

const Layout = () => {
  const { density, toggle } = useDensity();
  const { pathname } = useLocation();
  const title = titles[pathname] ?? "Nexarion";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-40 h-14 flex items-center gap-3 px-4 backdrop-blur-xl bg-background/75 border-b border-border">
            <SidebarTrigger className="focus-ring" />
            <div className="h-5 w-px bg-border" aria-hidden />
            <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
            <span className="text-xs text-muted-foreground hidden md:inline">· Nexarion Editor Studio</span>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={toggle}
                className={cn(
                  "hidden sm:inline-flex items-center gap-1.5 px-3 h-8 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors focus-ring",
                )}
                aria-label={`Mode tampilan: ${density}. Klik untuk ubah.`}
                title={`Mode: ${density}`}
              >
                {density === "comfy" ? <LayoutGrid className="h-3.5 w-3.5" /> : <Rows3 className="h-3.5 w-3.5" />}
                <span className="capitalize">{density}</span>
              </button>
            </div>
          </header>
          <main className="flex-1 anim-fade-in">
            <Outlet />
          </main>
          <footer className="border-t border-border mt-12">
            <div className="container py-6 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nexarion · Komunitas editor kreatif.
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
