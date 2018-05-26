var express = require("express");
var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){  
      res.send("hello express");  

    }

);
app.get('/about',function(req,res){
    res.render('about.hbs',{name:'raji'});
});

app.listen(9090,function(){console.log('server started')});