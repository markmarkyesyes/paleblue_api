const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ContentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    lng: { type: Number },
    lat: { type: Number },
    contentType: { type: String },
    data: { type: String },
    demoId: { type: String, default: "" },
    expiresAt: { type: Date, default: Date.now, expires: "12h" }
  },
  {
    timestamps: true
  }
);

var Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
