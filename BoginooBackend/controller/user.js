import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("links");
    console.log("ajillaj bn");
    res.send({
      data: users,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body, token: token });
    console.log(user);
    res.status(200).send({
      status: "complete",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const userLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = jwt.sign(
      {
        email: req.body.email,
        password: req.body.password,
        token: req.body.role
      },
      "secretkey",
      {
        expiresIn: 30000000000000,
      }
    );
    const user = await User.findOne({
      email: email,
    }).populate("links");

    const isMatch = await user.comparePassword(password);
    console.log(isMatch);

    if (!isMatch) {
      res.send("isMatch");
    }
    if (user) {
      res.status(200).send({
        data: user,
        token: token,
      });
    } else {
      res.status(404).send({
        data: "tiim user bhq bn",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const userById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).populate("links");

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
    });
  }
};

export const removeUser = async (req, res) => {
  try {
    const id = req.params;
    const user = await User.findByIdAndDelete({_id : id});
    res.status(200).send({
      success: "succesfully removed",
      data: id,
    });
  } catch (error) {
    res.status(400).send({
      success: "failed",
      data: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
