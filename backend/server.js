import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json()); //body parser(this will allow us accept json data from body)

app.get("/", (req, res) => {
  res.send("Api is running...");
});

//product api
app.use("/api/products", productRoutes);
//user api
app.use("/api/users", userRoutes);
//order api
app.use("/api/orders", orderRoutes);
//upload image api
app.use("/api/upload", uploadRoutes);

const _dirname = path.resolve();
app.use("/uploads", express.static(path.join(_dirname, "/uploads"))); //making upload folder static

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
