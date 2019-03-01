const express = require('express');

const server = express();

server.get('/',(req,res)=>{
  res.send('Hello Express');
});

server.get('/about',(req,res)=>{
  res.send('I am express server running on Rohit PC');
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
