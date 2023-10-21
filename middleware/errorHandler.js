function errorHandler(err, request, response, next) {
    // Tangani kesalahan yang dihasilkan oleh aplikasi
    if (err.name === 'notFound') {
      response.status(404).json({ message: 'Data tidak ditemukan' });
    } else if (err.name === 'ValidationError') {
      response.status(400).json({ message: 'Validasi gagal', errors: err.errors });
    } else {
      // Tangani kesalahan server
      response.status(500).json({ message: 'Terjadi kesalahan internal server' });
    }
  
    // Catat kesalahan untuk tujuan debugging
    console.error(err);
  
    // Teruskan kesalahan ke handler kesalahan berikutnya (jika ada)
    next(err);
  }
  
module.exports = errorHandler;
  
  