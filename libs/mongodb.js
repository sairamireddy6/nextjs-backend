import mongoose from 'mongoose';

const ConnectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MongooDb_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default ConnectMongoDB