const initializeTwitterClient = require("./src/config/twitter.config");
const { getRandomVerseV2 } = require("./src/handlers/getRandomVerse");

const client = initializeTwitterClient();

async function tweetVerse() {
  try {
    const { bookname, chapter, verse, text } = await getRandomVerseV2();
    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    client.v2.tweet({ text: tweet });

    console.log(tweet);
  } catch (error) {
    console.log(error.message);
  }
}

tweetVerse();

setInterval(tweetVerse, 10000);
