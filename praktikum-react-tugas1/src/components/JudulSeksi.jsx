function JudulSeksi({ idJudul, judul, subjudul }) {
  return (
    <header className="judul-seksi">
      <h2 id={idJudul}>{judul}</h2>
      {subjudul && <p>{subjudul}</p>}
    </header>
  );
}

export default JudulSeksi;
