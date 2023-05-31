import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.DB_URL

const Connection = async () => {
    try {
        await mongoose.connect(url, { useUnifiedTopology: true})
        console.log('Database connected')
    } catch (error) {
        console.log('Error connecting to database - ', error)
    }
}

export default Connection