const {
  tweetVOTD,
  tweetVOTDV2,
  tweetRandomVerse,
  tweetRandomVerseV2,
} = require("./api/tweet");

setInterval(() => {
  tweetRandomVerse();
}, 5000);
module.exports = {
  tweetVOTD,
  tweetVOTDV2,
  tweetRandomVerse,
  tweetRandomVerseV2,
};
