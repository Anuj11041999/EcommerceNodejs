const http = require('http');


const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/node'){
        res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</head>');
    return res.end();
    }else if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to About Us Page</h1></body>');
        res.write('</head>');
        return res.end();
    }
    else{
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</head>');
    res.end();
    }
    
});

server.listen(3000);