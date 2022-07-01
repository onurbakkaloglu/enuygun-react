import { configureStore } from "@reduxjs/toolkit";
import  site  from "./site";
const store = configureStore({
    reducer: {
        site
    }
})

export default store