import log from './lib/rasalog.js';

const rasa_log={};
rasa_log.DB={};
rasa_log.BOT={};
rasa_log.DB.Url=log.databaseUrl;
rasa_log.BOT.Url=log.botUrl;
rasa_log.CreateLog=log.create;
rasa_log.GetLog=log.Find;
rasa_log.Export=log.export;

export default rasa_log;