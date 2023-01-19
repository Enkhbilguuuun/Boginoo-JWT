import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URI, PORT } from "./config.js";
import router from "./router/User.js";
import router2 from "./router/Post.js";
import router3 from "./router/Link.js"



const app = express();

app.use(express.json());
app.use(cors());

app.use("/links", router3)

app.use("/posts", router2);

app.use("/users", router);

app.get("/", (req, res) => {
  res.send({
    data: "as",
    fact: "dig bick",
  });
});

const connect = () => {
  try {
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.error("could not connect to DB");
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  connect();
  console.log("server running on " + PORT);
});
