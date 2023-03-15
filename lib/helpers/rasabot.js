import rasa from 'rasajs';
import date from '../utility/converter.js';
const botlog= {};
botlog.baseUrl = rasa.baseUrl;
botlog.create =(message,callback)=>{
    rasa.sendMessage(message,res=>{
        rasa.parseModel(message,res2=>{
            callback({
                text:res.text,
                reply:res.reply,
                intentName:res2.intentName,
                intentConfidence:(res2.intentConfidence).toString(),
                intentId:(res2.intentId).toString(),
                time:date()
            });
        })
    });
}

export default botlog;