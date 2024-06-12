import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
    console.log(`Database: ${connection.connection.name}`);
    console.log(`readyState: ${connection.connection.readyState}`);
    console.log(`user: ${connection.connection.user}`);
    console.log(`pass: ${connection.connection.pass}`);
    console.log(`id: ${connection.connection.id}`);

    //console.log(connection.connection);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
