import mongoose from "mongoose";

export interface User extends mongoose.Document {
  email: string;
  name: string;
  role?: "admin" | "user";
}

const UserSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: [true, "Ingresa tu email"],
    maxlength: [60, "no puede exceder 60 caracteres"],
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
