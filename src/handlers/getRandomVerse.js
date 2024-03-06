const axios = require("axios");

const getRandomVerse = async (param) => {
  const axiosConfig = {
    url: `https://beta.ourmanna.com/api/v1/get?format=json&order=${param}`, //random or daily
    method: "get",
    headers: { accept: "application/json" },
  };
  try {
    const response = await axios(axiosConfig);
    return response.data.verse.details;
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
};

async function getRandomVerseV2(param) {
  const axiosConfig = {
    url: `https://labs.bible.org/api/?passage=${param}&type=json`, //votd or random
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
    console.error(error)
    throw new Error(error)
  }
}

module.exports = { getRandomVerse, getRandomVerseV2 };
