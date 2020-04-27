const express=require('express');
const socketio=require('socket.io');
const http=require('http');

const PORT= process.env.PORT|| 5000 ;

const app=express();

const server= http.createServer(app);
const io=socketio(server);

const router= require('./router')
 app.use(router);

var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());




io.on('connection',  (socket)=> {   
  // socket.emit('news', { hello: 'world' });
  console.log("new connection enjoy!!!!")

  socket.on('join',({name,room},callback)=>{
   console.log(name,room);

   const error =true;
   if(error)
   {
     callback({error:'renu'}) ;
   }

  })

  socket.on('disconect',  () => {
    console.log( 'user has left');
  });
});








app.get('/user',(req,res)=>{
  console.log("dff")
  res.send('hello');
})



server.listen(PORT,()=>{
  console.log('back with '+ PORT);
})