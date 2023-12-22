import Reducer from "./Slice"
const { configureStore } = require("@reduxjs/toolkit");

const PrStore=configureStore({reducer:Reducer});
export default PrStore;