import Redis from "ioredis";
import config from ".";

const redisClient = () => {
  if (config.redis_url) {
    console.log("Redis Connected Successfully");
  }
  throw new Error("Redis connection failed");
};

const redis = new Redis(redisClient());

export default redis;
