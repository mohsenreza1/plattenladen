import dotenv from "dotenv";
dotenv.config();
import  Product from "./models/product.js";

import router from "./router/api.js"

import express from "express";

const app = express();

import "./lib/connect_db.js"

import logMiddelware from "./middlewares/log.js"
app.use(logMiddelware)

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`port on ${port} `));

app.use(express.json())

app.use("/api", router)

app.get("/product")

app.use((error, req, res, next) =>{
    console.log(error)
    res.status(500).end()
})


