import { admins } from "@/data/family";

const Admins = () => {
  return (
    <div className="container py-16 space-y-12">
      <header className="text-center space-y-3">
        <h1 className="text-5xl font-bold">Admin of <span className="text-gradient">Nexarion</span></h1>
        <p className="text-muted-foreground">Tim di balik komunitas.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {admins.map((a) => (
          <div key={a.name} className="card-glow rounded-3xl p-6 border border-border/40 hover:border-primary/50 transition-smooth text-center group">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1 mb-4">
              <img src={a.img} alt={a.name} loading="lazy" className="w-full h-full rounded-full object-cover bg-muted/40 group-hover:scale-105 transition-smooth" />
            </div>
            <h3 className="text-xl font-bold">{a.name}</h3>
            <div className="text-sm text-primary mt-1">{a.role}</div>
            <div className="text-xs text-muted-foreground mt-3">{a.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admins;
