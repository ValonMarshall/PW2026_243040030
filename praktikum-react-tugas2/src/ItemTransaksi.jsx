//            Untuk satu baris transaksi
import { rupiah } from './format';
function ItemTransaksi({ transaksi, onHapus }) {
  const pemasukan = transaksi.jenis === 'pemasukan';
  return (
    <li className="item">
      <div className="ket">
        {transaksi.keterangan}
        <span className="jenis">{pemasukan ? 'Pemasukan' : 'Pengeluaran'}</span>
      </div>
      {/* className dengan status hijau untuk pemasukan, merah untuk pengeluaran */}
      <span className={pemasukan ? 'pemasukan' : 'pengeluaran'}>
        {pemasukan ? '+' : '-'} {rupiah(transaksi.nominal)}
      </span>
      <button className="tombol tombol-merah tombol-kecil" onClick={() => onHapus(transaksi.id)}>
        Hapus
      </button>
    </li>
  );
}
export default ItemTransaksi;
