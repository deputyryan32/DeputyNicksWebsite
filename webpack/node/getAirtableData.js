const fs = require('fs');
const util = require('util');
const Airtable = require('airtable');
const axios = require('axios');

const readFile = util.promisify(fs.readFile);

require('dotenv').config();

const tables = {
    Expeditions: {
        name: 'Expedition Leaderboard',
        view: 'VisibleExpeditions',
        json: 'expeditions.json',
        records: [
            {
                source: 'ExpId',
                target: 'expId',
            },
            {
                source: 'Name',
                target: 'name',
            },
            {
                source: 'Image',
                target: 'imageUrl',
                mapping: (v) => v?.[0]?.url ?? '',
            },
            {
                source: 'IsDisabled',
                target: 'isDisabled',
            },
        ]
    },
    ExpeditionsTimes: {
        name: 'Expedition Leaderboard Times',
        view: 'VisibleExpeditionTimes',
        json: 'expeditionTimes.json',
        records: [
            {
                source: 'Name',
                target: 'name',
            },
            {
                source: 'Icon',
                target: 'icon',
                mapping: (v) => v?.[0]?.url ?? '',
            },
            {
                source: 'Time',
                target: 'time',
            },
            {
                source: 'Link',
                target: 'link',
            },
            {
                source: 'Expedition',
                target: 'expeditionId',
                mapping: (v) => v?.[0] ?? '',
            },
        ]
    },
};

function getLeaderboardJsonFromAirtableTable(base, currentTable) {
    return new Promise((resolve, reject) => {
        const allItems = [];
        base(currentTable.name).select({
            view: currentTable.view
        }).eachPage(function page(records, fetchNextPage) {

            records.forEach(function (record) {
                let obj = {
                    id: record.id,
                };
                for (const rec of currentTable?.records ?? []) {
                    let value;
                    if (rec.mapping != null) {
                        value = rec.mapping(record.get(rec.source));
                    } else {
                        value = record.get(rec.source);
                    }
                    try {
                        obj[rec.target] = value;
                    } catch (ex) {
                        console.log(ex);
                    }
                }
                allItems.push(obj);
            });
            fetchNextPage();
        }, function done(err) {
            if (err) {
                console.error({ err });
                return;
            }

            console.log('write file ' + allItems.length);
            allItems.sort((a, b) => {
                if (a.expId > b.expId) {
                    return -1;
                }
                if (a.expId < b.expId) {
                    return 1;
                }
                return 0;
            });
            fs.writeFile(`./webpack/data/${currentTable.json}`, JSON.stringify(allItems), ['utf8'], () => { });
            resolve();
        });
    });
}

async function getLeaderboardJsonFromAirtable() {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appppA3jFjHPZdcLl');

    const tableKeys = Object.keys(tables);
    for (let tableIndex = 0; tableIndex < tableKeys.length; tableIndex++) {
        const tableKey = tableKeys[tableIndex];
        const currentTable = tables[tableKey];

        await getLeaderboardJsonFromAirtableTable(base, currentTable);
    }
}


async function generateLeaderboardJsonFromAirtableJson() {
    const expeditionFile = `./webpack/data/${tables.Expeditions.json}`;
    const expeditionsString = await readFile(expeditionFile, 'utf8');
    const expeditionsData = JSON.parse(expeditionsString);

    const expeditionTimesFile = `./webpack/data/${tables.ExpeditionsTimes.json}`;
    const expeditionTimesString = await readFile(expeditionTimesFile, 'utf8');
    const expeditionTimesData = JSON.parse(expeditionTimesString);

    const resultArr = [];
    for (const expedition of expeditionsData) {
        const timesForExp = expeditionTimesData.filter(time => time.expeditionId == expedition.id);

        const newObj = await downloadImagesFromAirtableObject({ ...expedition, times: timesForExp });
        resultArr.push(newObj);
    }
    fs.writeFile(`./webpack/data/leaderboards.json`, JSON.stringify(resultArr), ['utf8'], () => { });

    fs.unlink(expeditionFile, () => { });
    fs.unlink(expeditionTimesFile, () => { });
}


async function downloadImagesFromAirtableObject(obj) {
    const baseRelToRootPath = '/assets/img/exp/{0}.png';
    const physicalPath = './assets/img/exp/{1}.png';

    const rowId = obj.expId ?? obj.id;

    try {
        await downloadImage(obj.imageUrl, physicalPath.replace('{1}', rowId));
        obj.imageUrl = baseRelToRootPath.replace('{0}', rowId);

        for (let timeIndex = 0; timeIndex < obj.times.length; timeIndex++) {
            const time = obj.times[timeIndex];
            await downloadImage(time.icon, physicalPath.replace('{1}', time.id));
            obj.times[timeIndex].icon = baseRelToRootPath.replace('{0}', time.id);
        }

    } catch (e) {
        console.log(e);
    }

    return obj;
}

async function downloadImage(url, image_path) {
    const writer = fs.createWriteStream(image_path)

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
};

async function orchastration() {
    await getLeaderboardJsonFromAirtable();
    await generateLeaderboardJsonFromAirtableJson();
}

orchastration();