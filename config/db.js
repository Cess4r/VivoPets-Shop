const mongoose = require('mongoose');

require('dotenv').config();

const conectarDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URL,  { 

        });
        console.log(" la base de datos esta conectada ");
    }
    catch (error) {
        console.log(error);
        process.exit(1); // detenemos app 
    }
}

module.exports  = conectarDB;