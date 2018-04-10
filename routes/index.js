var express = require('express');
var router = express.Router();

var controller=require('../controllers/controller');
var admin = require('../controllers/admin_controller');

router.get('/',controller.setupLogin);
router.post('/',controller.doLogin);

router.get('/menu',controller.menuPage);
router.post('/menu',controller.handleMenu);

router.get('/admin',admin.adminPage);
router.post('/admin',admin.addToMenu);
router.post('/admin/populate',admin.populateTable);
router.post('/admin/delete',admin.deleteFromTable);
router.post('/admin/orders',admin.showOrders);

/* GET home page.
router.get('/menu', function(req, res, next) {
  res.render('menu', {item: ["Fry Fish","rice and peas", "fry chicken"]});
});*/

module.exports = router;
