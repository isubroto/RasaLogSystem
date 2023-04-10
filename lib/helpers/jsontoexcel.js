import xlxs from 'xlsx';
import date from '../utility/converter.js';
const jsonxlsx={};
/**
 * 
 * @param {JSON} data To create excel file
 * @param {string} path Path to save file
 * @returns {string} Returns File Path
 */
jsonxlsx.convertJsonToXlsx=(data,path=null)=>{
    if (path!=null){
        path=path+'/';
    }
    const worksheet=xlxs.utils.json_to_sheet(data);
    const workbook=xlxs.utils.book_new();
    xlxs.utils.book_append_sheet(workbook,worksheet,'log_data');
    xlxs.write(workbook,{bookType:"xlsx",type:"buffer"});
    xlxs.write(workbook,{bookType:"xlsx",type:"binary"});
    const file = path+"bot_log_"+date()+".xlsx"
    xlxs.writeFile(workbook,file);
    return file;
}
export default jsonxlsx;