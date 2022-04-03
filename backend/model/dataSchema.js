import mongoose from "mongoose";
const schema = mongoose.Schema({
  imgUrl: String,
  title: String,
  titleSecond: String,
  para: String,
  travelTime: String,
  travelName: String,
  type: String,
  latest: String,
});
const schema2 = mongoose.Schema({
  imgUrl: String,
  title: String,
  titleSecond: String,
  para: String,
  bottomFirst: String,
  bottomSecond: String,
});
const schema3 = mongoose.Schema({
  imgUrl: String,
  paraTop: String,
  heading: String,
  name: String,
  readTime: String,
});
const schema4 = mongoose.Schema({
  title: String,
  para: String,
  paraFirst: String,
  paraSecond: String,
});
const schema5 = mongoose.Schema({
  imgUrl: String,
  title: String,
  number: Number,
  paraBottomFirst: String,
  paraBottomSecond: String,
});
const dataModel = mongoose.model("articleFirst", schema);
const dataModel2 = mongoose.model("articleSecond", schema2);
const postdataModel = mongoose.model("postdata", schema3);
const storiesModel = mongoose.model("storiesarticle", schema4);
const topPostModel = mongoose.model("topPostArticle", schema5);
export default dataModel;
export { dataModel2, postdataModel, storiesModel, topPostModel };
