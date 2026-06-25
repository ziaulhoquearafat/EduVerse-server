import app from "./app";
import config from "./config";

const PORT = config.port;

const startServer = async () => {
  app.listen(PORT, () =>
    console.log(`EduVerse Server is Running On port ${PORT}`),
  );
};

startServer();
