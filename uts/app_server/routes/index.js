var express = require('express');
var router = express.Router();

//panggil controller main
var mainController = require("../controllers/main")

/* GET home page. */
router.get('/', mainController.index);


module.exports = router;