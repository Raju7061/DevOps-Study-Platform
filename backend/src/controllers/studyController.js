import Study from "../models/Study.js";

export const getContent = async (req, res) => {
  try {
    const content = await Study.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
