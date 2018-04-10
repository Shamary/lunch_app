const db = require('../config/db');
const bcrypt=require("bcrypt");

var salt=bcrypt.genSaltSync(10);
var hash;

exports.authPage=function(req,res)
{
    res.render("signin");
}

exports.authLocal= async function(req,res)
{
    let user=req.sanitize(req.body.username);
    let password=req.sanitize(req.body.password);
    
    console.log("user= "+user+" pass = "+password);
    
    var all_user=[];
    var all_password=[];
    
    let found=false;
    let found_at=0;
    
    let query="SELECT * FROM lunch_admin";
    
    await db.query(query,function(err,result){
       if(err)
       {
           throw err;
       }
       
       for(var i=0;i<result.length;i++)
       {
           all_user[i]=result[i].username;
           all_password[i]=result[i].password;
       }
       
       for(var x=0;x<all_user.length;x++)
       {
           console.log("user x= "+all_user[x]);
           if(all_user[x]==user&&bcrypt.compareSync(password,all_password[x]))
           {
               console.log("found");
               found=true;
               found_at=x;
               break;
           }
       }
       
       if(found)
       {
           req.session.user=all_user[found_at];
           res.redirect("/admin");
       }
       else
       {
           res.redirect("/signin");
       }
    });
       
}

exports.isAuth =function(req,res,next)
{
    if(!req.session.user)
    {
        res.redirect('/signin');
    }
    else
    {
        return next();
    }
}

exports.addAdmin = async function(req,res)
{
    let username=req.body.username;
    let password=bcrypt.hashSync(req.body.password,salt);
    
    let query="INSERT INTO lunch_admin(username,password) VALUES ?";
    
    let values=[[username,password]];
    
    await db.query(query,[values],function(err){
       if(err)
       {
           throw err;
       }
       
       res.redirect("/admin");
       
    });
}

exports.logout = function(req,res)
{
    req.session = null;
    res.send("200 OK");
}