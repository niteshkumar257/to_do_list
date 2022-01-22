const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');
var items=["wakeUp","brush","breakfast"];
var workItems=[];
var day="";
app.get("/",function(req,res)
{
   
    var today=new Date();
    var exp=today.getDay();
    // console.log(today.getMinutes());
    // console.log(exp);
  
  
switch(exp)
{
    case  1:day="monday";
        break;
        case 2:day="Tuse day";
        break;
        case  3:day="Webnesday";
        break;
        case 4:day="ThursDay";
        break;
        case 5:day="friday";
        break;
        case 6:day="saturday";
        break;
        case 0:day="Sunday";
        default: day="Not a valid day";
}
    
    res.render("list",{day:"To dolist",listday:items})

})
app.get("/work",function(req,res)
{
    res.render("list",{day:"work",listday:workItems});
})
app.get("/about",function(req,res)
{
    res.render("about");
})
app.post("/",function(req,res)
{
    let item=req.body.n1;
   console.log(req.body.list);
    if(req.body.list==="work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
       
        items.push(item);
    // console.log(items);
   res.redirect("/");
    }
  
  
})
app.post("/work",function(req,res)
{
   
   
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
