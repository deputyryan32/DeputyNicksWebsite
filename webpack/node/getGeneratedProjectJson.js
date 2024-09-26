const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function generateFullJson() {
    let fullJson = {};

    const siteDataContentsPromise = readFile('./webpack/data/site.json', 'utf8');
    const liveDataContentsPromise = readFile('./webpack/data/live.json', 'utf8');
    const leaderboardsContentsPromise = readFile('./webpack/data/leaderboards.json', 'utf8');

    const siteDataContents = await siteDataContentsPromise;
    const liveDataContents = await liveDataContentsPromise;
    const leaderboardsContents = await leaderboardsContentsPromise;

    const siteData = JSON.parse(siteDataContents);
    const liveData = JSON.parse(liveDataContents);
    const leaderboards = JSON.parse(leaderboardsContents);

    fullJson = { ...siteData, ...liveData, leaderboards: [...leaderboards] };

    fs.writeFile('./webpack/data/project.json', JSON.stringify(fullJson), ['utf8'], () => { });
}


generateFullJson();
