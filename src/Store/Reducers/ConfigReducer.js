/**
 * @author : Brayan Mauricio Monroy Fraile
 * @since : 09/02/2020
 * @desc : El reducer correspondiente al trabajo con el sotre de la condiguracion
 */

import { SET_CONFIG, SET_LOCAL_CONFIG} from './Actions/ActionsTypes';

export default (state = {}, action = {}) => {

   switch (action.type) {
      case SET_CONFIG:

         return action.payload || [];
         
      case SET_LOCAL_CONFIG:

         return action.payload || [];

      default:
         
      return state;
   }

};