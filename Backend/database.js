import mongoose from 'mongoose';

const ConnectMongoDB = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Database is Connected')
    } catch (error) {
        console.log('Error in conxion database')
    }
}

export default ConnectMongoDB;