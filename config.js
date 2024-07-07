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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_53_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYRlQyOGxLVi9HeUdkRnduYk94ZGpUY1cya3FzTEhoQTZseEFmOTY4ZzZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtdldXVGZJdVEtYUplWHVhSlhnNVlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxNjFlOWUwLTA3NzUtNDRjNS04ZjEwLTNiODAwMjU3ODUwNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDE2OSxcbiAgICAgIDIyMCxcbiAgICAgIDg3LFxuICAgICAgMjQzLFxuICAgICAgMjM4LFxuICAgICAgMTQ4LFxuICAgICAgMTA5LFxuICAgICAgMjExLFxuICAgICAgMjMzLFxuICAgICAgMTQwLFxuICAgICAgMTI4LFxuICAgICAgMjQzLFxuICAgICAgMTg2LFxuICAgICAgMixcbiAgICAgIDMyLFxuICAgICAgMTIxLFxuICAgICAgMTEsXG4gICAgICAzNCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxNTYsXG4gICAgICAxNDMsXG4gICAgICAxOTgsXG4gICAgICA1NixcbiAgICAgIDQ4LFxuICAgICAgMTI5LFxuICAgICAgMjEyLFxuICAgICAgMTg0LFxuICAgICAgMixcbiAgICAgIDcwLFxuICAgICAgMTA3LFxuICAgICAgMTY0LFxuICAgICAgMCxcbiAgICAgIDIwMixcbiAgICAgIDgzLFxuICAgICAgMTQwLFxuICAgICAgNSxcbiAgICAgIDEyNixcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDRVNUUzlLRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NzEyMzk1MDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTA1ODA5Nzc3NzA3MTY6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pTOWYwQ0VQelVyTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDM3BXS0UwNzlBK2k0NndVS3RDSzh3Vm9ic2FPbDd6Nll6Mm04TjJSVlhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjUvMmdCQWJ4VmlkS1J1MGlhSndNblJVV2l6VWd3dTBVNng5NVBuY1Q5ZlNLVlpPZTNlYis5SEpIcFdlazZyZU9qNXgwaTBZV1RzOWNGN05zcWdjckRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlF0TUFqbFQzU3Vpc1RNWGtYZktaZytSS3dTM05rQmhOL01wUndidkdyTVUrUStQNmk3UkFjQTJvSFJvb2E2ZmJhMGNYQTlPSWx0ZjE2alJucGE2Y0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjcxMjM5NTA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM5NjQxNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
