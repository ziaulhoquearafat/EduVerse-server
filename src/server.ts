import app from "./app";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  app.listen(PORT, () =>
    console.log(`EduVerse Server is Running On port ${PORT}`),
  );
};

startServer();
