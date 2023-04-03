const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url==='/'){
        return fs.readFile("message.txt", (err, data)=>{
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.write('An error occurred');
                return res.end();
            }
            let x = data.toString();
            res.write('<html>');
            res.write('<head><title>My First Page</title></head>');
            res.write(`<body><h1>${x}</h1>`);
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        });
    }
    if(url==='/message' && method == "POST"){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt",message,err=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</head>');
    res.end();
});

server.listen(3000);