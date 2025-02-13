const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

// Database Connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// Routes
// app.use("/auth", require("./routes/authRoutes"));
// app.use("/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
