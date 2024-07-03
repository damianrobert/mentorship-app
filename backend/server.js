import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/posts.routes.js';
import courseRoutes from './routes/course.routes.js';
import connectDatabase from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());

app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/course', courseRoutes);

app.get('/', (req, res) => {
  //res.send('Hello World!');
});

app.use('/api/auth', authRoutes);

server.listen(PORT, () => {
  connectDatabase();
  console.log(`Server running on port ${PORT}`);
  //log current time
  console.log(new Date().toLocaleString());
});
