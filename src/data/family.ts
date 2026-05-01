import admin1 from "@/assets/admin-1.png";
import admin2 from "@/assets/admin-2.png";
import admin3 from "@/assets/admin-3.png";
import admin4 from "@/assets/admin-4.png";
import admin5 from "@/assets/admin-5.png";
import admin6 from "@/assets/admin-6.png";

export const admins = [
  { name: "Si White", role: "Collab Member", tag: "—White〆NXR", img: admin1 },
  { name: "Sakura", role: "Editor & Design", tag: "Sakura・NXR", img: admin2 },
  { name: "Kuro", role: "Owner Nexarion", tag: "KuroNexarion`NCA", img: admin3 },
  { name: "Yumi", role: "Bot & Security", tag: "YumiWangyy ft AP", img: admin4 },
  { name: "Akira", role: "Meme Video", tag: "—Akira NXR ft CNL", img: admin5 },
  { name: "Mira", role: "Selection Member", tag: "NXR | Mira`", img: admin6 },
];

// 💡 Ganti `avatarUrl` dengan link foto profil (misal CDN, imgur, dll).
// Jika kosong, akan fallback ke `avatar` lokal.
export const topMembers: {
  rank: number;
  name: string;
  level: number;
  exp: number;
  avatar: string;
  avatarUrl?: string;
}[] = [
  { rank: 1, name: "insra", level: 438, exp: 617528, avatar: admin3, avatarUrl: "" },
  { rank: 2, name: "riye", level: 787, exp: 599896, avatar: admin2, avatarUrl: "" },
  { rank: 3, name: "Sumika AI ✨", level: 777, exp: 526348, avatar: admin4, avatarUrl: "" },
  { rank: 4, name: "Kuro", level: 699, exp: 469147, avatar: admin1, avatarUrl: "" },
  { rank: 5, name: "時崎|𝙆𝙐𝙍𝙐𝙈𝙄•𝘼𝙄", level: 572, exp: 401438, avatar: admin6, avatarUrl: "" },
  { rank: 6, name: "vin", level: 570, exp: 357566, avatar: admin5, avatarUrl: "" },
  { rank: 7, name: "𝗭𝗔𝗣𝗣𝗬", level: 537, exp: 297707, avatar: admin3, avatarUrl: "" },
  { rank: 8, name: "Zumii store", level: 388, exp: 257538, avatar: admin2, avatarUrl: "" },
  { rank: 9, name: "yeyaa", level: 371, exp: 213453, avatar: admin4, avatarUrl: "" },
  { rank: 10, name: "de L ta", level: 352, exp: 197182, avatar: admin1, avatarUrl: "" },
];

export const generations = [
  {
    name: "Nexarion Gen 1",
    tagline: "Gen khusus follower tinggi. The legends.",
    members: 475,
    img: admin3,
    groupLink: "https://chat.whatsapp.com/EKBwiGr7gMpCCkFkLfsjzu?mlu=2&s=cl&p=a",
  },
  {
    name: "Nexarion Gen 2",
    tagline: "Gen khusus pemula. Penuh anomali 😹",
    members: 536,
    img: admin2,
    groupLink: "https://chat.whatsapp.com/JqBKCwH0LAtJdzFvYf9kEe?mlu=2&s=cl&p=a",
  },
  {
    name: "Nexarion Gen 3",
    tagline: "Generasi baru kreator editor.",
    members: 312,
    img: admin4,
    groupLink: "",
  },
];

export const selectionGroup = {
  name: "Group Seleksi Nexarion",
  tagline: "Untuk editor serius yang ingin masuk barisan utama.",
  link: "https://chat.whatsapp.com/J5NHH868UBZAtmSfPUeNSh?mode=gi_t",
  requirements: [
    "Bisa mengedit menggunakan Alight Motion",
    "TIDAK menggunakan preset orang lain",
    "Paham basic editing (keyframe, mask, transition, dll)",
    "Punya minimal 3 karya original untuk dikirim",
    "Aktif & sopan di dalam grup",
    "Mau mengikuti event & collab Nexarion",
    "Tidak SARA, tidak toxic, hormati senior",
  ],
};
