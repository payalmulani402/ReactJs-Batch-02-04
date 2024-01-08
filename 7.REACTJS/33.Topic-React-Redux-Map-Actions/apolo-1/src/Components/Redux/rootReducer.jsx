import { combineReducers } from "redux";
import { CakeReducer } from "./Cake/CakeReducer";
import { IceCreamReducer } from "./IceCream/IceCreamReducer";

const rootReducer = combineReducers({
     cake : CakeReducer,
     iceCream : IceCreamReducer
})

export default rootReducer