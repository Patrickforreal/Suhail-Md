const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2347067123950";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_44_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUmQxR3p1T0h5Vm44ZFEwMmJYdGFPZjZGQkpEU0RLamYzQXdUYlJPLzJrbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSHU3alk1X19Uc2VpY3BsTjRCNnN4UVwiLFxuICBcInBob25lSWRcIjogXCI2OWNhMWEzZC1iNDlkLTQyODEtOTVlYy01MDI3MGU0YzJjY2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAzLFxuICAgICAgMTg4LFxuICAgICAgMjM0LFxuICAgICAgMjIyLFxuICAgICAgMjQzLFxuICAgICAgMTQxLFxuICAgICAgMTAwLFxuICAgICAgNzMsXG4gICAgICAyMTcsXG4gICAgICAxOTAsXG4gICAgICAxMzUsXG4gICAgICA2NixcbiAgICAgIDkyLFxuICAgICAgMjI4LFxuICAgICAgMjEwLFxuICAgICAgMTQxLFxuICAgICAgMjIzLFxuICAgICAgMjUsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDEwLFxuICAgICAgOTEsXG4gICAgICAxNCxcbiAgICAgIDExNSxcbiAgICAgIDIzNCxcbiAgICAgIDQsXG4gICAgICAxOTEsXG4gICAgICA2NyxcbiAgICAgIDM2LFxuICAgICAgNzQsXG4gICAgICAxNTksXG4gICAgICAyMzEsXG4gICAgICAyNDEsXG4gICAgICAxMzQsXG4gICAgICA0MCxcbiAgICAgIDE5OCxcbiAgICAgIDIxNyxcbiAgICAgIDIwMCxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFNDREQ0pHQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NzEyMzk1MDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTA1ODA5Nzc3NzA3MTY6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1RTOWYwQ0VKN1pwclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDM3BXS0UwNzlBK2k0NndVS3RDSzh3Vm9ic2FPbDd6Nll6Mm04TjJSVlhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlVQVZjQTBMOU5aWmxoOHdQSXBtMW12bG5HSHpFZGkwaDJTQzRtV2JOdklVdEJxM1ZTeVJiV3ZWQVVtOStNbmsrN2ZCdVM3NHRXRC96UkVjY29DNUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxaYXp1TCtjTUV5cmFuTCtiR2dXelZDSXJva2wyRkpJdHZHSlVGM2xoVGdad0c2eHg1elZBUSswcEdkVndYVnhqbUh6WGVMb2UrZ2puOENCY1BKYkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjcxMjM5NTA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI5ODY1OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
