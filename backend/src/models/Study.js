import mongoose from "mongoose";

const studySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

export default mongoose.model("Study", studySchema);
