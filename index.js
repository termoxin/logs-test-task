const express = require('express');
const http = require('http');
const fs = require('fs');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true
    }
});

const logFilePath = 'build.log';
const chunkSize = 1024; // Chunk size in bytes
const readInterval = 100; // Interval to read a chunk (in milliseconds)

// Function to send one chunk of log data to the frontend every readInterval milliseconds
function sendLogData(socket) {
    const readStream = fs.createReadStream(logFilePath, { highWaterMark: chunkSize });

    readStream.on('readable', () => {
        setTimeout(() => {
            let chunk;
            while ((chunk = readStream.read(chunkSize)) !== null) {
                socket.emit('logData', chunk.toString());
            }
        }, readInterval);
    });

    readStream.on('end', () => {
        socket.emit('logDataEnd'); // Signal end of log data
    });

    readStream.on('error', (err) => {
        console.error(err);
    });
}

io.on('connection', (socket) => {
    // Send log data when a client connects
    sendLogData(socket);
});

server.listen(3001, () => {
    console.log('Backend server running on port 3001');
});
