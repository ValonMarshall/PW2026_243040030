function KepalaHalaman({ judul, subjudul, jumlahProyek }) {
  return (
    <header className="kepala">
      <div className="kepala__\radar" aria-hidden="true" />
      <p className="kepala__status">
        <span className="kepala__titik" aria-hidden="true" />
        {jumlahProyek} proyek tercatat
      </p>
      <h1>{judul}</h1>
      <p className="kepala__subjudul">{subjudul}</p>
    </header>
  );
}

export default KepalaHalaman;
