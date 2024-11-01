const Pengguna = require("../models/pengguna");

const index = (req, res, next) => {
    Pengguna.find({}, { __v: 0 })
      .then((pgn) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: pgn
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert  Pengguna 
const insert = (req, res, next) => {
    const pgn = new  Pengguna({
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
      alamat: req.body.alamat,
      tanggal_daftar: req.body.tanggal_daftar,
    });
  
    pgn
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = {index,insert}
