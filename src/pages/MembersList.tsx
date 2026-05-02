import { useMemo, useState } from "react";
import { members, getMemberAvatar, hasMemberAvatar, TOTAL_MEMBERS } from "@/data/family";
import { Input } from "@/components/ui/input";
import { Search, Users, ImageOff, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const MembersList = () => {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "with" | "without">("all");

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchQ =
        q.trim() === "" ||
        m.name.toLowerCase().includes(q.toLowerCase()) ||
        String(m.id).includes(q);
      const has = hasMemberAvatar(m.id);
      const matchF = filter === "all" || (filter === "with" ? has : !has);
      return matchQ && matchF;
    });
  }, [q, filter]);

  const withCount = members.filter((m) => hasMemberAvatar(m.id)).length;

  return (
    <div className="container density-section max-w-6xl space-y-8">
      <header className="space-y-3">
        <div className="chip">
          <Users className="h-3.5 w-3.5 text-primary" /> Roster {TOTAL_MEMBERS} member
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Daftar <span className="text-gradient">Member</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          {withCount} dari {TOTAL_MEMBERS} member sudah punya foto di{" "}
          <code className="px-1.5 py-0.5 rounded bg-muted/40 text-xs">src/assets</code>.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama atau nomor member…"
            className="pl-11 h-10 rounded-full"
          />
        </div>
        <div className="flex gap-1 p-1 rounded-full border border-border bg-muted/30 text-xs">
          {(["all", "with", "without"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 h-8 rounded-full transition-colors focus-ring",
                filter === f
                  ? "bg-primary/20 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {f === "all" ? "Semua" : f === "with" ? "Ada foto" : "Belum"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((m) => {
          const has = hasMemberAvatar(m.id);
          return (
            <div
              key={m.id}
              className={cn(
                "surface surface-hover density-pad text-center relative",
                !has && "opacity-90",
              )}
            >
              <div className="relative mx-auto mb-3 w-20 h-20">
                <img
                  src={getMemberAvatar(m.id)}
                  alt={m.name}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="w-full h-full rounded-full object-cover bg-muted/40 border border-border"
                />
                <span
                  className={cn(
                    "absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-background flex items-center justify-center",
                    has ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground",
                  )}
                  title={has ? "Foto tersedia" : "Belum ada foto"}
                >
                  {has ? <ImageIcon className="h-3 w-3" /> : <ImageOff className="h-3 w-3" />}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">#{m.id}</div>
              <div className="text-sm font-semibold truncate">{m.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                Gen {m.gen}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="surface density-pad text-center text-sm text-muted-foreground">
          Tidak ada member yang cocok.
        </div>
      )}
    </div>
  );
};

export default MembersList;
