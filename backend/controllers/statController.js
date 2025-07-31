import Stat from "../models/Stat.js";

// @desc    Get all stats
// @route   GET /api/stats
export const getStats = async (req, res) => {
  try {
    const stats = await Stat.find({});
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new stat
// @route   POST /api/stats
export const createStat = async (req, res) => {
  try {
    const { platform, followers, engagementRate, sentimentScore } = req.body;

    const stat = new Stat({
      platform,
      followers,
      engagementRate,
      sentimentScore
    });

    const createdStat = await stat.save();
    res.status(201).json(createdStat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
