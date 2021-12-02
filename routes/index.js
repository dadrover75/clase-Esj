var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("../views/index.ejs");;
});
/* GET detalle Menu. */
router.get('/detalle/', function(req, res, next) {
  res.render("../views/detalleMenu.ejs");;
});

/* GET detalle producto. */
router.get('/detalle/:id', function(req, res, next) {
  res.render("../views/detalleProducto.ejs");;
});

module.exports = router;
