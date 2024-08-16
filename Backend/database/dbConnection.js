import mongoose from "mongoose";


const dbConnection= () =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"PORTFOLIO"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(()=>{
        console.log(`Some error Occured while Connecting to DataBase:${error}`);

    });
} ;

export default dbConnection;