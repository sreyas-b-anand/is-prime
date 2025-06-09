const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const primeRoutes = require("./routes/prime.route");
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // Adjust this to your frontend's URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api/prime", primeRoutes);