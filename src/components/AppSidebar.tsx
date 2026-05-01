import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Trophy,
  Shield,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
  LayoutGrid,
  Rows3,
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
  useSidebar,
} from "@/components/ui/sidebar";
import { useDensity } from "@/hooks/use-density";
import { cn } from "@/lib/utils";

type Item = { title: string; url: string; icon: React.ComponentType<{ className?: string }>; end?: boolean };

const mainItems: Item[] = [
  { title: "Home", url: "/", icon: Home, end: true },
];

const communityItems: Item[] = [
  { title: "Members", url: "/members", icon: Users },
  { title: "Top Member", url: "/top", icon: Trophy },
  { title: "Admin", url: "/admins", icon: Shield },
];

const featureItems: Item[] = [
  { title: "Group Seleksi", url: "/selection", icon: ShieldCheck },
  { title: "Status Seleksi", url: "/selection/status", icon: ClipboardCheck },
  { title: "Cek TikTok", url: "/tiktok", icon: Search },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();
  const { density, setDensity } = useDensity();

  const isActive = (path: string, end?: boolean) =>
    end ? pathname === path : pathname === path || pathname.startsWith(path + "/");

  const renderItem = (item: Item) => {
    const active = isActive(item.url, item.end);
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          isActive={active}
          className={cn(
            "relative rounded-lg transition-colors",
            active &&
              "bg-primary/15 text-foreground font-semibold hover:bg-primary/20",
          )}
        >
          <NavLink to={item.url} end={item.end} className="flex items-center gap-2.5">
            {active && (
              <span
                aria-hidden
                className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r-full bg-primary"
              />
            )}
            <item.icon
              className={cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-muted-foreground")}
            />
            {!collapsed && <span className="truncate">{item.title}</span>}
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-2.5 px-2 py-3 font-bold focus-ring rounded-md">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-none">
              <span className="text-base text-gradient">Nexarion</span>
              <span className="text-[10px] font-normal text-muted-foreground tracking-wide uppercase">
                Editor Studio
              </span>
            </div>
          )}
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{mainItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Komunitas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{communityItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Fitur</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{featureItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        {!collapsed ? (
          <div className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-1 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setDensity("comfy")}
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs transition-colors focus-ring",
                density === "comfy"
                  ? "bg-primary/20 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-pressed={density === "comfy"}
              aria-label="Mode Comfy"
            >
              <LayoutGrid className="h-3.5 w-3.5" /> Comfy
            </button>
            <button
              type="button"
              onClick={() => setDensity("compact")}
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs transition-colors focus-ring",
                density === "compact"
                  ? "bg-primary/20 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-pressed={density === "compact"}
              aria-label="Mode Compact"
            >
              <Rows3 className="h-3.5 w-3.5" /> Compact
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setDensity(density === "comfy" ? "compact" : "comfy")}
            className="w-full flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors focus-ring"
            aria-label={`Switch ke mode ${density === "comfy" ? "compact" : "comfy"}`}
            title={`Mode: ${density}`}
          >
            {density === "comfy" ? <LayoutGrid className="h-4 w-4" /> : <Rows3 className="h-4 w-4" />}
          </button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
