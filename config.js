//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ayprecious01@gmail.com";
global.location = "Osogbo,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2349159895444@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Prexzybooster/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c3367b00001035677cc6b.jpg";
global.devs = "2349159895444";
global.sudo = process.env.SUDO || "2349159895444";
global.owner = process.env.OWNER_NUMBER || "2349159895444";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c3367b00001035677cc6b.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01DaXhZT0loYTFHSU5qRWMvZzU1cEh4NnlJRkhtSjh4RlkweUJBL3VYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm1LMUVHbnFoZU9EM3RKMG9odUxGVnhqbkxUTUVFSVNjVTh5SFl1ZEJ5MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSkJiSnNpdzRHc0hQYmc5bHhtY0M4QTU5eVRpRlJkNUlJS1VlUlVmZUV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDYkEvQUNER1dvcXMxQ3NEM1ZlZ2U5R1dPY2E0ODFodmVIWElCSUdmNno4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNK0I1RVhtMVYyNjI2TlJOVUorSnZzeGd6eE8yUHNDRmdkaGdCZnNYMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlTdG5UZTNXclFadWxOeGxRQzFiNG5OZDczLzQwaEN6Ty8xdHN3MEt0bUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1AzdGVqRlk3NlBmUFZHM3plcEtmdHpzeFNFNFAvbzAzQXZZTGxkaUtFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieml3Z3ltcU8vQlBWWDBKY0lneWdOaS9qa1VNV3E0MGN1WEx4dXhWbmpqVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhsZzNnVmJEeUJueUkxVnBKdnZwQmVXU0l5ZEpKdXNVOXhBWlRiVCs1bGhNckRwTm9yTUNuUkpNUEpPaWtNdTRhbW1pWm5ORk9qOWtlTUFQN1VOb0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiI1eHRidWtKV2MrbThuL3pjS0dPVnVLRUE3bmtNYmJ2MFNYZE1mM2l3eUk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2S2RaMFZZQVJxMlFhMXZWWW1iR3FnIiwicGhvbmVJZCI6ImYzZTExNjBjLTdkYTMtNDI0MC1hODJlLTRmMDVjMTE2NTA2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4dVdFRGhGK1BZem9VNTNIVFQ4WWNkUWpWa3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5JcjhoZ0NvRWZ0YVUzTDJxNlZmR2hBSXk0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJQQ05DSEJWIiwibWUiOnsiaWQiOiIyMzQ5MTU5ODk1NDQ0OjQ0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSEgzMXdRL2Z5c3RBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsenhmcEIvK25sWHJtVlYyZEUvNEhBNWtxYndpVnFNbjJEcUsyMy9JWERVPSIsImFjY291bnRTaWduYXR1cmUiOiJYeEJ1ZGhLVkpNNCtXc1ZJQzlQNkswOHRmZ0RZcktMZ1dxNkYwT1JQbzd2R0pPYUVtZTR1UlN1Z2ZZbTFnc2ZBQ2x4SHR3VFlSRGRrY3lScTR3TVdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidHRsZkd5dlNsUDM1bEN2S2JVNXNyMVEwMG44a0R5dmlRVlFJUjR0akVjYjZuQUpFbmlBOUh2R1VUSVZveDRubjNLMXV5cXVJVEpoM1BER0NrK2x2RGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTU5ODk1NDQ0OjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpjOFg2UWYvcDVWNjVsVmRuUlArQndPWkttOElsYWpKOWc2aXR0L3lGdzEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0MDE1NDV9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "┣▇▇ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙿𝚁𝙴𝚇𝚉𝚈 ▇▇═─ 💦"
  author: process.env.PACK_AUTHER || "prexzy",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "PREXZY BOT",
  ownername: process.env.OWNER_NAME || "❝𝐏𝐑𝐄𝐂𝐈𝐎𝐔𝐒 𝐀𝐘𝐎𝐌𝐈𝐃𝐄 👑❞",
  errorChat: process.env.ERROR_CHAT || "2349159895444",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
