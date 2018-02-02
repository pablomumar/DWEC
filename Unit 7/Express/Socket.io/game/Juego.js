var express = require('express')();
var server = require('http').Server(express);//http no tiene na que ver
var io = require('socket.io')(server);//server es el objeto del puerto de escucha

express.get('/', function(req, res){
    res.sendFile(__dirname + '/indexJuego.html');
});

io.on('connection', function(socket) {
        io.emmit('chat msg', 'Nueva conexion');

    };

server.listen(3000, function(){
    console.log('listening on *:3000');
});