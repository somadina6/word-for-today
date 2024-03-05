const initializeTwitterClient = require("./src/config/twitter.config");
const {
  getRandomVerse,
  getRandomVerseV2,
} = require("./src/handlers/getRandomVerse");

async function tweetRandomVerseV2() {
  try {
    const client = await initializeTwitterClient();
    const { bookname, chapter, verse, text } = await getRandomVerseV2("random");

    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    console.log(tweet);

    client.v2.tweet({ text: tweet });
  } catch (error) {
    console.log(error.message);
  }
}

async function tweetVOTDV2() {
  try {
    const client = await initializeTwitterClient();
    const { bookname, chapter, verse, text } = await getRandomVerseV2("votd");

    const tweet = `${text} - ${bookname} ${chapter}:${verse}`;

    console.log("Tweet Of The Day V2\n", tweet);

    client.v2.tweet({ text: tweet });
  } catch (error) {
    console.log(error.message);
  }
}

async function tweetRandomVerse() {
  try {
    const client = await initializeTwitterClient();
    const { reference, text } = await getRandomVerse("random");

    const tweet = `${text} - ${reference}`;
    console.log(tweet);

    client.v2.tweet({ text: tweet });
  } catch (error) {
    console.log(error.message);
  }
}

async function tweetVOTD() {
  try {
    const client = await initializeTwitterClient();
    const { reference, text } = await getRandomVerse("daily");
    const tweet = `${text} - ${reference}`;
    console.log("Tweet Of The Day\n", tweet);

    client.v2.tweet({ text: tweet });
  } catch (error) {
    console.log(error.message);
  }
}

// tweetVOTD();
// tweetVOTDV2();
// tweetRandomVerse();
// tweetRandomVerseV2();

// Calculate the current date
const currentDate = new Date();

// Calculate the milliseconds until the next desired time for each function to run
// For demonstration purposes, let's say you want each function to run at different times of the day
// Adjust these values according to your desired times
let delayVOTD =
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    8,
    0,
    0,
    0
  ) - currentDate; // 8:00 AM
let delayVOTDV2 =
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    12,
    0,
    0,
    0
  ) - currentDate; // 12:00 PM
let delayRandomVerse =
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    16,
    0,
    0,
    0
  ) - currentDate; // 4:00 PM
let delayRandomVerseV2 =
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    20,
    0,
    0,
    0
  ) - currentDate; // 8:00 PM
// Adjust the delays if they are negative
if (delayVOTD < 0) delayVOTD += 86400000; // Add 24 hours in milliseconds
if (delayVOTDV2 < 0) delayVOTDV2 += 86400000;
if (delayRandomVerse < 0) delayRandomVerse += 86400000;
if (delayRandomVerseV2 < 0) delayRandomVerseV2 += 86400000;
console.log(delayRandomVerse, delayRandomVerseV2, delayVOTD, delayVOTDV2);
// Set intervals for each function with different delays
setTimeout(() => {
  tweetVOTD();
  setInterval(tweetVOTD, 86400000); // Repeat every 24 hours
}, 0);

setTimeout(() => {
  tweetVOTDV2();
  setInterval(tweetVOTDV2, 86400000); // Repeat every 24 hours
}, delayVOTDV2);

setTimeout(() => {
  tweetRandomVerse();
  setInterval(tweetRandomVerse, 86400000 / 12); // Repeat every 24/12 hours
}, delayRandomVerse);

setTimeout(() => {
  tweetRandomVerseV2();
  setInterval(tweetRandomVerseV2, 86400000 / 12); // Repeat every 24/12 hours
}, delayRandomVerseV2);

// setInterval(tweetRandomVerse, 10000);
