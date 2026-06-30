import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  database_uri: string;
  redis_url: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  database_uri: process.env.DATABASE_URI || "",
  redis_url: process.env.REDIS_URL || "",
};

export default config;
