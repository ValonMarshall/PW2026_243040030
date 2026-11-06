const kelasPerStatus = {
  Selesai: "lencana--selesai",
  Berjalan: "lencana--berjalan",
  Rencana: "lencana--rencana",
};

// Menampilkan status proyek dengan warna sesuai tahap pengerjaan.
function LencanaStatus({ status }) {
  const kelasWarna = kelasPerStatus[status] ?? "lencana--rencana";

  return (
    <span className={`lencana ${kelasWarna}`}>
      <span className="lencana__titik" aria-hidden="true" />
      {status}
    </span>
  );
}

export default LencanaStatus;
