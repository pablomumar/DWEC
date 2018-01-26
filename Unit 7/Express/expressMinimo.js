var express = require('express')();
var server = require('http').Server(express);//http no tiene na que ver
var io = require('socket.io')(server);//server es el objeto del puerto de escucha

express.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });                                  //socket lo utilizas para lo que vaya a pasar en tu server

    socket.on('nuevoUsuario', function (msg) { //Lo que hemos definio en el index como mensaje
        // ('chat message', msg)
        console.log('Se ha conectado: ' + msg)
    });

    socket.on('nuevoUsuario', function (msg) {
    socket.broadcast.emit('nuevoUsuario');
    //envia a todos menos a ti mismo ('tipo de mensaje', 'msg')
    console.log('Se ha conectado: ' + msg);
    //en el html tenemos que decirle al cliente que escuche el mensaje
    })
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});