import mongoose from "mongoose";

const Database = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME})
    .then(() => { console.log(`Database connected ✅`) })
    .catch((e) => { console.log(`Database error: ${e}`) })
  }
  catch(error){
    console.log(`Error while connecting database: ${error}`);
  }
}

export default Database;