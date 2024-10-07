const Sales = require("../models/sales");

exports.salesSeeder = async () => {
  try {
    const result = await Sales.insertMany([
      {
        date: new Date("2024-06-15T00:00:00Z"),
        store: "Store A",
        items: [
          { name: "item1", quantity: 5, price: 10.0 },
          { name: "item2", quantity: 3, price: 20.0 },
        ],
      },
      {
        date: new Date("2024-06-15T00:00:00Z"),
        store: "Store B",
        items: [
          { name: "item3", quantity: 2, price: 30.0 },
          { name: "item4", quantity: 1, price: 50.0 },
        ],
      },
      {
        date: new Date("2024-07-01T00:00:00Z"),
        store: "Store A",
        items: [
          { name: "item5", quantity: 4, price: 15.0 },
          { name: "item6", quantity: 2, price: 25.0 },
        ],
      },
      {
        date: new Date("2024-07-01T00:00:00Z"),
        store: "Store B",
        items: [
          { name: "item7", quantity: 3, price: 40.0 },
          { name: "item8", quantity: 5, price: 10.0 },
        ],
      },
      {
        date: new Date("2024-08-15T00:00:00Z"),
        store: "Store A",
        items: [
          { name: "item9", quantity: 1, price: 100.0 },
          { name: "item10", quantity: 2, price: 60.0 },
        ],
      },
    ]);

    return `${result.length} record(s) are inserted successfully!`;
  } catch (error) {
    console.error("Error on seeding sales data:", error);
  }
};
