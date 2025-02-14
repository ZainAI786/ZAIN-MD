const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.ironman.my.id/i/ipmxt9.jpg"
    ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am Alive. Bot created by ⸙ 𝐌𝐑־ 𓆩«𝚭𝚫𝚰𝚴𔒝»ꜛ؜𓆪"
};
