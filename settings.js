const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === හේෂාන් ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=a6oFWZTA#b70PNHTCquw1wCA3tPsDZbWJXkl37OdoWnKFFZa6dUo' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === හේෂාන් ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};
