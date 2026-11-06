function FilterKategori({ daftarKategori, kategoriAktif, onPilihKategori }) {
  return (
    <div className="filter" role="group" aria-label="Filter kategori proyek">
      {daftarKategori.map((kategori) => (
        <button
          key={kategori}
          type="button"
          className={`filter__tombol ${kategori === kategoriAktif ? "filter__tombol--aktif" : ""}`}
          aria-pressed={kategori === kategoriAktif}
          onClick={() => onPilihKategori(kategori)}
        >
          {kategori}
        </button>
      ))}
    </div>
  );
}

export default FilterKategori;
