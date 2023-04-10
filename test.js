import log from './index.js';
log.BOT.Url("http://128.199.201.218:5500")
log.DB.Url("mongodb://root:password@localhost:27017")
log.CreateLog("hi",replay=>{
    console.log(replay);
});
const data=await log.GetLog();
console.log(data);