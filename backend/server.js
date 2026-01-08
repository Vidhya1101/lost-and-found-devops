const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lost & Found Backend is running");
});

app.get("/items", (req, res) => {
  res.json([
    { id: 1, item: "ID Card", status: "Found" },
    { id: 2, item: "Notebook", status: "Lost" }
  ]);
});
app.post("/report", (req, res) => {
  res.json({
    message: "Item reported successfully",
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
