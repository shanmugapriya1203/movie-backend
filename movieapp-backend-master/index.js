import express from "express"; 
import { MongoClient } from "mongodb";
import moviesRouter from "./routes/movies.route.js";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.DB;

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongo is connected");
app.use(express.json());
app.use("/movies", moviesRouter);
app.listen(PORT, () => console.log("server started in", PORT));
export { client }