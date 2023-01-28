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

// export const verifyRole = () => {
//   return (req, res, next) => {
//     if (!req?.body.roles) return res.sendStatus(401);
//     if (req.body.role === 'admin') next()
//     else if (!result) return res.sendStatus(401);
//     next();
//   };
// };

export const checkAdmin = (req, res, next) => {
  const { role } = req.body;
  if (role !== "admin") {
    res.status(400).send("admin  bisg");
  } else {
    next();
  }
};
