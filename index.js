import log from './lib/rasalog.js';

const rasa_log={};
rasa_log.DB={};
rasa_log.BOT={};
rasa_log.DB.Url=log.databaseUrl;
rasa_log.BOT.Url=log.baseUrl;
rasa_log.CreateLog=log.create;
rasa_log.GetLog=log.Find;
rasa_log.Export=log.export;



log.botUrl('http://128.199.201.218:5500');
log.databaseUrl("mongodb://root:password@localhost:27017");
log.create("hi",res=>{
  log.Insert(res);
});
let data= await log.Find();
console.log(data);
//log.export(data);

export default rasa_log;