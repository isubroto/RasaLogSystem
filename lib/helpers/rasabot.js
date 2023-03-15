import rasa from 'rasajs';

const botlog= {};
botlog.init =(url,message,callback)=>{
    rasa.baseUrl(url);
    rasa.sendMessage(message,res=>{
        rasa.parseModel(message,res2=>{
            callback({
                text:res.text,
                reply:res.reply,
                intentName:res2.intentName,
                intentConfidence:res2.intentConfidence,
                intentId:res2.intentId
            });
        })
    });


}
export default botlog;