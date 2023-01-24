import jwt from "jsonwebtoken";

// const token = jwt.sign({ name: "enkhbilguun", age: "14" }, "secretkey", {
//   expiresIn: "100000",
// });

export const myFirstMiddleware = (req, res, next) => {
  console.log("data encrypted: ", token);
  next();
};

export const verifyJWT = (req, res, next) => {
  jwt.verify(req.body.token, "secretkey", (err, result) => {
    if (err) {
      return res.status(403).send(err);
    } else {
      next();
      return result;
    }
  });
};
