const express = require("express"); // Corrected the module name
const router = express.Router();
const penggunaController = require("../controllers/controllerPengguna");

// Fungsi dan Rute Index digunakan untuk memanggil semua data dalam database mongodb
router.get("/pengguna", penggunaController.index);
router.post("/pengguna/insert", penggunaController.insert);
module.exports = router;
