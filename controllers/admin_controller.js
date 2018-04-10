const db = require('../config/db');

exports.addToMenu = async function(req,res)
{
    const query= "INSERT INTO menu(appetizer,protein,carb,vegetable,sides) VALUES ?";
    
    let appetizer= req.sanitize(req.body.appetizer);
    let protein=req.sanitize(req.body.protein);
    let carb=req.sanitize(req.body.carb);
    let vegetable=req.sanitize(req.body.vegetable);
    let sides=req.sanitize(req.body.sides);
    
    let values=[[appetizer,protein,carb,vegetable,sides]];
    
    await db.query(query,[values],function(err){
        if(err)
        {
            throw err;
        }
    });
    
    res.render('admin');
}

exports.adminPage = function(req,res)
{
    res.render('admin');
}

exports.populateTable = async function(req,res)
{
    let query = "SELECT * FROM menu";
    
    await db.query(query,function(err,result){
       if(err)
       {
           throw err;
       }
       
       let arr=[];
       
       for(var i=0;i<result.length;i++)
       {
           arr[i]=result[i];
       }
      
       arr=JSON.stringify(arr);
       console.log(arr);
       
       res.send(arr);
    });
}

exports.deleteFromTable = async function(req,res)
{
    let id= req.sanitize(req.body.id);
    let query="DELETE FROM menu WHERE id = "+id;
    
    await db.query(query,function(err) {
        if(err)
        {
            throw err;
        }
    });
    
    res.send("200");
}

exports.showOrders = async function(req,res)
{
    let query="SELECT * FROM orders";
    
    await db.query(query,function(err, result) {
        if(err)
        {
            throw err;
        }
        
       let arr=[];
       for(var i=0;i<result.length;i++)
       {
           arr[i]=result[i];
       }
       
       arr=JSON.stringify(arr);
       
       res.send(arr);
        
    });
}