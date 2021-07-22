var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(3300,()=>console.log("node esta levantado en el puerto 3300"));


var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user:'root',
    password:'root',
    database:'pulpo'
})

app.post('/api/insertservice',function(req,res){
    console.log('enviando');
    var data = req.body;
    var titulo = data.titulo;
    var precio = data.precio;
    var unidad = data.unidad;
    console.log(data);
    connection.connect(function(){
        var query = "insert into servicios (titulo,precio,unidad) values('"+titulo+"','"+precio+"','"+unidad+"')";
        console.log(query);
        connection.query(query,function(err,result,field){
                if(result.affectedRows > 0){
                    res.end("successfully inserted")
                }else{
                    res.end("Please try again")
                }
            
        }) 
    })
})

app.get('/api/getservice',function(req,res){
    console.log('recibiendo');
        connection.
        query("SELECT * FROM servicios", function (err, result, fields) {
        if (err) throw err;
          if(result.length == 0){
            res.end("0");
          }else{
            res.end(JSON.stringify(result));
          }
        });
})
