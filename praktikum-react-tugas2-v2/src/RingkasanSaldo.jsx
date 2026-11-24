//          saldo yang dihitung dari nilai turunan, bukan state)
import Kartu from "./Kartu";
import { rupiah } from "./format";
function RingkasanSaldo({ daftarTransaksi }) {
  const totalMasuk = daftarTransaksi
    .filter((t) => t.jenis === "pemasukan")
    .reduce((jumlah, t) => jumlah + t.nominal, 0);
  const totalKeluar = daftarTransaksi
    .filter((t) => t.jenis === "pengeluaran")
    .reduce((jumlah, t) => jumlah + t.nominal, 0);
  const saldo = totalMasuk - totalKeluar;

  return (
    <Kartu judul="Total Saldo">
      <p className="saldo-label">Saldo saat ini</p>
      <p className={saldo < 0 ? "saldo pengeluaran" : "saldo pemasukan"}>
        {rupiah(saldo)}
      </p>
      <div className="rekap">
        <span>
          Pemasukan: <b className="pemasukan">{rupiah(totalMasuk)}</b>
        </span>
        <span>
          Pengeluaran: <b className="pengeluaran">{rupiah(totalKeluar)}</b>
        </span>
      </div>
    </Kartu>
  );
}
export default RingkasanSaldo;
