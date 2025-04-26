import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: '*' },
});
io.on('connection', socket => {
    console.log('Client connected');
});
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});
