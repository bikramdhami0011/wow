import {configureStore} from "@reduxjs/toolkit"
import reducer from "./Slice"
import createSagaMiddleWare from "redux-saga"
import SagaMd from "./Saga";
const sagamiddleware=createSagaMiddleWare();
export const Stores=configureStore({
    reducer,
    middleware:()=>[sagamiddleware],

})
sagamiddleware.run(SagaMd);