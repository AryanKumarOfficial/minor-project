import mongoose from 'mongoose';


const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    return handler(req, res);
}


export default connectDB;