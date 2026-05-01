import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, Users, Video, CheckCircle2, AlertCircle } from "lucide-react";

interface TikUser {
  user: {
    uniqueId: string;
    nickname: string;
    avatarLarger: string;
    signature: string;
    verified: boolean;
  };
  stats: {
    followerCount: number;
    followingCount: number;
    heartCount: number;
    videoCount: number;
  };
}

const formatNum = (n: number) => {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toString();
};

const TikTokSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<TikUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (e: FormEvent) => {
    e.preventDefault();
    const username = query.trim().replace(/^@/, "");
    if (!username) return;
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(`https://www.tikwm.com/api/user/info?unique_id=${encodeURIComponent(username)}`);
      const json = await res.json();
      if (json.code !== 0 || !json.data?.user) {
        throw new Error(json.msg || "User tidak ditemukan");
      }
      setData(json.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal memuat data. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-16 space-y-10 max-w-4xl">
      <header className="text-center space-y-3">
        <h1 className="text-5xl font-bold">Cek <span className="text-gradient">TikTok</span></h1>
        <p className="text-muted-foreground">Cari username TikTok untuk melihat followers, likes, & statistik lainnya.</p>
      </header>

      <form onSubmit={search} className="flex gap-3 max-w-xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="@username"
            className="pl-11 h-12 rounded-full bg-card border-border/60"
            maxLength={50}
          />
        </div>
        <Button type="submit" disabled={loading} className="h-12 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          {loading ? "..." : "Cari"}
        </Button>
      </form>

      {error && (
        <div className="card-glow rounded-2xl p-5 border border-destructive/40 flex items-center gap-3 max-w-xl mx-auto">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {data && (
        <div className="card-glow rounded-3xl p-8 border border-primary/30 space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={data.user.avatarLarger}
              alt={data.user.nickname}
              loading="lazy"
              className="w-28 h-28 rounded-full object-cover border-2 border-primary/40 glow"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h2 className="text-2xl font-bold">{data.user.nickname}</h2>
                {data.user.verified && <CheckCircle2 className="h-5 w-5 text-secondary" />}
              </div>
              <div className="text-primary">@{data.user.uniqueId}</div>
              {data.user.signature && (
                <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">{data.user.signature}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Followers", value: data.stats.followerCount, icon: Users },
              { label: "Following", value: data.stats.followingCount, icon: Users },
              { label: "Likes", value: data.stats.heartCount, icon: Heart },
              { label: "Videos", value: data.stats.videoCount, icon: Video },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-4 bg-muted/30 border border-border/40 text-center">
                <s.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-gradient">{formatNum(s.value)}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!data && !error && !loading && (
        <p className="text-center text-sm text-muted-foreground">Contoh: <code className="px-2 py-1 rounded bg-muted/40">tiktok</code></p>
      )}
    </div>
  );
};

export default TikTokSearch;
