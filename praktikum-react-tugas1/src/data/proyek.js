export const daftarProyek = [
  {
    id: 1,
    kode: "Projek #1",
    judul: "First Portofolio",
    kategori: "Web",
    status: "Selesai",
    tahun: 2024,
    deskripsi: "Portofolio pertama dengan tujuan memperkenalkan diri .",
    teknologi: ["Website"],
    tautan: "",
  },
  {
    id: 2,
    kode: "Projek #2",
    judul: "Ei's Simple Art Store Page",
    kategori: "Web",
    status: "Selesai",
    tahun: 2024,
    deskripsi: "Website untuk toko seorang pengusaha rajutan.",
    teknologi: ["Website"],
    tautan: "",
  },
  {
    id: 3,
    kode: "Projek #3",
    judul: "Website Endfield",
    kategori: "Web",
    status: "Selesai",
    tahun: 2024,
    deskripsi:
      "Website ini menjelaskan tentang berita endfield pada tahun 2024",
    teknologi: ["Website"],
    tautan: "",
  },
  {
    id: 4,
    kode: "Projek #4",
    judul: "Website Arknights",
    kategori: "Web",
    status: "Selesai",
    tahun: 2024,
    deskripsi:
      "Website ini menjelaskan tentang berita endfield pada tahun 2024",
    teknologi: ["Website"],
    tautan: "",
  },
  {
    id: 5,
    kode: "Projek #5",
    judul: "Operator Gallery",
    kategori: "Web",
    status: "Selesai",
    tahun: 2024,
    deskripsi: "Kumpulan operator arknights",
    teknologi: ["Website"],
    tautan: "",
  },
];

export const daftarKategori = [
  "Semua",
  ...new Set(daftarProyek.map((proyek) => proyek.kategori)),
];
