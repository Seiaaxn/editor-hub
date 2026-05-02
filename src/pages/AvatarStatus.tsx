import { members, hasMemberAvatar, getMemberAvatar, TOTAL_MEMBERS, topMembers } from "@/data/family";
import { ImageCheck, ImageOff, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const AvatarStatus = () => {
  const ready = members.filter((m) => hasMemberAvatar(m.id));
  const missing = members.filter((m) => !hasMemberAvatar(m.id));
  const pct = Math.round((ready.length / TOTAL_MEMBERS) * 100);

  const topReady = topMembers.filter((t) => t.avatarUrl && t.avatarUrl.trim() !== "");

  return (
    <div className="container density-section max-w-6xl space-y-10">
      <header className="space-y-3">
        <div className="chip">
          <ImageCheck className="h-3.5 w-3.5 text-primary" /> Audit avatar
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Status <span className="text-gradient">Avatar</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Lihat member mana yang sudah punya foto di{" "}
          <code className="px-1.5 py-0.5 rounded bg-muted/40 text-xs">src/assets</code> dan
          mana yang masih pakai avatar default.
        </p>
      </header>

      {/* Summary */}
      <section className="grid sm:grid-cols-3 gap-4">
        <div className="surface density-pad">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Tersedia</div>
          <div className="text-3xl font-bold text-success mt-1">{ready.length}</div>
          <div className="text-xs text-muted-foreground">dari {TOTAL_MEMBERS} member</div>
        </div>
        <div className="surface density-pad">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Belum ada</div>
          <div className="text-3xl font-bold text-warning mt-1">{missing.length}</div>
          <div className="text-xs text-muted-foreground">pakai avatar default</div>
        </div>
        <div className="surface density-pad">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Progres</div>
          <div className="text-3xl font-bold text-gradient mt-1">{pct}%</div>
          <div className="h-1.5 mt-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </section>

      {/* How to */}
      <section className="surface density-pad">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Cara menambah foto
        </h2>
        <ol className="text-sm space-y-1.5 text-muted-foreground list-decimal pl-5">
          <li>
            Simpan file foto di folder{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted/40 text-xs">src/assets/</code>.
          </li>
          <li>
            Beri nama persis{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted/40 text-xs">member-&lt;id&gt;.png</code>{" "}
            (atau .jpg / .webp). Contoh:{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted/40 text-xs">member-12.png</code>.
          </li>
          <li>Refresh halaman — file baru otomatis terdeteksi & dipakai.</li>
        </ol>
      </section>

      {/* Missing list */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <ImageOff className="h-4 w-4 text-warning" />
          <h2 className="text-lg font-bold">Belum ada foto ({missing.length})</h2>
        </div>
        {missing.length === 0 ? (
          <div className="surface density-pad text-sm text-success">
            🎉 Semua member sudah punya foto!
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-2">
            {missing.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "rounded-lg border border-border bg-muted/20 density-pad text-center",
                )}
              >
                <img
                  src={getMemberAvatar(m.id)}
                  alt={m.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mx-auto bg-muted/40 opacity-60"
                />
                <div className="text-[11px] mt-1.5 font-mono text-muted-foreground">
                  member-{m.id}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Ready list */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-success" />
          <h2 className="text-lg font-bold">Sudah ada foto ({ready.length})</h2>
        </div>
        {ready.length === 0 ? (
          <div className="surface density-pad text-sm text-muted-foreground">
            Belum ada member yang punya foto. Tambahkan{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted/40 text-xs">member-1.png</code> di{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted/40 text-xs">src/assets/</code>{" "}
            untuk mulai.
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-2">
            {ready.map((m) => (
              <div
                key={m.id}
                className="rounded-lg border border-success/30 bg-success/5 density-pad text-center"
              >
                <img
                  src={getMemberAvatar(m.id)}
                  alt={m.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mx-auto"
                />
                <div className="text-[11px] mt-1.5 font-mono text-success">
                  member-{m.id}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Top member status */}
      <section className="surface density-pad">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Top Member · {topReady.length}/{topMembers.length} pakai foto eksternal (avatarUrl)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {topMembers.map((t) => {
            const has = !!(t.avatarUrl && t.avatarUrl.trim() !== "");
            return (
              <div
                key={t.rank}
                className={cn(
                  "rounded-lg p-2 border text-center",
                  has ? "border-success/30 bg-success/5" : "border-border bg-muted/20",
                )}
              >
                <img
                  src={has ? t.avatarUrl! : t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mx-auto"
                />
                <div className="text-[11px] mt-1 truncate">{t.name}</div>
                <div className={cn("text-[10px]", has ? "text-success" : "text-muted-foreground")}>
                  {has ? "URL ✓" : "default"}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AvatarStatus;
