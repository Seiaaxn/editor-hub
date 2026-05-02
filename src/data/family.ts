import admin1 from "@/assets/admin-1.png";
import admin2 from "@/assets/admin-2.png";
import admin3 from "@/assets/admin-3.png";
import admin4 from "@/assets/admin-4.png";
import admin5 from "@/assets/admin-5.png";
import admin6 from "@/assets/admin-6.png";
import defaultHeroBg from "@/assets/hero-bg.jpg";
import avatarDefault from "@/assets/avatar-default.png";

/**
 * 🖼️ AVATAR DEFAULT (fallback)
 * Dipakai untuk member yang belum punya foto di src/assets/.
 */
export const defaultAvatar = avatarDefault;

/**
 * 📦 AUTO-LOAD MEMBER AVATAR DARI src/assets
 * Letakkan file dengan nama: member-1.png ... member-105.png (juga .jpg/.jpeg/.webp)
 * di folder src/assets/. File yang ada akan otomatis terdeteksi & dipetakan
 * ke member dengan nomor yang sama. Yang belum ada → pakai defaultAvatar.
 */
const memberAvatarModules = import.meta.glob(
  "../assets/member-*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
) as Record<string, string>;

export const memberAvatars: Record<number, string> = {};
for (const [path, url] of Object.entries(memberAvatarModules)) {
  const m = path.match(/member-(\d+)\.(png|jpg|jpeg|webp)$/i);
  if (m) memberAvatars[Number(m[1])] = url;
}

/** Cek apakah member nomor N sudah punya foto di src/assets. */
export const hasMemberAvatar = (id: number) => Boolean(memberAvatars[id]);

/** Ambil URL avatar member; fallback ke defaultAvatar bila belum ada. */
export const getMemberAvatar = (id: number) => memberAvatars[id] ?? defaultAvatar;

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
 * 🧑‍🎨 LIST 105 MEMBER NEXARION
 * Edit `name` di sini untuk mengganti nama member.
 * Untuk foto, taruh file `member-<id>.png` di `src/assets/` —
 * akan otomatis ter-load lewat `memberAvatars`.
 */
export const TOTAL_MEMBERS = 105;
export type MemberEntry = { id: number; name: string; gen: number };

export const members: MemberEntry[] = Array.from({ length: TOTAL_MEMBERS }, (_, i) => {
  const id = i + 1;
  // Bagi rata ke 3 generasi
  const gen = id <= 35 ? 1 : id <= 70 ? 2 : 3;
  return { id, name: `Member ${id}`, gen };
});

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
  { name: "Raditz", role: "Owner", tag: "NX RadzySenpai`ft 𝙂𝘾", img: admin1, imgUrl: "" },
  { name: "Farz", role: "Admin 1", tag: "Farzz", img: admin2, imgUrl: "" },
  { name: "Zans", role: "Admin 2", tag: "Zans", img: admin3, imgUrl: "" },
  { name: "Kirk", role: "Admin 3: "YumiWangyy ft AP", img: admin4, imgUrl: "" },
  { name: "Majo", role: "Admin 4", tag: "MAJO~nexarion'", img: admin5, imgUrl: "" },
  { name: "Shin", role: "Admin 5", tag: "𝙎𝙝𝙮𝙯𝙣𝙥𝙧𝙨𝙩`ft 𝙉𝙓", img: admin6, imgUrl: "" },
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
  { rank: 1, name: "Sanz", level: 438, exp: 617528, avatar: admin3, avatarUrl: "" },
  { rank: 2, name: "Fik", level: 787, exp: 599896, avatar: admin2, avatarUrl: "" },
  { rank: 3, name: "Rezz", level: 777, exp: 526348, avatar: admin4, avatarUrl: "" },
  { rank: 4, name: "Eka", level: 699, exp: 469147, avatar: admin1, avatarUrl: "" },
  { rank: 5, name: "Azen", level: 572, exp: 401438, avatar: admin6, avatarUrl: "" },
  { rank: 6, name: "Light", level: 570, exp: 357566, avatar: admin5, avatarUrl: "" },
  { rank: 7, name: "Rizz", level: 537, exp: 297707, avatar: admin3, avatarUrl: "" },
  { rank: 8, name: "Shin", level: 388, exp: 257538, avatar: admin2, avatarUrl: "" },
  { rank: 9, name: "Raditz", level: 371, exp: 213453, avatar: admin4, avatarUrl: "" },
  { rank: 10, name: "Cyrene", level: 352, exp: 197182, avatar: admin1, avatarUrl: "" },
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
    tagline: "Gen khusus follower tinggi. The legends.",
    members: 100+,
    img: admin3,
    imgUrl: "",
    groupLink: "",
  },
  {
    name: "Nexarion Gen 2",
    tagline: "Coming Soon",
    members: 10,
    img: admin2,
    imgUrl: "",
    groupLink: "",
  },
  {
    name: "Nexarion Gen 3",
    tagline: "Coming Soon",
    members: 0,
    img: admin4,
    imgUrl: "",
    groupLink: "",
  },
];

export const selectionGroup = {
  name: "Group Seleksi Nexarion",
  tagline: "Untuk creator yang ingin masuk kedalam komunitas nexa.",
  link: "https://chat.whatsapp.com/J5NHH868UBZAtmSfPUeNSh?mode=gi_t",
  requirements: [
    "Bisa mengedit menggunakan Alight Motion",
    "TIDAK menggunakan preset orang lain",
    "Paham basic editing (keyframe, mask, transition, dll)",
    "Punya minimal 3 karya original untuk dikirim",
    "Aktif & sopan di dalam grup",
    "Mau mengikuti event & collab Nexarion",
    "Tidak sara, tidak toxic, hormati admin/owner",
  ],
};
  
