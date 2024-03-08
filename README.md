# Daily Bible Verse Twitter Bot

## Overview

This is a Twitter bot that posts daily inspirational Bible verses to Twitter. The bot is deployed as a Serverless Function on Vercel and is implemented using Express.js. It provides endpoints to post the verse of the day or a random verse.

## Features

- Posts daily inspirational Bible verses to Twitter.
- Offers endpoints to retrieve the verse of the day or a random verse.
- Deployed as a Serverless Function on Vercel for scalability and ease of deployment.

## Usage

### Posting Daily Verses

To post the verse of the day, you can use the following endpoint:
```
GET /tweet/votd
```

This endpoint triggers the bot to fetch the verse of the day and post it to Twitter.

### Posting Random Verses

To post a random verse, you can use the following endpoint:
```
GET /tweet/random
```

This endpoint triggers the bot to fetch a random Bible verse and post it to Twitter.

## Deployment

1. Clone this repository:
```
git clone https://github.com/somadina6/word-for-today.git
```

2. Install dependencies:
```
cd word-for-today
npm i
```

3. Set up your Twitter API credentials as environment variables

4. Deploy the bot to Vercel:

```
vercel
```

5. Once deployed, your bot will be live and ready to post daily Bible verses to Twitter!

## Contributors

- Somadina Eze (https://github.com/somadina6) - Creator

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.










