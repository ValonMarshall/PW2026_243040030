import { useState } from "react";
import "./App.css";
import KepalaHalaman from "./components/KepalaHalaman";
import JudulSeksi from "./components/JudulSeksi";
import KartuProfil from "./components/KartuProfil";
import FilterKategori from "./components/FilterKategori";
import DaftarProyek from "./components/DaftarProyek";
import KakiHalaman from "./components/KakiHalaman";
import { dataProfil } from "./data/profil";
import { daftarProyek, daftarKategori } from "./data/proyek";

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const proyekTampil =
    kategoriAktif === "Semua"
      ? daftarProyek
      : daftarProyek.filter((proyek) => proyek.kategori === kategoriAktif);

  return (
    <div className="halaman">
      <KepalaHalaman
        judul="One And Only, My Portofolio"
        subjudul="Just a simple portofolio of Dion Avalon"
        jumlahProyek={daftarProyek.length}
      />

      <main>
        <section className="seksi" aria-labelledby="judul-profil">
          <JudulSeksi
            idJudul="judul-profil"
            judul="Profil Mahasiswa"
            subjudul="My Identity"
          />
          <KartuProfil {...dataProfil} />
        </section>

        <section className="seksi" aria-labelledby="judul-proyek">
          <JudulSeksi
            idJudul="judul-proyek"
            judul="Proyek pilihan"
            subjudul="Pilih kategori untuk menyaring daftar proyek."
          />
          <FilterKategori
            daftarKategori={daftarKategori}
            kategoriAktif={kategoriAktif}
            onPilihKategori={setKategoriAktif}
          />
          <DaftarProyek daftarProyek={proyekTampil} />
        </section>
      </main>

      <KakiHalaman keterangan="Face The E.G.O, Build The Future" />
    </div>
  );
}

export default App;
