import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { generations, topMembers, heroBackground, pickImage } from "@/data/family";
import {
  ArrowRight,
  Trophy,
  Users,
  Sparkles,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">
        <img
          src={heroBackground}
          alt="Nexarion editor studio backdrop"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

        <div className="relative container py-20 max-w-5xl">
          <div className="space-y-7 max-w-2xl">
            <div className="chip">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Komunitas editor kreatif
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              Studio kolaborasi <br />
              untuk <span className="text-gradient">editor serius</span>.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              Nexarion adalah sebuah komunitas untuk creator pemula
              Tidak menerima member yang menggunakan preset orang lain
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full shadow-md"
              >
                <Link to="/members">
                  Jelajahi Member <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/selection">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Cek Syarat Seleksi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container density-section">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "Total Member", value: "100+", icon: Users },
            { label: "Top EXP", value: "617K", icon: Trophy },
            { label: "Aktif Harian", value: "80%", icon: PlayCircle },
          ].map((s) => (
            <div key={s.label} className="surface surface-hover density-pad flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GENERATIONS */}
      <section className="container density-section">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Generasi <span className="text-gradient">Nexarion</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Dari generasi awal hingga generasi terbaru.</p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/members">Semua Generasi</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {generations.map((g) => (
            <div key={g.name} className="surface surface-hover density-pad group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted/40 flex items-center justify-center">
                <img
                  src={pickImage(g.imgUrl, g.img)}
                  alt={g.name}
                  loading="lazy"
                  className="w-3/4 h-3/4 object-contain transition-transform group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="text-lg font-bold">{g.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{g.tagline}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-primary">
                <Users className="h-4 w-4" />
                {g.members} member
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PREVIEW */}
      <section className="container density-section">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Top <span className="text-gradient">Member</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">3 besar minggu ini.</p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/top">Lihat Semua</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {topMembers.slice(0, 3).map((m) => (
            <div key={m.rank} className="surface surface-hover density-pad flex items-center gap-4">
              <div className="text-3xl font-bold text-gradient w-10 text-center">#{m.rank}</div>
              <img
                src={m.avatarUrl && m.avatarUrl.trim() !== "" ? m.avatarUrl : m.avatar}
                alt={m.name}
                loading="lazy"
                className="w-14 h-14 rounded-full bg-muted/40 object-cover border border-border"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{m.name}</div>
                <div className="text-xs text-muted-foreground">
                  Lv {m.level} · {m.exp.toLocaleString()} EXP
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
