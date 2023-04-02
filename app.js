const http = require('http');


const server = http.createServer((req,res)=>{
    console.log(res);
    console.log('Anuj');
});

server.listen(3000);