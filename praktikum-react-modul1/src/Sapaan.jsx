const Sapaan = () => {
  const notifikasiSapaan = () => {
    alert("Selamat datang di website saya");
  };

  return (
    <div>
      <button onClick={notifikasiSapaan}> klik aku sekarang </button>
    </div>
  );
};

export default Sapaan;
