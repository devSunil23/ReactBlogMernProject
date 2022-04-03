import express from "express";
import env from "dotenv";
import { mongoose } from "mongoose";
import articleData from "./data/backendData.js";
import articleSecondData from "./data/articleSecond.js";
import dataPost from "./data/postdata.js";
import storiesData from "./data/stories.js";
import imageDataSecond, { imageDataFirst } from "./data/topPost.js";
import cors from "cors";
import path from "path";
import dataModel, {
  dataModel2,
  postdataModel,
  storiesModel,
  topPostModel,
} from "./model/dataSchema.js";
env.config();
const PORT = process.env.PORT || 3001;
const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;
const app = express();
const connection = async () => {
  const url = `mongodb+srv://reactblog:${password}@reactblog.4tbwq.mongodb.net/${username}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(url);
    console.log("database connected successfully!");
  } catch (error) {
    console.log(`connection error: ${error}`);
  }
};
connection();
// deploy on heroku
// const dirname1 = path.resolve();
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static(path.join(dirname1, "reactblog/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(dirname1, "reactblog", "build", "index.html"));
//   });
// }
app.use(cors());
app.get("/latest", async (req, res) => {
  try {
    const data = await dataModel2.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.get("/article", async (req, res) => {
  try {
    const data = await dataModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.get("/postdata", async (req, res) => {
  try {
    const data = await postdataModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.get("/stories", async (req, res) => {
  try {
    const data = await storiesModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.get("/toppost", async (req, res) => {
  try {
    const data = await topPostModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is started on successfully on port ${PORT}`);
});
// save to database
const saveData = async () => {
  try {
    await dataModel.deleteMany({});
    await dataModel.insertMany(articleData);
    await dataModel2.deleteMany({});
    await dataModel2.insertMany(articleSecondData);
    await postdataModel.deleteMany({});
    await postdataModel.insertMany(dataPost);
    await storiesModel.deleteMany({});
    await storiesModel.insertMany(storiesData);
    await topPostModel.deleteMany({});
    await topPostModel.insertMany(imageDataFirst);
    await topPostModel.insertMany(imageDataSecond);

    console.log("data inserted successfully");
  } catch (error) {
    console.log(`isertion error ${error}`);
  }
};
saveData();
