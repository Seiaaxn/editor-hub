import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { generations, topMembers } from "@/data/family";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Trophy, Users, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Nexarion mystical hero"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Family of Anime Editors</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Selamat Datang di <br />
            <span className="text-gradient">Nexarion</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Sebuah marga editor para kreator anime. Bergabunglah dengan ribuan editor lain dan jadilah legenda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full glow">
              <Link to="/members">Jelajahi <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/40">
              <Link to="/admins">Info Admin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GENERATIONS */}
      <section className="container py-20">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">Generasi <span className="text-gradient-accent">Nexarion</span></h2>
          <p className="text-muted-foreground">Dari generasi awal hingga generasi terbaru.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {generations.map((g) => (
            <div key={g.name} className="card-glow rounded-3xl p-6 border border-border/50 hover:border-primary/40 transition-smooth group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-muted/30 flex items-center justify-center">
                <img src={g.img} alt={g.name} loading="lazy" className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-smooth" />
              </div>
              <h3 className="text-xl font-bold mb-1">{g.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{g.tagline}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Users className="h-4 w-4" />
                {g.members} member
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Total Member", value: "1,323", icon: Users },
            { label: "Top Editor", value: "EXP 617K", icon: Trophy },
            { label: "Aktif Daily", value: "98%", icon: Sparkles },
          ].map((s) => (
            <div key={s.label} className="card-glow rounded-3xl p-8 text-center border border-border/40">
              <s.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-4xl font-bold text-gradient mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PREVIEW */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold">Top <span className="text-gradient">Member</span></h2>
            <p className="text-muted-foreground mt-2">3 besar minggu ini.</p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/top">Lihat Semua</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {topMembers.slice(0, 3).map((m) => (
            <div key={m.rank} className="card-glow rounded-3xl p-6 border border-primary/20 flex items-center gap-4 hover:border-primary/50 transition-smooth">
              <div className="text-4xl font-bold text-gradient w-12">#{m.rank}</div>
              <img src={m.avatarUrl && m.avatarUrl.trim() !== "" ? m.avatarUrl : m.avatar} alt={m.name} loading="lazy" className="w-16 h-16 rounded-full bg-muted/40 object-cover border-2 border-primary/30" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{m.name}</div>
                <div className="text-xs text-muted-foreground">Lv {m.level} · {m.exp.toLocaleString()} EXP</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
