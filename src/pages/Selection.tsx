import { selectionGroup } from "@/data/family";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, CheckCircle2, ExternalLink, AlertTriangle } from "lucide-react";

const Selection = () => {
  return (
    <div className="container py-16 max-w-4xl space-y-12">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Khusus editor terpilih
        </div>
        <h1 className="text-5xl md:text-6xl font-bold">
          Group <span className="text-gradient">Seleksi</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">{selectionGroup.tagline}</p>
      </header>

      {/* Hero card */}
      <div className="relative rounded-3xl overflow-hidden border border-primary/40 card-glow p-8 md:p-12">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

        <div className="relative space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" /> Syarat untuk join
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Pastikan kamu memenuhi <span className="text-foreground font-semibold">SEMUA</span> syarat berikut sebelum mendaftar.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {selectionGroup.requirements.map((r, i) => (
              <li
                key={r}
                className="flex items-start gap-3 p-4 rounded-2xl bg-muted/20 border border-border/40 hover:border-primary/40 transition-smooth"
              >
                <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <span className="text-sm">{r}</span>
                </div>
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-destructive/10 border border-destructive/30">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Member yang tidak memenuhi syarat akan dikeluarkan otomatis tanpa pemberitahuan. Hormati admin & sesama member.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2">
            <p className="text-xs text-muted-foreground">
              *Pendaftaran diseleksi langsung oleh admin Nexarion.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground glow"
            >
              <a href={selectionGroup.link} target="_blank" rel="noopener noreferrer">
                Daftar Seleksi <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
