import LencanaStatus from "./LencanaStatus";
import TagTeknologi from "./TagTeknologi";

function KartuProyek({
  kode,
  judul,
  kategori,
  status,
  tahun,
  deskripsi,
  teknologi,
  tautan,
}) {
  return (
    <article className="kartu-proyek">
      <div className="kartu-proyek__visual" aria-hidden="true">
        <span className="kartu-proyek__kode">{kode}</span>
        <span className="kartu-proyek__kategori">{kategori}</span>
      </div>

      <div className="kartu-proyek__isi">
        <div className="kartu-proyek__baris">
          <LencanaStatus status={status} />
          <span className="kartu-proyek__tahun">{tahun}</span>
        </div>

        <h3>{judul}</h3>
        <p>{deskripsi}</p>

        <ul className="daftar-tag">
          {teknologi.map((item) => (
            <TagTeknologi key={item} label={item} />
          ))}
        </ul>

        {tautan && (
          <a
            className="kartu-proyek__tautan"
            href={tautan}
            target="_blank"
            rel="noreferrer"
          >
            Buka repositori {judul}
          </a>
        )}
      </div>
    </article>
  );
}

export default KartuProyek;
