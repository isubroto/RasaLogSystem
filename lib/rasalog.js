import {setUrl} from "./utility/env.js";
import mongoCRUD from "./helpers/mongodb.js"
import botlog from "./helpers/rasabot.js";
import jsonxlsx from './helpers/jsontoexcel.js';
const rasa_log ={};
/**
 * 
 * @param {JSON} data find value
 * @returns 
 */
rasa_log.Find=async (data={})=>{
    let dt= await mongoCRUD.Find(data);
    return dt;
  };
  /**
   * 
   * @param {JSON} data insert value
   * @returns 
   */
rasa_log.Insert=async(data)=>{
    const dt=await mongoCRUD.Insert(data)
    if(dt.acknowledged){
        return true;
    }
    else throw console.error;
};
/**
 * 
 * @param {JSON} data update data
 * @returns 
 */
rasa_log.Update=async(data)=>{
    const dt=await mongoCRUD.Update(data)
    if(dt.acknowledged){
        return true;
    }
    else throw console.error;
};
/**
 * 
 * @param {JSON} data  Delete
 * @returns 
 */
rasa_log.Delete=async(data)=>{
    const dt=await mongoCRUD.Delete(data)
    if(dt.acknowledged){
        return true;
    }
    else throw console.error;
};
rasa_log.create=(message,callback)=>{
    botlog.create(message,response=>{
        try{
            rasa_log.Insert(response);
            callback({message:"log created successfully"});
        }catch{
            callback({message:"Log not created"})
        }

    })};
rasa_log.Aggregate=mongoCRUD.Aggregate;
rasa_log.databaseUrl=setUrl;
rasa_log.botUrl=botlog.baseUrl;
rasa_log.export=jsonxlsx.convertJsonToXlsx;



export default rasa_log;