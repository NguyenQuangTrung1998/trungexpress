var db=require('../db');
var shortid = require('shortid');
module.exports.index = function(req,res){
	res.render('users/index',{
		users:db.get('users').value()
	});
}
module.exports.search = function(req,res){
	var q=req.query.q;
	var dataFilter = db.get('users').value().filter(function(x){
		return x.name.toLowerCase().indexOf(q.toLowerCase())!=-1;
	});
	res.render('users/index',{
		users:dataFilter
	});
}
module.exports.id = function(req,res){
	var id = req.params.id;
	var detail = db.get('users').find({id: id}).value();
	res.render('users/views',{
		user:detail
	});
}

module.exports.create = function(req,res){
	req.body.id = shortid.generate();
	var errors = [];
	if(!req.body.name){
		errors.push('phone is require');
	}
	if(!req.body.phone){
		errors.push('phone is require');
	}
	if(errors.length){
		res.render('users/create',{
			errors:errors,
			values:req.body
		});
		return ;
	}
	db.get('users').push(req.body).write();
	res.redirect('/users');
}