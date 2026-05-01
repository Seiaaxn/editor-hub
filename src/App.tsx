import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Members from "./pages/Members";
import TopMembers from "./pages/TopMembers";
import Admins from "./pages/Admins";
import TikTokSearch from "./pages/TikTokSearch";
import Selection from "./pages/Selection";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/top" element={<TopMembers />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/selection" element={<Selection />} />
              <Route path="/tiktok" element={<TikTokSearch />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
