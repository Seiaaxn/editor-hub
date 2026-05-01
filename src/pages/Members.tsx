import { Link } from "react-router-dom";
import { generations } from "@/data/family";
import { Users, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Members = () => {
  const total = generations.reduce((s, g) => s + g.members, 0);
  return (
    <div className="container py-16 space-y-16">
      <header className="text-center space-y-3">
        <h1 className="text-5xl md:text-6xl font-bold">
          Member <span className="text-gradient">Nexarion</span>
        </h1>
        <p className="text-muted-foreground">
          Total <span className="text-foreground font-semibold">{total.toLocaleString()}</span> editor tergabung di seluruh generasi.
        </p>
      </header>

      {/* Generation cards with join link */}
      <div className="grid md:grid-cols-3 gap-6">
        {generations.map((g) => (
          <div
            key={g.name}
            className="card-glow rounded-3xl p-6 border border-border/40 hover:border-primary/50 transition-smooth flex flex-col"
          >
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <img src={g.img} alt={g.name} loading="lazy" className="w-3/4 h-3/4 object-contain anim-float" />
            </div>
            <h3 className="text-xl font-bold">{g.name}</h3>
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
      <div className="card-glow rounded-3xl overflow-hidden border border-border/50 max-w-3xl mx-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/30">
              <th className="text-left p-5 font-semibold">Generasi</th>
              <th className="text-right p-5 font-semibold">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {generations.map((g) => (
              <tr key={g.name} className="border-t border-border/30 hover:bg-primary/5 transition-smooth">
                <td className="p-5 flex items-center gap-3">
                  <img src={g.img} alt={g.name} loading="lazy" className="w-10 h-10 rounded-full bg-muted/40" />
                  {g.name}
                </td>
                <td className="p-5 text-right">
                  <span className="inline-flex items-center gap-2 text-primary">
                    <Users className="h-4 w-4" />
                    {g.members} member
                  </span>
                </td>
              </tr>
            ))}
            <tr className="border-t border-border/30 bg-primary/5">
              <td className="p-5 font-bold">Total</td>
              <td className="p-5 text-right font-bold text-gradient">{total} member</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA to selection page */}
      <section className="relative rounded-3xl overflow-hidden border border-primary/40 card-glow p-8 md:p-10 max-w-4xl mx-auto text-center">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="relative space-y-4">
          <ShieldCheck className="h-10 w-10 text-primary mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold">
            Mau gabung <span className="text-gradient">Group Seleksi</span>?
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Khusus editor serius. Lihat syarat lengkap dan daftarkan dirimu di halaman Group Seleksi.
          </p>
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <Link to="/selection">Lihat Syarat Seleksi</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Members;
