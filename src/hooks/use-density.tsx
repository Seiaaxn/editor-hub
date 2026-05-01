import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Density = "comfy" | "compact";
const STORAGE_KEY = "nexarion:density";

type Ctx = {
  density: Density;
  setDensity: (d: Density) => void;
  toggle: () => void;
};

const DensityCtx = createContext<Ctx | null>(null);

export const DensityProvider = ({ children }: { children: React.ReactNode }) => {
  const [density, setDensityState] = useState<Density>("comfy");

  // Load on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Density | null;
      if (stored === "comfy" || stored === "compact") setDensityState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect to <html data-density="...">
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-density", density);
  }, [density]);

  const setDensity = useCallback((d: Density) => {
    setDensityState(d);
    try { localStorage.setItem(STORAGE_KEY, d); } catch { /* ignore */ }
  }, []);

  const toggle = useCallback(() => {
    setDensity(density === "comfy" ? "compact" : "comfy");
  }, [density, setDensity]);

  const value = useMemo(() => ({ density, setDensity, toggle }), [density, setDensity, toggle]);
  return <DensityCtx.Provider value={value}>{children}</DensityCtx.Provider>;
};

export const useDensity = () => {
  const ctx = useContext(DensityCtx);
  if (!ctx) throw new Error("useDensity must be used within DensityProvider");
  return ctx;
};
