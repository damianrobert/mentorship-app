import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDatabase from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  //res.send('Hello World!');
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server running on port ${PORT}`);
  //log current time
  console.log(new Date().toLocaleString());
});
