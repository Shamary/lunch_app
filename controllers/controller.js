var express = require('express');
const db = require('../config/db');

exports.setupLogin = async function(req,res)
{
    req.session.fUser=null;
    
    var list_of_members=[];
    var tmp_lst;
       
    var query="SELECT name FROM user";
    await db.query(query,function(err,row){
       if(err)
       {
           throw err;
       }
       
       tmp_lst=row;
       for(var i=0;i<tmp_lst.length;i++)
       {
           list_of_members[i]=tmp_lst[i].name;
       }
       
    });
    
    res.render('login',{member:list_of_members});
}

exports.doLogin = function(req,res){
    req.session.fUser=req.body.user;
    res.redirect("/menu");
}

exports.menuPage=async function(req,res)
{
    var appetizer0,protein0,carb0,vegetable0,sides0;
    var appetizerLst=[],proteinLst=[],carbLst=[],vegetableLst=[],sidesLst=[];
    
    let orders = "SELECT appetizer,protein,carb,vegetable,sides FROM orders WHERE name = '"+req.session.fUser+"'";
    let update;
    await db.query(orders,function(err,result) {
        if(err)
        {
            throw err;
        }
        
        if(result.length>0)
        {
            appetizer0=result[0].appetizer;
            protein0=result[0].protein;
            carb0= result[0].carb;
            vegetable0=result[0].vegetable;
            sides0=result[0].sides;
            update=true;
            console.log("found it");
            //res.render('menu',{user:req.body.user,appetizer:appetizer0,protein:protein0,carb:carb0,vegetable:vegetable0,sides:sides0});
        }
    });
    
    let menu = "SELECT appetizer,protein,carb,vegetable,sides FROM menu";
    
    await db.query(menu,function(err, result) {
       
       if(err)
       {
           throw err;
       }
       
       for(var i=0;i<result.length;i++)
       {
           appetizerLst[i]=result[i].appetizer;
           proteinLst[i]=result[i].protein;
           carbLst[i]=result[i].carb;
           vegetableLst[i]=result[i].vegetable;
           sidesLst[i]=result[i].sides;
       }
       
       res.render('menu',{user:req.session.fUser,update:update,appetizer:appetizer0,protein:protein0,carb:carb0,vegetable:vegetable0,sides:sides0
        ,appetizerList:appetizerLst,proteinList:proteinLst,carbsList:carbLst,vegetableList:vegetableLst,sidesList:sidesLst
        });
        
    });
}


exports.handleMenu=async function(req,res)
{
    let name= req.body.user;
    let branch=2;
    let appetizer= req.body.appetizer;
    let protein = req.body.protein;
    let carb= req.body.carb;
    let vegetable= req.body.vegetable;
    let sides = req.body.sides;
    
    console.log("appetizer= "+req.body.appetizer);
    
    let del="DELETE FROM orders WHERE name = '"+name+"'";
    await db.query(del,function(err,result){
        if(err)
        {
            throw err;
        }
        
        req.flash('update','Order Updated');
        
    });
    
    let query="INSERT INTO orders(name,branch,appetizer,protein,carb,vegetable,sides) VALUES ?";
    let values=[[name,branch,appetizer, protein,carb,vegetable,sides]];
    
     db.query(query,[values],function(err){
       if(err)
       {
           //throw err;
           req.flash('failure','Order Failed');
           throw err;
       }
    });
    
    var appetizer0,protein0,carb0,vegetable0,sides0;
    var appetizerLst=[],proteinLst=[],carbLst=[],vegetableLst=[],sidesLst=[];
    
    let orders = "SELECT appetizer,protein,carb,vegetable,sides FROM orders WHERE name = '"+req.body.user+"'";
    let update;
    db.query(orders,function(err,result) {
        if(err)
        {
            throw err;
        }
        
        appetizer0=result[0].appetizer;
        protein0=result[0].protein;
        carb0= result[0].carb;
        vegetable0=result[0].vegetable;
        sides0=result[0].sides;
        update=true;
        //res.render('menu',{user:req.body.user,appetizer:appetizer0,protein:protein0,carb:carb0,vegetable:vegetable0,sides:sides0});
    });
    console.log("appet = "+appetizer0);
    
    let menu = "SELECT appetizer,protein,carb,vegetable,sides FROM menu";
    
    db.query(menu,function(err, result) {
       
       if(err)
       {
           throw err;
       }
       
       for(var i=0;i<result.length;i++)
       {
           appetizerLst[i]=result[i].appetizer;
           proteinLst[i]=result[i].protein;
           carbLst[i]=result[i].carb;
           vegetableLst[i]=result[i].vegetable;
           sidesLst[i]=result[i].sides;
       }
       
        res.render('menu',{user:req.session.fUser,update:update,appetizer:appetizer0,protein:protein0,carb:carb0,vegetable:vegetable0,sides:sides0
        ,appetizerList:appetizerLst,proteinList:proteinLst,carbsList:carbLst,vegetableList:vegetableLst,sidesList:sidesLst
        });
    });
    
    
    //res.render('menu');
}