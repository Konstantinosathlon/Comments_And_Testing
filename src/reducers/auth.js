import { CHANG_AUTH } from "actions/types";

 export default function(state=false, action) {
     switch (action.type) {
         case CHANG_AUTH:
             return action.payload;
         default:
             return state;
     };
 }
 