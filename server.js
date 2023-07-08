const fs = require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.method)
    console.log(req.url)
    console.log('server')
     res.setHeader('Content-Type','text/html')
    // res.write('<h1>Hello</h1>')
    // res.end();
    let path='./views'
    switch(req.url){
        case '/':path+='/index.html'
        res.statusCode=200
        break;
        case '/about':path+='/about.html'
        res.statusCode=200
       break;
       case '/about-me':path+='/about.html'
        res.statusCode=301
        res.setHeader('Location','/about');
        res.end();
       break;
       default:path+='/404.html';
       res.statusCode=404
       break;
    }
    fs.readFile(path,(err,fillData)=>{
        if(err)
        {console.log(err)}
        else{
            //res.write(fillData)
            res.end(fillData)
        }        
    })
})

server.listen(3000,'localhost',()=>{
console.log('3000')
})
