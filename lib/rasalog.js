import { setUrl } from "./utility/env";
import mongoCRUD from "./helpers/mongodb.js"
const rasa_log ={};

rasa_log.Find=mongoCRUD.Find;
rasa_log.Insert=mongoCRUD.Insert;
rasa_log.Update=mongoCRUD.Update;
rasa_log.Delete=mongoCRUD.Delete;
rasa_log.Aggregate=mongoCRUD.Aggregate;
rasa_log.setUrl=setUrl;




export default rasa_log;