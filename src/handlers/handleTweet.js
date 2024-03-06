const initializeTwitterClient = require("../config/twitter.config");
const { getRandomVerse, getRandomVerseV2 } = require("./getRandomVerse");

async function postTweet(text) {
  try {
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

    postTweet(tweet);
    res.status(200).json({
      success: true,
      message: "Tweeted",
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
    const client = await initializeTwitterClient();
    const { bookname, chapter, verse, text } = await getRandomVerseV2("votd");

    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    postTweet(tweet);
    res.status(200).json({
      success: true,
      message: "Tweeted",
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
    const client = await initializeTwitterClient();
    const { reference, text } = await getRandomVerse("random");

    const tweet = `${text} - ${reference}`;
    postTweet(tweet);

    res.status(200).json({
      success: true,
      message: "Tweeted",
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
    const client = await initializeTwitterClient();
    const { reference, text } = await getRandomVerse("daily");
    const tweet = `${text} - ${reference}`;
    postTweet(tweet);

    client.v2.tweet({ text: tweet });
    res.status(200).json({
      success: true,
      message: "Tweeted",
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
