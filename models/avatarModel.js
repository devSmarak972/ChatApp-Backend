const mongoose = require("mongoose");

const AvatarSchema = mongoose.Schema({
  avatarImage: {
    type: String,
    default: "",
  },
  uid: {
    type: Number,
    default: function () {
      const collection = this.parent().avatars;
      return collection ? collection.length : 0;
    },
  },
  index: { type: Number, unique: true },
});

module.exports = mongoose.model("Avatar", AvatarSchema);
