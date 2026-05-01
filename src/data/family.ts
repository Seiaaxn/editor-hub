import admin1 from "@/assets/admin-1.png";
import admin2 from "@/assets/admin-2.png";
import admin3 from "@/assets/admin-3.png";
import admin4 from "@/assets/admin-4.png";
import admin5 from "@/assets/admin-5.png";
import admin6 from "@/assets/admin-6.png";
import defaultHeroBg from "@/assets/hero-bg.jpg";

/**
 * 🎨 BACKGROUND HERO HOME
 * Isi `heroBackgroundUrl` dengan link gambar (https://...) untuk mengganti
 * background di halaman Home. Kosongkan ("") untuk pakai gambar default.
 */
export const heroBackgroundUrl = "";
export const heroBackground = heroBackgroundUrl.trim() !== "" ? heroBackgroundUrl : defaultHeroBg;

/** Helper: pilih URL kalau diisi, jika tidak fallback ke aset lokal. */
export const pickImage = (url: string | undefined, fallback: string) =>
  url && url.trim() !== "" ? url : fallback;

/**
 * 👤 ADMIN
 * Isi `imgUrl` dengan link foto (https://...) untuk mengganti foto admin.
 * Kosongkan ("") untuk pakai gambar lokal `img`.
 */
export const admins: {
  name: string;
  role: string;
  tag: string;
  img: string;
  imgUrl?: string;
}[] = [
  { name: "Raditz", role: "Owner", tag: "NX RadzySenpai`ft 𝙂𝘾", img: owner, imgUrl: "" },
  { name: "Raditz", role: "Founder", tag: "NX RadzySenpai`ft 𝙂𝘾", img: founder, imgUrl: "" },
  { name: "Farzz", role: "Admin 1", tag: "Farzz", img: admin1, imgUrl: "" },
  { name: "Majo", role: "Admin 2", tag: "MAJO~nexarion'", img: admin2, imgUrl: "" },
  { name: "Shin", role: "Admin 3", tag: "𝙎𝙝𝙮𝙯𝙣𝙥𝙧𝙨𝙩`ft 𝙉𝙓", img: admin3, imgUrl: "" },
  { name: "Cyrene", role: "Bot & Security", tag: "Bot WhatsApp", img: bot, imgUrl: "" },
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
  { rank: 1, name: "𝗦𝗮𝗻𝘇𝘇𝙏𝙤𝙧𝙞𝙖𝙯𝙯[𝙉𝙓]", level: 438, exp: 617528, avatar: member, avatarUrl: "" },
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

/**
 * 👥 GENERATIONS / GROUP
 * Isi `imgUrl` dengan link foto group (https://...). Kosongkan untuk default.
 */
export const generations: {
  name: string;
  tagline: string;
  members: number;
  img: string;
  imgUrl?: string;
  groupLink: string;
}[] = [
  {
    name: "Nexarion Gen 1",
    tagline: "Gen Khusus Anomali. Banyak Anomali Jirs 😹🫪",
    members: 104,
    img: admin3,
    imgUrl: "",
    groupLink: "https://chat.whatsapp.com/EKBwiGr7gMpCCkFkLfsjzu?mlu=2&s=cl&p=a",
  },
  {
    name: "Nexarion Gen 2",
    tagline: "Coming Soon",
    members: 10,
    img: admin2,
    imgUrl: "",
    groupLink: "-",
  },
  {
    name: "Nexarion Gen 3",
    tagline: "Coming Soon",
    members: 0,
    img: admin4,
    imgUrl: "",
    groupLink: "-",
  },
];

export const selectionGroup = {
  name: "Group Seleksi Nexarion",
  tagline: "Untuk Seleksi Nexarion, Jika Ingin Bergabung",
  link: "https://chat.whatsapp.com/J5NHH868UBZAtmSfPUeNSh?mode=gi_t",
  requirements: [
    "Bisa Mengedit Menggunakan Alight Motion/Capcut",
    "Tidak Menggunakan Preset Orang lain",
    "Paham Basic Editing (Keyframe, Mask, Transition, dll)",
    "Punya Minimal 3 Karya Original Untuk Dikirim",
    "Aktif & Sopan Di Dalam Group",
    "Mau Mengikuti Event & Collab Nexarion",
    "Tidak Sara, Tidak Toxic, hormati Admin/Owner",
  ],
};
