import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { selectionGroup } from "@/data/family";
import { ELIGIBILITY_QUESTIONS, useEligibility } from "@/hooks/use-eligibility";
import {
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  CircleDashed,
  ExternalLink,
  Pencil,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SelectionStatus = () => {
  const { answers, reset, allAnswered, eligible, passed, total, progress, answered } = useEligibility();

  const statusLabel = !allAnswered
    ? "Belum lengkap"
    : eligible
      ? "Siap daftar"
      : "Belum memenuhi syarat";

  const statusTone = !allAnswered
    ? "bg-muted text-muted-foreground border-border"
    : eligible
      ? "bg-success/15 text-success border-success/40"
      : "bg-destructive/15 text-destructive border-destructive/40";

  return (
    <div className="container density-section max-w-3xl space-y-8">
      <header className="space-y-3">
        <div className="chip">
          <ClipboardCheck className="h-3.5 w-3.5 text-primary" /> Status seleksi kamu
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Status <span className="text-gradient">Seleksi</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Ringkasan jawaban kamu di formulir kelayakan. Data disimpan di perangkatmu.
        </p>
      </header>

      {/* Status banner */}
      <section className="surface p-6 md:p-8 space-y-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border", statusTone)}>
              {eligible ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : !allAnswered ? (
                <CircleDashed className="h-3.5 w-3.5" />
              ) : (
                <XCircle className="h-3.5 w-3.5" />
              )}
              {statusLabel}
            </div>
            <h2 className="text-2xl font-bold mt-3">
              {passed} <span className="text-muted-foreground text-lg">/ {total}</span> syarat terpenuhi
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {answered} dari {total} pertanyaan sudah dijawab.
            </p>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link to="/selection"><Pencil className="h-3.5 w-3.5 mr-1.5" /> Edit jawaban</Link>
            </Button>
            <Button onClick={reset} variant="ghost" size="sm" className="rounded-full text-muted-foreground">
              <RotateCcw className="h-3.5 w-3.5 mr-1.5" /> Reset
            </Button>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress jawaban</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="surface p-6 md:p-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Checklist syarat
        </h3>
        <ul className="space-y-2">
          {ELIGIBILITY_QUESTIONS.map((q) => {
            const value = answers[q.key];
            const state = value === true ? "ok" : value === false ? "no" : "pending";
            return (
              <li
                key={q.key}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border transition-colors",
                  state === "ok" && "border-success/40 bg-success/5",
                  state === "no" && "border-destructive/40 bg-destructive/5",
                  state === "pending" && "border-border bg-muted/20",
                )}
              >
                {state === "ok" && <CheckCircle2 className="h-5 w-5 text-success shrink-0" />}
                {state === "no" && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
                {state === "pending" && <CircleDashed className="h-5 w-5 text-muted-foreground shrink-0" />}
                <span
                  className={cn(
                    "flex-1 text-sm",
                    state === "no" && "text-muted-foreground",
                    state === "pending" && "text-muted-foreground italic",
                  )}
                >
                  {q.label}
                </span>
                <span className="text-xs text-muted-foreground capitalize shrink-0">
                  {state === "ok" ? "Terpenuhi" : state === "no" ? "Tidak" : "Belum dijawab"}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* CTA */}
      <section className="surface p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div>
          <h3 className="font-semibold">
            {eligible
              ? "Kamu siap mendaftar 🎉"
              : !allAnswered
                ? "Selesaikan formulir dulu"
                : "Perbaiki syarat yang belum terpenuhi"}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {eligible
              ? "Klik tombol di samping untuk membuka link pendaftaran resmi."
              : "Kamu masih bisa memperbaiki jawaban di halaman formulir."}
          </p>
        </div>
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
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/selection">Ke Formulir</Link>
          </Button>
        )}
      </section>
    </div>
  );
};

export default SelectionStatus;
