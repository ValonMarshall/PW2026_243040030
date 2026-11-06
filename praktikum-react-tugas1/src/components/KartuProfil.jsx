import TagTeknologi from "./TagTeknologi";

// Mengambil huruf pertama
function ambilInisial(nama) {
  return nama
    .split(" ")
    .map((kata) => kata[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// parameter fungsi.
function KartuProfil({
  nama,
  npm,
  kelas,
  peran,
  kampus,
  status,
  fotoUrl,
  keahlian = [],
}) {
  const kelasStatus =
    status === "Aktif"
      ? "kartu-profil__status--aktif"
      : "kartu-profil__status--cuti";

  return (
    <article className="kartu-profil">
      {fotoUrl ? (
        <img
          className="kartu-profil__foto"
          src={fotoUrl}
          alt={`Foto ${nama}`}
        />
      ) : (
        <div
          className="kartu-profil__foto kartu-profil__inisial"
          aria-hidden="true"
        >
          {ambilInisial(nama)}
        </div>
      )}

      <div className="kartu-profil__isi">
        <h3>{nama}</h3>
        <p className="kartu-profil__peran">{peran}</p>

        <dl className="kartu-profil__data">
          <div>
            <dt>NPM</dt>
            <dd>{npm}</dd>
          </div>
          <div>
            <dt>Kelas</dt>
            <dd>{kelas}</dd>
          </div>
          <div>
            <dt>Kampus</dt>
            <dd>{kampus}</dd>
          </div>
        </dl>

        <ul className="daftar-tag">
          {keahlian.map((item) => (
            <TagTeknologi key={item} label={item} />
          ))}
        </ul>
      </div>

      <span className={`kartu-profil__status ${kelasStatus}`}>
        Status akademik: {status}
      </span>
    </article>
  );
}

export default KartuProfil;
