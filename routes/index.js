var express = require('express');
var router = express.Router();

var controller=require('../controllers/controller');
var admin = require('../controllers/admin_controller');
var bAuth=require('../controllers/basicAuth');
var auth=require('../controllers/Auth');

router.get('/',controller.setupLogin);
router.post('/',controller.doLogin);

router.get('/menu',bAuth.checkMenuAuth,controller.menuPage);
router.post('/menu',controller.handleMenu);

router.get('/admin',auth.isAuth,admin.adminPage);
router.post('/admin',admin.addToMenu);
router.post('/admin/populate',admin.populateTable);
router.post('/admin/delete',admin.deleteFromTable);
router.post('/admin/orders',admin.showOrders);

router.post('/logout',bAuth.logout);

router.get('/signin',auth.authPage);
router.post('/signin',auth.authLocal);
router.post('/register',auth.isAuth,auth.addAdmin);
router.post('/signout',auth.logout);

/* GET home page.
router.get('/menu', function(req, res, next) {
  res.render('menu', {item: ["Fry Fish","rice and peas", "fry chicken"]});
});*/

module.exports = router;
