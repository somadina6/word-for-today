const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();

const initializeTwitterClient = async () => {
  try {
    const client = await new TwitterApi({
      appKey: process.env.TWITTER_APP_TOKEN,
      appSecret: process.env.TWITTER_APP_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
    return client;
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeTwitterClient;
