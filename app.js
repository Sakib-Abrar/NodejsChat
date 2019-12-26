const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index');
})

server = app.listen(3000)

const io = require('socket.io')(server)
io.on('connection',(socket)=>{
    console.log('New User connected')

    socket.on('newMessage',(data)=>{
        if(data.username == "")
            data.username = "Anonymous"
        io.sockets.emit('newMessage',{message:data.message, username:data.username});
    })
})