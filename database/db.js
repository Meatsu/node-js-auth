const mongoose = require("mongoose")

const connect = async () => {
    try{

        console.log(
            "MONGODB_URI exists:",
            !!process.env.MONGODB_URI
        )

        const connection = await mongoose.connect(process.env.MONGODB_URI)

        console.log("Connected to:", connection.connection.name)
        console.log("Database:", connection.connection.name)
        console.log("Connecting to Mongodb Succesful")
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

module.exports = connect;