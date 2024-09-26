const fs = require('fs');
const { google } = require('googleapis');

const channelId = 'UCPJXhXRkeSXngqwHo2PkncQ';

require('dotenv').config();

async function generateLiveJson() {

    const youtube = google.youtube({
        version: 'v3',
        auth: process.env.GOOGLE_AUTH_KEY,
    });

    const mappedVideos = await generateVideos(youtube);
    const mappedPlayLists = await generatePlaylist(youtube);

    let fullJson = {
        videoCards: mappedVideos,
        playlistCards: mappedPlayLists,
    };

    fs.writeFile('./webpack/data/live.json', JSON.stringify(fullJson), ['utf8'], () => { });
}

async function generateVideos(youtube) {
    const videoResp = await youtube.search.list({
        part: 'id,snippet',
        channelId: channelId,
        order: 'date',
        type: 'video',
        maxResults: 4,
    });

    const mappedVideos = [];
    for (let vIndex = 0; vIndex < videoResp.data.items.length; vIndex++) {
        const video = videoResp.data.items[vIndex];
        // console.log(video.snippet);
        const thumbnail = video.snippet.thumbnails.standard ??
            video.snippet.thumbnails.high ??
            video.snippet.thumbnails.maxres;
        const title = (video.snippet?.title ?? '').replace('&#39;', '\'');
        const descrip = (video.snippet?.description ?? '').substring(0, 100).trim().replace('&#39;', '\'');
        mappedVideos.push({
            link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
            imgUrl: thumbnail?.url,
            title,
            descrip: descrip + '...',
        });
    }
    return mappedVideos;
}

async function generatePlaylist(youtube) {
    const playlistResp = await youtube.playlists.list({
        part: 'id,snippet',
        channelId: channelId,
        maxResults: 4,
    });

    const mappedPlayLists = [];
    for (let plIndex = 0; plIndex < playlistResp.data.items.length; plIndex++) {
        const playList = playlistResp.data.items[plIndex];
        // console.log(playList.snippet);
        const thumbnail = playList.snippet.thumbnails.standard ??
            playList.snippet.thumbnails.high ??
            playList.snippet.thumbnails.maxres;
        const title = (playList.snippet?.title ?? '').replace('&#39;', '\'');
        const descrip = (playList.snippet?.description ?? '').substring(0, 100).trim().replace('&#39;', '\'');
        mappedPlayLists.push({
            link: `https://www.youtube.com/playlist?list=${playList.id}`,
            imgUrl: thumbnail?.url,
            title,
            descrip: descrip + '...',
        });
    }
    return mappedPlayLists;
}

generateLiveJson();