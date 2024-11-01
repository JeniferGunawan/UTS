const mongoose = require ("mongoose");

const penggunaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      alamat: {
        type: String,
        required: true
      },
      tanggal_daftar: {
        type: Date,
        default: Date.now
      },
});

const Pengguna = mongoose.model('Pengguna', penggunaSchema);
module.exports = Pengguna;
