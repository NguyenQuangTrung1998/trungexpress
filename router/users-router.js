var express = require('express');
var router = express.Router();
var controller = require('../controller/user-controller');
router.get('/',controller.index);
router.get('/create',function(req,res){
	res.render('users/create');
});

router.get('/search',controller.search);

router.get('/:id',controller.id);


router.post('/create',controller.create);
module.exports = router;