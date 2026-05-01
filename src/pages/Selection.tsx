import { useState } from "react";
import { Link } from "react-router-dom";
import { selectionGroup } from "@/data/family";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ELIGIBILITY_QUESTIONS, useEligibility } from "@/hooks/use-eligibility";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  AlertTriangle,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Selection = () => {
  const { answers, update, allAnswered, eligible, passed, total, progress } = useEligibility();
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="container density-section max-w-4xl space-y-10">
      <header className="text-center space-y-3">
        <div className="chip mx-auto">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Khusus editor terpilih
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Group <span className="text-gradient">Seleksi</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">{selectionGroup.tagline}</p>
      </header>

      {/* Quick form */}
      <form onSubmit={handleSubmit} className="surface p-6 md:p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-primary" /> Cek kelayakan singkat
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Jawab beberapa pertanyaan ini sebelum membuka link pendaftaran.
            </p>
          </div>
          <Link
            to="/selection/status"
            className="text-xs text-primary hover:underline inline-flex items-center gap-1 focus-ring rounded-md"
          >
            Lihat status saya <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <ul className="space-y-3">
          {ELIGIBILITY_QUESTIONS.map((q, i) => {
            const value = answers[q.key];
            return (
              <li
                key={q.key}
                className="flex items-center gap-3 p-3 md:p-4 rounded-lg border border-border bg-muted/20"
              >
                <div className="w-7 h-7 rounded-full bg-muted text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <span className="flex-1 text-sm">{q.label}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => update(q.key, true)}
                    className={cn(
                      "px-3 h-8 rounded-md text-xs font-medium border transition-colors focus-ring",
                      value === true
                        ? "bg-success/15 border-success/50 text-success"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40",
                    )}
                    aria-pressed={value === true}
                  >
                    Ya
                  </button>
                  <button
                    type="button"
                    onClick={() => update(q.key, false)}
                    className={cn(
                      "px-3 h-8 rounded-md text-xs font-medium border transition-colors focus-ring",
                      value === false
                        ? "bg-destructive/15 border-destructive/50 text-destructive"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40",
                    )}
                    aria-pressed={value === false}
                  >
                    Tidak
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/30">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Jawab dengan jujur. Member yang tidak memenuhi syarat akan dikeluarkan otomatis tanpa pemberitahuan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
          <p className="text-xs text-muted-foreground">
            Ringkasan akan ditampilkan sebelum kamu diarahkan ke link daftar.
          </p>
          <Button
            type="submit"
            disabled={!allAnswered}
            className="rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground disabled:opacity-50"
          >
            Lihat Ringkasan
          </Button>
        </div>
      </form>

      {/* Summary dialog */}
      <Dialog open={showSummary} onOpenChange={setShowSummary}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {eligible ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-success" /> Kamu memenuhi syarat
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-destructive" /> Belum memenuhi syarat
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {passed} dari {total} syarat terpenuhi.
            </DialogDescription>
          </DialogHeader>

          <ul className="space-y-2 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
            {ELIGIBILITY_QUESTIONS.map((q) => {
              const ok = answers[q.key] === true;
              return (
                <li
                  key={q.key}
                  className="flex items-start gap-2 text-sm p-2.5 rounded-md bg-muted/30 border border-border"
                >
                  {ok ? (
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  )}
                  <span className={ok ? "text-foreground" : "text-muted-foreground line-through"}>
                    {q.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" onClick={() => setShowSummary(false)} className="rounded-full">
              Kembali edit
            </Button>
            {eligible ? (
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              >
                <a href={selectionGroup.link} target="_blank" rel="noopener noreferrer">
                  Buka Link Daftar <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button asChild variant="secondary" className="rounded-full">
                <Link to="/selection/status">Lihat Status Detail</Link>
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Selection;
