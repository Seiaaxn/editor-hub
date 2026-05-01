import { topMembers } from "@/data/family";
import { Crown, Medal, Award, TrendingUp } from "lucide-react";

const icons = [Crown, Medal, Award];

const getAvatar = (m: (typeof topMembers)[number]) =>
  m.avatarUrl && m.avatarUrl.trim() !== "" ? m.avatarUrl : m.avatar;

const TopMembers = () => {
  const max = topMembers[0].exp;
  return (
    <div className="container py-16 space-y-14">
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs">
          <TrendingUp className="h-3.5 w-3.5 text-primary" /> Leaderboard mingguan
        </div>
        <h1 className="text-5xl md:text-6xl font-bold">
          Top <span className="text-gradient">Member</span>
        </h1>
        <p className="text-muted-foreground">Editor dengan EXP tertinggi di Nexarion.</p>
      </header>

      {/* Podium */}
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto items-end">
        {[1, 0, 2].map((i) => {
          const m = topMembers[i];
          const Icon = icons[i];
          const heights = ["h-56", "h-72", "h-52"];
          const tints = [
            "from-gray-300/30 to-gray-500/10 border-gray-300/40",
            "from-yellow-400/40 to-primary/20 border-yellow-400/60",
            "from-amber-600/30 to-orange-700/10 border-amber-600/40",
          ];
          return (
            <div
              key={m.rank}
              className={`relative rounded-3xl p-6 text-center border bg-gradient-to-b ${tints[i]} backdrop-blur-md ${heights[i]} flex flex-col justify-end ${
                i === 0 ? "anim-pulse-glow shadow-[0_0_50px_hsl(var(--primary)/0.4)]" : ""
              }`}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className={`relative ${i === 0 ? "anim-float" : ""}`}>
                  <div className="absolute inset-0 rounded-full blur-xl bg-primary/40" />
                  <img
                    src={getAvatar(m)}
                    alt={m.name}
                    loading="lazy"
                    className="relative w-24 h-24 rounded-full object-cover bg-muted/40 border-4 border-background ring-2 ring-primary/40"
                  />
                </div>
              </div>
              <Icon
                className={`h-7 w-7 mx-auto mb-2 ${
                  i === 0 ? "text-yellow-400" : i === 1 ? "text-gray-300" : "text-amber-600"
                }`}
              />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Rank #{m.rank}</div>
              <div className="font-bold truncate text-lg mt-1">{m.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Lv {m.level} · {m.exp.toLocaleString()} EXP
              </div>
            </div>
          );
        })}
      </div>

      {/* Full list */}
      <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {topMembers.map((m) => {
          const pct = Math.round((m.exp / max) * 100);
          return (
            <div
              key={m.rank}
              className="card-glow rounded-2xl p-4 flex items-center gap-4 border border-border/40 hover:border-primary/40 hover:-translate-y-0.5 transition-smooth"
            >
              <div className="text-2xl font-bold text-gradient w-10 text-center">#{m.rank}</div>
              <img
                src={getAvatar(m)}
                alt={m.name}
                loading="lazy"
                className="w-14 h-14 rounded-full bg-muted/40 object-cover border-2 border-primary/30"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{m.name}</div>
                <div className="text-xs text-muted-foreground mb-1.5">
                  Lv {m.level} · {m.exp.toLocaleString()} EXP
                </div>
                <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
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
