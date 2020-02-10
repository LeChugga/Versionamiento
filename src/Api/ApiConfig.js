import axios from "axios";
import * as Routes from "./ApiRutas";

// --- Constantes con la ruta

const CONFIG = Routes.ROUTES.CONFIG;
    console.log(CONFIG)
/***
 * @desc : Get Config
 *  
 */

 function getConfig(){
     return axios.get(CONFIG)
     .then(res => res.data)
     .catch(err => err)
 }

 export {
     getConfig
 }