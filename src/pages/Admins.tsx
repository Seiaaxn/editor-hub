import { admins } from "@/data/family";
import { Shield } from "lucide-react";

const Admins = () => {
  return (
    <div className="container density-section space-y-10 max-w-5xl">
      <header className="space-y-3">
        <div className="chip"><Shield className="h-3.5 w-3.5 text-primary" /> Tim admin</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Admin <span className="text-gradient">Nexarion</span>
        </h1>
        <p className="text-sm text-muted-foreground">Tim di balik komunitas.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {admins.map((a) => (
          <div key={a.name} className="surface surface-hover density-pad text-center group">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1 mb-4">
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                className="w-full h-full rounded-full object-cover bg-muted/40"
              />
            </div>
            <h3 className="text-lg font-bold">{a.name}</h3>
            <div className="text-sm text-primary mt-0.5">{a.role}</div>
            <div className="text-xs text-muted-foreground mt-3 font-mono">{a.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admins;
