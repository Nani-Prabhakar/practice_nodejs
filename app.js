const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('this is my first server')
    }
    if(req.url==='/about'){
        res.write('this is my about page')
    }
    
    res.end(
        `<h1>opps!</h1>
        <h4>it seems you are missing on some thing</h4>
        <a href="./"> back to homepage</a>`
    );

})
server.listen(5002)