import { MongoClient } from "mongodb";
import { getUrl } from "../utility/env";
const url=getUrl;
const client = new MongoClient(url);
const mongoCRUD={};
async function getdata(data={}) {
    let value=await client.connect();
    let dbvalue=value.db("rasa_log");
  let collection = dbvalue.collection('log_system');
  let result = await collection.find(data).toArray();
  client.close();
  return result;
}

async function setdata(data){
  let value=await client.connect();
    let dbvalue=value.db("rasa_log");
  let collection = dbvalue.collection('log_system');
  const insertResult = await collection.insertOne(data);
  client.close();
   return insertResult;

}
async function deletedata(data){
  let value=await client.connect();
    let dbvalue=value.db("rasa_log");
  let collection = dbvalue.collection('log_system');
  const insertResult = await collection.deleteOne(data);
  client.close();
    return insertResult;
}
async function updatedata(data){
  let value=await client.connect();
    let dbvalue=value.db("rasa_log");
  let collection = dbvalue.collection('log_system');
  const insertResult = await collection.updateOne(data);
  client.close()
    return insertResult;
}

async function aggregate(data){
  let value=await client.connect();
    let dbvalue=value.db("rasa_log");
  let collection = dbvalue.collection('log_system');
  const aggCursor = collection.aggregate(data);
  client.close()
    return aggCursor;
}

mongoCRUD.Find=getdata;
mongoCRUD.Insert=setdata;
mongoCRUD.Delete=deletedata;
mongoCRUD.Update=updatedata;
mongoCRUD.Aggregate=aggregate;

export{ mongoCRUD as default};
console.log(getdata());