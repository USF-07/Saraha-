import { Schema, model } from "mongoose";
import { GenderEnum } from "../../common/enum/user.enum.js";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      minLength: 2,
      maxLength: 20,
      required: true,
    },
    lastName: {
      type: String,
      minLength: 2,
      maxLength: 20,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: String,
    gender: {
      type: Number,
      enum: Object.values(GenderEnum),
      default: GenderEnum.MALE,
    },
    deletedAt: Date,
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    profilePicPath: String,
    coverPicsPath: [String],
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
    toJSON: {
        virtuals: true
    }
  },
);

userSchema
  .virtual("username")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (value) {
    const [firstName, lastName] = value.split(" ");
    this.set({
      firstName,
      lastName,
    });
  });

export const userModel = model("Users", userSchema);
