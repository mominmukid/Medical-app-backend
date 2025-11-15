import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
// this is the standard middleware for CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://wideview.netlify.app",
    ],
    credentials: true,
  })
);

// this is the standard middleware for parsing JSON requests
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello this is the Backend of Explorer APP");
});
//routes  import
// import userRouter from "./routes/user.routes.js";


//routes decleration
// app.use("/api/v1/users", userRouter);


export default app;