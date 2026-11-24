import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";
import RingkasanSaldo from "./RingkasanSaldo";

function App() {
  // State utama dibaca dari localStorage
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const data = localStorage.getItem("catatan-keuangan");
    return data ? JSON.parse(data) : [];
  });

  // useEffect: simpan ke localStorage setiap daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem("catatan-keuangan", JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // Menambah transaksi (immutable: spread)
  const tambahTransaksi = (data) => {
    setDaftarTransaksi([...daftarTransaksi, { id: Date.now(), ...data }]);
  };

  // Menghapus transaksi (immutable: filter)
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  return (
    <div className="wadah">
      <h1 className="judul">My Money Tracker - Lite</h1>
      <p className="subjudul"></p>

      <RingkasanSaldo daftarTransaksi={daftarTransaksi} />

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi apapun, kawan</p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((t) => (
              <ItemTransaksi
                key={t.id}
                transaksi={t}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}
export default App;
