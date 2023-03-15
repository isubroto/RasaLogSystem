import log from './lib/rasalog.js';

const rasa_log={};
rasa_log.DB={};
rasa_log.BOT={};
rasa_log.DB.Find=log.Find;
rasa_log.DB.Insertlog.Insert;
rasa_log.DB.Update=log.Update;
rasa_log.DB.Delete=log.Delete;
rasa_log.DB.Aggregate=log.Aggregate;
rasa_log.DB.Url=log.databaseUrl;
rasa_log.BOT.botUrl=log.baseUrl;
rasa_log.CreateLog=log.create;
rasa_log.Export=log.export;



log.botUrl('http://128.199.201.218:5500');
log.databaseUrl("mongodb://root:password@localhost:27017");
log.create("apac",res=>{
  log.Insert(res);
});
let data= await log.Find();
console.log(data);
log.export(data);

export default rasa_log;