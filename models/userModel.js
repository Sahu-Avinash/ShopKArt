import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Enter your Name"],
      trim: true,
      maxLength: [30, "Name cannot exceed 30 character"],
      minLength: [4, "Name should have mare than 5 character"],
    },
    email: {
      type: "string",
      required: [true, "Enter your Email"],
      unique: true,
      // validate:[validator.isEmail,"Plesae enter a valid Email"]
    },
    password: {
      type: "string",
      required: [true, "Enter your password"],
      minLength: [8, "Password should be greatyer then 8 character"],
    },
    phone: {
      type: "string",
      required: true,
    },
    address: {
      type: "string",
      required: true,
    },
    answer:{
      type:"string",
      required:true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model(`users`, userSchema);
