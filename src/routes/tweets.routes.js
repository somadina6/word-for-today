const { Router } = require("express");
const {
  tweetVOTD,
  tweetVOTDV2,
  tweetRandomVerse,
  tweetRandomVerseV2,
} = require("../handlers/handleTweet");

const tweetRouter = Router();

tweetRouter.get("/votd", tweetVOTD);
tweetRouter.get("/votd2", tweetVOTDV2);
tweetRouter.get("/random", tweetRandomVerse);
tweetRouter.get("/random2", tweetRandomVerseV2);

module.exports = tweetRouter;
