//importing the express module
const express=require('express');
//asssinging the port number
const port=8080;
//importing the path module
const path=require('path');

//creating the instance of the express
const app=express();

// Serve static files from the assets directory
app.use(express.static(path.join(__dirname, 'assets')));

//serving the get request
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'assets/html/index.html'));
})

//firing up the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in firing the server ${err}`);
    }
    console.log(`Server is up at port: ${port}`);
})