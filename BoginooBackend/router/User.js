import express from "express";
import jwt from "jsonwebtoken";
import {
  getAllUsers,
  createUser,
  userById,
  updateUser,
  removeUser,
  userLogIn,
} from "../controller/user.js";
import {
  myFirstMiddleware,
  verifyJWT
} from "../middleware/middleware.js"

const router = express.Router();

// const token = jwt.sign({ name: "enkhbilguun", age: "14" }, "secretkey", {
//   expiresIn: "100000",
// });

// const myFirstMiddleware = (req, res, next) => {
//   console.log("data encrypted: ", token);
//   next();
// };

// const verifyJWT = (req, res, next) => {
//   jwt.verify(token, "secretkey", (err, result) => {
//     if (err) {
//       return err;
//     }
//     console.log(result)
//     return result;
//   });
// };

router.route("/").get(verifyJWT).get(getAllUsers).post(createUser);
router.route("/signin").post(userLogIn);
router.route("/:id").get(userById).put(updateUser).delete(removeUser);

export default router;
