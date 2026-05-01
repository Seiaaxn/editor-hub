import { Link } from "react-router-dom";
import { generations } from "@/data/family";
import { Users, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Members = () => {
  const total = generations.reduce((s, g) => s + g.members, 0);
  return (
    <div className="container density-section space-y-12 max-w-5xl">
      <header className="space-y-3">
        <div className="chip"><Users className="h-3.5 w-3.5 text-primary" /> Direktori member</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Member <span className="text-gradient">Nexarion</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Total <span className="text-foreground font-semibold">{total.toLocaleString()}</span> editor tergabung
          di seluruh generasi.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        {generations.map((g) => (
          <div key={g.name} className="surface surface-hover density-pad flex flex-col">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted/40 flex items-center justify-center">
              <img src={g.img} alt={g.name} loading="lazy" className="w-3/4 h-3/4 object-contain" />
            </div>
            <h3 className="text-lg font-bold">{g.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3 flex-1">{g.tagline}</p>
            <div className="flex items-center gap-2 text-sm text-primary mb-4">
              <Users className="h-4 w-4" />
              {g.members} member
            </div>
            {g.groupLink ? (
              <Button
                asChild
                className="w-full rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              >
                <a href={g.groupLink} target="_blank" rel="noopener noreferrer">
                  Join Grup <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button disabled variant="outline" className="w-full rounded-full">
                Coming Soon
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Recap table */}
      <div className="surface overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/40 text-muted-foreground uppercase text-xs tracking-wider">
              <th className="text-left density-pad font-semibold">Generasi</th>
              <th className="text-right density-pad font-semibold">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {generations.map((g) => (
              <tr key={g.name} className="border-t border-border hover:bg-primary/5 transition-colors">
                <td className="density-pad flex items-center gap-3">
                  <img src={g.img} alt={g.name} loading="lazy" className="w-8 h-8 rounded-full bg-muted/40 object-cover" />
                  {g.name}
                </td>
                <td className="density-pad text-right">
                  <span className="inline-flex items-center gap-2 text-primary">
                    <Users className="h-4 w-4" />
                    {g.members}
                  </span>
                </td>
              </tr>
            ))}
            <tr className="border-t border-border bg-primary/5">
              <td className="density-pad font-bold">Total</td>
              <td className="density-pad text-right font-bold text-gradient">{total} member</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA selection */}
      <section className="surface density-pad flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold">Mau gabung Group Seleksi?</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Khusus editor serius. Cek syarat & isi formulir kelayakan.
            </p>
          </div>
        </div>
        <Button asChild className="rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <Link to="/selection">Lihat Syarat</Link>
        </Button>
      </section>
    </div>
  );
};

export default Members;
