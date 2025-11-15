import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MONGODB connection error:", error.message);
    process.exit(1);
  });
