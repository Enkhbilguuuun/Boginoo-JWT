import mongoose, { Schema } from "mongoose";

const LinkSchema = new mongoose.Schema({
  Longlink: {
    type: String,
    required: [true],
  },
  Shortlink: {
    type: String,
  },
  token: {
    type: String,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
