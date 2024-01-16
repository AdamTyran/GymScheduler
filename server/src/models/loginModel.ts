import { Schema, Types, model } from "mongoose";
import { object, string } from "yup";

interface User {
  _id: Types.ObjectId;
  login: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  login: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const ValidateUser = object<User>({
  login: string().required().min(4),
  email: string().required().email(),
  password: string()
    .required()
    .min(8, "Password must be at least 8 characters long"),
});

export const userModel = model("login", userSchema);
