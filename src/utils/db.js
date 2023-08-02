import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect(process.env);
}

try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection to db failed")
  }

  export default connect;