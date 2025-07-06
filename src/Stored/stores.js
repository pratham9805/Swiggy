

import { configureStore } from "@reduxjs/toolkit";
import restReducer from "./restSlice";
import CartReducer from "./Cartslicer"
import restmenureducer from "./restmenuslice";
 export const store = configureStore({
    reducer:{
    slice1:CartReducer,
     restaurants: restReducer,
     menuslice:restmenureducer
    }
})