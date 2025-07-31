import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  engagementRate: {
    type: Number,
    required: true,
  },
  sentimentScore: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true
});

const Stat = mongoose.model("Stat", statSchema);
export default Stat;
