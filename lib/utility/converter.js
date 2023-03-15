function date() {
    let date = new Date().toLocaleString()
    date = date.split(", ");
    let dt = date[0].split("/")
    let pm = (date[1].split(":")[2].split(" ")[1])=="PM" ? true : false;
    let tm=date[1].split(":")
    if(pm){
        if(tm[0]!="12"){
            tm[0]=(parseInt(tm[0])+12).toString();
        }
    }
    const fulldate = dt[0] + "-" + dt[1] + "-" + dt[2] + "_"+tm[0]+ "-" +tm[1]+ "-" +tm[2].split(" ")[0];
    return fulldate;
}
export default date;