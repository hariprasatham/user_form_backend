const mongoose = require("mongoose")

const CONNECTION_STRING = process.env.CONNECTION_STRING

console.log("Connection String", CONNECTION_STRING)
const connectDb = async() => {
    try{
        const connect = await mongoose.connect(CONNECTION_STRING);
        console.log("connection established", connect.connection.name, connect.connection.host)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb
