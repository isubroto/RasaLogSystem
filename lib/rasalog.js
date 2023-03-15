import {setUrl} from "./utility/env.js";
import mongoCRUD from "./helpers/mongodb.js"
import botlog from "./helpers/rasabot.js";
import jsonxlsx from './helpers/jsontoexcel.js';
const rasa_log ={};

rasa_log.Find=async (data={})=>{
    let dt= await mongoCRUD.Find(data);
    return dt;
  };
rasa_log.Insert=async(data)=>{
    const dt=await mongoCRUD.Insert(data)
    if(dt.acknowledged){
        return true;
    }
    else throw console.error;
};
rasa_log.Update=async(data)=>{
    const dt=await mongoCRUD.Update(data)
    if(dt.acknowledged){
        return true;
    }
    else throw console.error;
};
rasa_log.Delete=async(data)=>{
    const dt=await mongoCRUD.Delete(data)
    if(dt.acknowledged){
        return true;
    }
    else throw console.error;
};
rasa_log.Aggregate=mongoCRUD.Aggregate;
rasa_log.databaseUrl=setUrl;
rasa_log.botUrl=botlog.baseUrl;
rasa_log.create=botlog.create;
rasa_log.export=jsonxlsx.convertJsonToXlsx;



export default rasa_log;