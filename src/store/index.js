import { configureStore } from "@reduxjs/toolkit";

import navbarSlice from "./navbar-slice";

const store = configureStore({
    reducer: {
        navbar: navbarSlice.reducer
    }
})
export default store;