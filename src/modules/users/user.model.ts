import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  role: "user" | "instructor" | "admin";
  avatar?: {
    public_id: string;
    url: string;
  };
  signature?: {
    public_id: string;
    url: string;
  };
  username: string;
  refreshToken?: string | null;
  refreshTokenExpiry?: Date | null;
  activationCode?: string | null;
  activationCodeExpiry?: Date | null;
  resetPasswordOtp?: string | null;
  resetPasswordOtpExpiry?: Date | null;
}


