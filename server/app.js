const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const path = require("path")
const userRouter = require("./routes/userRoutes");
const todoRouter = require("./routes/todoRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

// set environment
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// middleware
app.use(express.json());
app.use(cors()); 

// Set default route
app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);

if (process.env.NODE_ENV === 'production'){
  // serve the static files from react app
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.join(path.join(__dirname, "../client/build"), 'index.html'));
  });
}
// Handle when go to undefined route
app.all("*", (req, res, next) => {
  next(new AppError(404, `Can't find ${req.originalUrl} on this server !`));
});


// Handle global error
app.use(globalErrorHandler);

module.exports = app;
