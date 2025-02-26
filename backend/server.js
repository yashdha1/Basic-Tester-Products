// import express from 'express' ;
// import { connectDB } from './config/db.js';
// import dotenv from 'dotenv' ;
// import path from 'path' ;
// import productRoutes from './routes/product.routes.js'; 

// dotenv.config() 
// const app = express() 
// const PORT = process.env.PORT || 5000 


// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// app.use(express.json()) 

// app.get('/', (req, res)=>{
//     res.send("SERVER IS READY...") 
// })

// const __dirname = path.resolve() 
// app.use('/api/product', productRoutes);

 
// console.log("Current Directory Name: ", __dirname) 


// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "/frontend/dist", "index.html"));
// 	});
// }

// app.listen(PORT, ()=>{ 
//     connectDB() 
//     console.log('application running on http://localhost:'+ PORT )
// });

import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/product", productRoutes);

const stPath = path.resolve(__dirname, "frontend", "dist");
const rsPath = path.resolve(__dirname, "frontend", "dist", "index.html")

console.log("NODE_ENV:", `"${process.env.NODE_ENV.trim()}"`); // Extra quotes to see spaces

// if (process.env.NODE_ENV === "production") {
//     console.log("✅ This block is running!");
// }
// console.log("Current Directory Name: ", rsPath);

if (process.env.NODE_ENV.trim() == "production") {
	
    console.log("Current Directory Name: ", rsPath);
	app.use(express.static(stPath));
	app.get("*", (req, res) => {
		res.sendFile(rsPath);
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});