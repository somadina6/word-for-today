const initializeTwitterClient = require("../config/twitter.config");
const { getRandomVerse, getRandomVerseV2 } = require("./getRandomVerse");

async function postTweet(text) {
  try {
    console.log("Connecting to Twitter API");
    const client = await initializeTwitterClient();
    client.v2.tweet({ text: text });
    console.log("Tweeted!\n", text, "\n");
  } catch (error) {
    console.error("Error tweeting:", error);
  }
}

async function tweetRandomVerseV2(req, res) {
  try {
    const { bookname, chapter, verse, text } = await getRandomVerseV2("random");

    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    await postTweet(tweet);
    res.status(200).json({
      success: true,
      message: "Tweeted Random!",
    });
  } catch (error) {
    console.error("Error tweeting: ", error);
    res.status(400).json({
      success: false,
      message: error.meesage,
    });
  }
}

async function tweetVOTDV2(req, res) {
  try {
    const { bookname, chapter, verse, text } = await getRandomVerseV2("votd");

    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    await postTweet(tweet);
    res.status(200).json({
      success: true,
      message: "Tweeted Verse Of The Day 2",
    });
  } catch (error) {
    console.error("Error tweeting: ", error);
    res.status(400).json({
      success: false,
      message: error.meesage,
    });
  }
}
async function tweetRandomVerse(req, res) {
  try {
    const { reference, text } = await getRandomVerse("random");

    const tweet = `${text} - ${reference}`;
    await postTweet(tweet);

    res.status(200).json({
      success: true,
      message: "Tweeted Random",
    });
  } catch (error) {
    console.error("Error tweeting: ", error);
    res.status(400).json({
      success: false,
      message: error.meesage,
    });
  }
}

async function tweetVOTD(req, res) {
  try {
    const { reference, text } = await getRandomVerse("daily");
    const tweet = `${text} - ${reference}`;
    await postTweet(tweet);

    res.status(200).json({
      success: true,
      message: "Tweeted Verse Of The Day",
    });
  } catch (error) {
    console.error("Error tweeting: ", error);
    res.status(400).json({
      success: false,
      message: error.meesage,
    });
  }
}

module.exports = {
  tweetVOTD,
  tweetVOTDV2,
  tweetRandomVerse,
  tweetRandomVerseV2,
  postTweet,
};
