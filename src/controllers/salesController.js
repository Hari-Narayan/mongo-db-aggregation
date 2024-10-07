const Sales = require("../models/sales");

exports.monthlyReport = async (req, res) => {
  try {
    const results = await Sales.aggregate([
      {
        $unwind: "$items",
      },
      {
        $group: {
          _id: {
            store: "$store",
            month: { $dateToString: { format: "%Y-%m", date: "$date" } },
          },
          totalRevenue: {
            $sum: { $multiply: ["$items.quantity", "$items.price"] },
          },
          totalQuantity: {
            $sum: "$items.quantity",
          },
        },
      },
      {
        $project: {
          _id: 0,
          store: "$_id.store",
          month: "$_id.month",
          totalRevenue: "$totalRevenue",
          averagePrice: {
            $round: [{ $divide: ["$totalRevenue", "$totalQuantity"] }, 2],
          },
        },
      },
      {
        $sort: {
          store: 1,
          month: 1,
        },
      },
    ]);

    if (results.length) res.json(results);
    else res.status(404).json({ message: "No record found!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message || "Something went wrong." });
  }
};
