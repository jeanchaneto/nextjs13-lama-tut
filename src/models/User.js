import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

//creates user collection in db if does not exist
export default mongoose.models.User || mongoose.model("User", userSchema);