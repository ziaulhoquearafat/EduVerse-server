import app from "./app";
import config from "./config";
import connectDB from "./config/db";
import cloudinary from "./config/cloudinary";

const PORT = config.port;

const startServer = async () => {
  await connectDB();
  console.log("cloudinary ready for uploads");
  app.listen(PORT, () =>
    console.log(`EduVerse Server is Running On port ${PORT}`),
  );
};

startServer();
