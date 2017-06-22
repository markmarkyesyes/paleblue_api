const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LikeSchema = new Schema(
  {
    fromUserId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    contentId: {
      type: Schema.Types.ObjectId,
      ref: "Content"
    },
    fromLng: { type: Number },
    fromLat: { type: Number },
    demoId: { type: String, default: "" },
    expiresAt: { type: Date, default: Date.now, expires: "24h" }
  },
  {
    timestamps: true
  }
);

var Like = mongoose.model("Like", LikeSchema);

module.exports = Like;
