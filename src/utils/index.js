const getInitialData = () => ([
  {
    id: 1,
    title: "IG : mwannn_n",
    body: "Buku Catatan adalah sebuah program atau aplikasi yang memungkinkan pengguna untuk membuat, menyimpan catatan-catatan secara digital. Tujuan utama dari aplikasi catatan adalah memberikan sarana untuk pengguna agar dapat mencatat informasi, ide, tugas, atau hal-hal penting lainnya dengan mudah dan teratur.",
    createdAt: 'Jumat, 30 Juni 2006',
    archived: false,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
