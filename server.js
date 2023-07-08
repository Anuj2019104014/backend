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
        break;
        case '/about':path+='/about.html'
       break;
       default:path+='/404.html';
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
