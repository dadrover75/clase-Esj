var express = require("express");
var router = express.Router();
var menu = require("../public/menu.js")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("../views/index.ejs");
});
/* GET detalle Menu. */

router.get("/detalle/:id", function (req, res, next) {
  let filter = menu.filter(obj=>obj.id==req.params.id);
  
  filter.length > 0 ? res.render("../views/detalleMenu.ejs", filter[0]) : res.render("../views/detalleMenu.ejs", menu.find(obj=>obj.id==='error'));
  
});


module.exports = router;
