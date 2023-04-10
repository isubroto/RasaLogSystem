# Rasa Log System Using mongoDB and Nodejs

## Log System
A log system is a method for recording and storing information in a systematic way. In computing, a log system is often used to record events or actions that take place within a software application, operating system, or server. These logs may contain important information such as error messages, system performance metrics, or user activity data.

## Rasa Log
A log system for Rasa chat records would capture and store information about the conversations that take place between users and the Rasa chatbot. This would typically include the text of the messages exchanged, as well as metadata such as the time and date of the messages, the user ID or session ID, and any contextual information that may be relevant to the conversation.

A  log system for Rasa chat records would enable organizations to gain valuable insights into user behavior and preferences, and to optimize their chatbot performance and user experience.


## Setup
### Install
``` javascript
npm i rasalog
```
### import
```javascript
import log from 'rasalog';
```
### Initialize
```javascript
// rasa chatbot url
log.BOT.Url('localhost:5005');

// mongodb server url
log.DB.Url("mongodb://localhost:27017");
```
## Create a Log
```javascript
log.CreateLog("hi",replay=>{
    console.log(replay);
});
```
## Get Log report
```javascript
let data= await log.GetLog();
console.log(data)
```
### the data look like 
```json
{
    "_id": "new ObjectId('64117c30fb8c369001f153df')",
    "text": "hi",
    "reply": "Hey! How are you?",
    "intentName": "greet",
    "intentConfidence": "0.9996561408042908",
    "intentId": "473725467752341200",
    "time": "3-15-2023_14-05-04"
  }
```
## Export json in excel file
```javascript
// export data with path
log.Export(data,'Static');
```
