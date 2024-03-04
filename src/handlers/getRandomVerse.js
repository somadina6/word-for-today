const bibleApi = require("@bible-api/bible-api");
const axios = require("axios");

const getRandomVerse = async (props) => {
  try {
    const verse = await bibleApi.localVersions.kjv1769.getVerse({
      bookId: bibleApi.BookIdentifiers[props.BookIdentifiers],
      chapterNumber: props.chapterNumber,
      verseNumber: props.verseNumber,
    });

    return verse;
  } catch (error) {
    throw new Error("Verse does not exist");
  }
};

async function getRandomVerseV2() {
  const axiosConfig = {
    url: "https://labs.bible.org/api/?passage=random&type=json", //votd
    timeout: 1000,
    responseType: "text",
    transformResponse: (data) => {
      return JSON.parse(data)[0];
    },
  };

  try {
    const response = await axios(axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getRandomVerse, getRandomVerseV2 };
