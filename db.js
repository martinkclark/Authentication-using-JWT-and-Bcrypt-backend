const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try{
       const callBack =  await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, );
        console.log('MongoDB connection SUCCESS : ', callBack.connection.host);
    }catch(err){
        console.error('MongoDB connection FAIL : ', err);
    }
};

module.exports = connectDB;
