const Mastodon = require("mastodon-api");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const credential = {
    host: "stellaria.network",
    token: "xxx"
};

const M = new Mastodon({
    access_token: credential.token,
    api_url: `https://${credential.host}/api/v1/`
});

const filepath = getLatestFile("C:\\Users\\Eai\\webcam", "jpg");

M.post("media", { file: fs.createReadStream(filepath) }).then(resp => {
    const id = resp.data.id;
    M.post("statuses", {
        status: "#えあいさんちの今日のごはん",
        media_ids: [id]
    });
});

function getLatestFile(dir, ext) {
    let ws = path.resolve(dir);
    let fileList = glob.sync(`${ws}/**/*.${ext}`);
    const sortedFileList = fileList.sort(function(a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });

    return sortedFileList[0];
}
