const initializeTwitterClient = require("./src/config/twitter.config");
const {
  getRandomVerse,
  getRandomVerseV2,
} = require("./src/handlers/getRandomVerse");

async function postTweet(text) {
  try {
    const client = await initializeTwitterClient();
    client.v2.tweet({ text: text });
    console.log("Tweeted!\n", text, "\n");
  } catch (error) {
    console.error("Error tweeting:", error);
  }
}

async function tweetRandomVerseV2() {
  try {
    const { bookname, chapter, verse, text } = await getRandomVerseV2("random");

    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    postTweet(tweet);
  } catch (error) {
    console.error("Error tweeting:", error);
  }
}

async function tweetVOTDV2() {
  try {
    const client = await initializeTwitterClient();
    const { bookname, chapter, verse, text } = await getRandomVerseV2("votd");

    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    client.v2.tweet({ text: tweet });
  } catch (error) {
    console.error("Error tweeting:", error);
  }
}

async function tweetRandomVerse() {
  try {
    const client = await initializeTwitterClient();
    const { reference, text } = await getRandomVerse("random");

    const tweet = `${text} - ${reference}`;
    console.log("Tweeted!\n", tweet, "\n");

    client.v2.tweet({ text: tweet });
  } catch (error) {
    console.error("Error tweeting: ", error);
  }
}

async function tweetVOTD() {
  try {
    const client = await initializeTwitterClient();
    const { reference, text } = await getRandomVerse("daily");
    const tweet = `${text} - ${reference}`;
    console.log("Tweet Of The Day\n", tweet, "\n");

    client.v2.tweet({ text: tweet });
  } catch (error) {
    console.error("Error tweeting:", error);
  }
}

module.exports = {
  tweetVOTD,
  tweetVOTDV2,
  tweetRandomVerse,
  tweetRandomVerseV2,
  postTweet,
};
