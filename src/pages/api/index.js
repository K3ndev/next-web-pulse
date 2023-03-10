// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PerfLeaderboard from 'performance-leaderboard';

// i dunno if is this safe hahaha, for now we need to limit the request
const API_KEY = '1djnewjnk32jndew';

export default async function handler(req, res) {
  const { url, key } = req.query;
  // sample request
  // localhost:3000/api?url=https://www.google.com,https://www.facebook.com/&key=1djnewjnk32jndew

  // Check API key
  if (key !== API_KEY) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // checker
  if (url === undefined) {
    res.status(400).json({ error: 'Bad Request' });
    return;
  }

  const URLS = url.split(',');
  // console.log(URLS);
  const options = {
    axePuppeteerTimeout: 30000, // 30 seconds
    writeLogs: true, // Store audit data
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
    // const urls = ['https://www.google.com'];
    const results = await PerfLeaderboard(URLS, 3, options);
    res.status(200).json(results);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'Error occurred while running tests' });
  }
}

// url
// url need to have https://

// todo, how to limit request ?
// - [X] having a key authentication?
// -- does it leak in request time?

// todo generate a report of data
// - screenshot?
