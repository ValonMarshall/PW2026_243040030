import KartuProyek from "./KartuProyek";

function DaftarProyek({ daftarProyek }) {
  return (
    <>
      <p className="jumlah-proyek" aria-live="polite">
        Menampilkan {daftarProyek.length} proyek
      </p>
      <div className="daftar-proyek">
        {daftarProyek.map((proyek) => (
          <KartuProyek key={proyek.id} {...proyek} />
        ))}
      </div>
    </>
  );
}

export default DaftarProyek;
