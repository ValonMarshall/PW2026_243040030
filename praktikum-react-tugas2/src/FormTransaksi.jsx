//        Formulir transaksi
import { useState } from "react";
function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState("pemasukan");

  // Nilai input selalu teks -> ubah ke angka dengan Number() sebelum divalidasi
  const angka = Number(nominal);
  const nominalSalah = nominal !== "" && !(angka > 0);
  const tidakValid = keterangan.trim() === "" || nominal === "" || nominalSalah;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (tidakValid) return;
    onTambah({ keterangan: keterangan.trim(), nominal: angka, jenis });
    setKeterangan("");
    setNominal("");
    setJenis("pemasukan");
  };

  return (
    <form className="form" onSubmit={tanganiKirim}>
      <input
        className="input"
        type="text"
        placeholder="Masukkan keterangan, contoh Gaji, Makanan, dll"
        value={keterangan}
        onChange={(e) => setKeterangan(e.target.value)}
      />

      <div className="baris">
        <input
          className="input"
          type="number"
          placeholder="Nominal (Rp)"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />

        <select
          className="input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>

        <button className="tombol" type="submit" disabled={tidakValid}>
          Simpan
        </button>
      </div>
      {nominalSalah && (
        <p className="galat">Nominal harus berupa angka lebih dari 0.</p>
      )}
    </form>
  );
}
export default FormTransaksi;
