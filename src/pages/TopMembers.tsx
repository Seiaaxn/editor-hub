import { topMembers } from "@/data/family";
import { Crown, Medal, Award, TrendingUp } from "lucide-react";

const icons = [Crown, Medal, Award];

const getAvatar = (m: (typeof topMembers)[number]) =>
  m.avatarUrl && m.avatarUrl.trim() !== "" ? m.avatarUrl : m.avatar;

const TopMembers = () => {
  const max = topMembers[0].exp;
  return (
    <div className="container density-section space-y-12 max-w-5xl">
      <header className="space-y-3">
        <div className="chip"><TrendingUp className="h-3.5 w-3.5 text-primary" /> Leaderboard mingguan</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Top <span className="text-gradient">Member</span>
        </h1>
        <p className="text-sm text-muted-foreground">Editor dengan EXP tertinggi di Nexarion.</p>
      </header>

      {/* Podium */}
      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
        {[1, 0, 2].map((i) => {
          const m = topMembers[i];
          const Icon = icons[i];
          const tints = [
            "border-zinc-400/50",
            "border-yellow-400/60",
            "border-amber-600/50",
          ];
          const iconTints = ["text-zinc-300", "text-yellow-400", "text-amber-600"];
          return (
            <div
              key={m.rank}
              className={`surface density-pad text-center border-2 ${tints[i]} ${i === 0 ? "sm:-translate-y-3" : ""}`}
            >
              <img
                src={getAvatar(m)}
                alt={m.name}
                loading="lazy"
                className="w-20 h-20 rounded-full object-cover bg-muted/40 border-2 border-border mx-auto mb-3"
              />
              <Icon className={`h-6 w-6 mx-auto mb-1 ${iconTints[i]}`} />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Rank #{m.rank}</div>
              <div className="font-bold truncate text-base mt-1">{m.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Lv {m.level} · {m.exp.toLocaleString()} EXP
              </div>
            </div>
          );
        })}
      </div>

      {/* Full list */}
      <div className="grid sm:grid-cols-2 gap-3">
        {topMembers.map((m) => {
          const pct = Math.round((m.exp / max) * 100);
          return (
            <div
              key={m.rank}
              className="surface surface-hover density-pad flex items-center gap-4"
            >
              <div className="text-xl font-bold text-gradient w-9 text-center">#{m.rank}</div>
              <img
                src={getAvatar(m)}
                alt={m.name}
                loading="lazy"
                className="w-12 h-12 rounded-full bg-muted/40 object-cover border border-border"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{m.name}</div>
                <div className="text-xs text-muted-foreground mb-1.5">
                  Lv {m.level} · {m.exp.toLocaleString()} EXP
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopMembers;
