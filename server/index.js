const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const cors = require('cors')

app.use(cors())

// Listen the server
server.listen(2203, () => console.log("server started on port 2203"))

/***********************************************=== ===**********************************************/
/**************************************=== SOCKET.IO EVENTS ===*************************************/
/***********************************************=== ===**********************************************/
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log("USER CONNECTED")
    
    socket.on('startLive', (ID) => {
        socket.join(ID)
    })
    
    socket.on('stream', (data) => {
        io.emit('stream', data)
    })

})

/***********************************************=== ===**********************************************/
/***********************************************=== ===**********************************************/
