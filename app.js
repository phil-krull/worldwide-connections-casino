const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public/dist/public')));

app.listen(8888, ()=>{
    console.log('listenin on port 8888');
})