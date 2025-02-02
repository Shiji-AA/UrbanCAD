import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';  
import { dirname, join } from 'path'; 
import UserRoutes from './Routes/UserRoutes.js';
import { connectDB } from './config/db.js';
import adminRouter from './Routes/AdminRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:4000', "https://urbancad.in", "http://localhost:3000"],
  methods: "GET, PUT, POST, PATCH, DELETE"
};
app.use(cors(corsOptions)); // Apply the CORS options after defining them

// API routes
app.use('/api/users', UserRoutes);
app.use('/api/admin', adminRouter);

// Resolving __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serving static files
app.use(express.static(join(__dirname, "../../Frontend/dist")));

// Fallback route for any request to send index.html from the frontend dist
app.get("/", function (req, res) {
  res.sendFile(join(__dirname, "../../Frontend/dist"));
});

// Health check endpoint
app.get('/', (req, res) => res.send("Server is ready"));

// Get the port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
