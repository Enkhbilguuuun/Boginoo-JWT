import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "zaavl baih ystoi"],
  },
  password: {
    type: String,
    required: [true],
  },
  token: {
    type: String,
  },
});

// UserSchema.path("username").validate((firstName) => {
//     return !/[0-9]/.test(username);
//   }, "ner dotor too yvj bnaa");

//   UserSchema.path('email').validate(function (email) {
//     var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return emailRegex.test(email.text); // Assuming email has a text attribute
//  }, 'hudal email')

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.jwtGenerate = async function () {
  return jwt.sign({ id: this._id, username: this.username }, process.env.JWT, {
    expiresIn: "1d",
  });
};
const User = mongoose.model("User", UserSchema);

export default User;
