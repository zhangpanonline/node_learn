const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 },
});


// 虚拟属性'url'：URL
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

module.exports = mongoose.model("Guthor", GenreSchema);
