import { combineReducers } from "redux";
import {handleCartItems,countCardItems,handleApiData} from "./index";


const rootReducer=combineReducers({
    handleApiData,
    handleCartItems,
    countCardItems
})
export default rootReducer;