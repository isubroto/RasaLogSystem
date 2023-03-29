import xlxs from 'xlsx';
import date from '../utility/converter.js';
const jsonxlsx={};
/**
 * 
 * @param {JSON} data To create excel file
 * @param {string} path Path to save file
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
    xlxs.writeFile(workbook,path+"bot_log_"+date()+".xlsx");
}
export default jsonxlsx;