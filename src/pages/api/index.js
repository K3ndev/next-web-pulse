// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PerfLeaderboard from 'performance-leaderboard';

// sample request
// localhost:3000/api?url=https://www.google.com,https://www.facebook.com
// it should have https://

export default async function handler(req, res) {
  const { url, db } = req.query;

  const URLS = () => {
    return url.split(',');
  };
  const checkerUrl = () => {
    return URLS().some((item) => {
      return !item.startsWith('http://') && !item.startsWith('https://');
    });
  };

  // checker
  if (url === undefined) {
    res.status(400).json({ error: 'Bad Request: url parameter is missing' });
    return;
  }
  if (checkerUrl() === true) {
    res
      .status(400)
      .json({ error: 'Bad Request: it should have https or http' });
    return;
  }
  if (db === 'true') {
    // console.log('connect database');
  }

  const options = {
    axePuppeteerTimeout: 30000, // 30 seconds
    writeLogs: false, // Store audit data
    logDirectory: '.log', // Default audit data files stored at `.log`
    readFromLogDirectory: false, // Skip tests with existing logs
    // onlyCategories: ["performance", "accessibility"],
    chromeFlags: ['--headless'],
    freshChrome: 'site', // or "run"
    launchOptions: {}, // Puppeteer launch options
  };
  // this line code, is just delaying 10 sec, so instead of wrapping the try{} by setTimeout we can use Promise
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const results = await PerfLeaderboard(URLS(), 3, options);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error occurred while running tests' });
  }
}
