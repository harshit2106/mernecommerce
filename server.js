const express = require("express");
const dotenv = require("dotenv");
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const path = require("path");
const connectDB = require("./config/db");
const morgan = require("morgan");
// const product = require("./models/product");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
dotenv.config();

connectDB();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// const __dirname = path.resolve
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("projfrontend/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "projfrontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server  running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
