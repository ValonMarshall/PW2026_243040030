import { useState } from "react";
import "./App.css";
import Kotak from "./Kotak";

function App() {
  const [text, setText] = useState("");
  const [tugas, setTugas] = useState([]); //state untuk menyimpan data tugas yang diinputkan

  const tambah = (event) => {
    event.preventDefault(); //agar halaman tida refresh saat tombol submit ditekan
    if (text.trim() === "") return; //jika input kosong, tidak menambahkan data
    setTugas([...tugas, text]); //menambahkan data baru ke array tugas dengan text yang diinputkan
    setText(""); //mengosongkan input setelah data ditambahkan
  };

  const hapus = (indexDataYangDihapus) => {
    //fungsi untuk menghapus data dari array tugas berdasarkan index
    const dataBaru = tugas.filter((_, index) => index !== indexDataYangDihapus); //menggunakan filter untuk membuat array baru tanpa data yang dihapus
    setTugas(dataBaru);
  };

  return (
    <>
      <div className="App">
        <h1>Selamat datang di Aplikasi React!</h1>

        <Kotak judul="Kotak 1">
          <p>Ini adalah isi dari kotak pertama.</p>
          <p>Ini adalah contoh aplikasi React sederhana.</p>

          <form onSubmit={tambah}>
            {/*menambahkan event onSubmit pada form untuk memanggil fungsi tambah saat tombol submit ditekan*/}
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              onChange={(e) => setText(e.target.value)} //mengubah state text sesuai dengan input yang dimasukkan
              value={text}
            />
            <button type="submit">Tambah</button>
          </form>
        </Kotak>

        <Kotak judul="Kotak 2">
          <ul>
            {tugas.map(
              (
                data,
                index, //menggunakan map untuk menampilkan data dari array tugas
              ) => (
                <li key={index}>
                  {data}
                  <button onClick={() => hapus(index)}>Hapus</button>{" "}
                  {/*menambahkan tombol hapus untuk setiap item dalam daftar*/}
                </li>
              ),
            )}
          </ul>
        </Kotak>
      </div>
    </>
  );
}

export default App;
