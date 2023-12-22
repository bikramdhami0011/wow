/**
 * @format
 */
import {Provider} from "react-redux"
import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import PrStore from "./newcomp/shopRedux/Store"
const AppRedux=()=>{
     return <Provider store={PrStore}>
      <App/>
     </Provider>
}

AppRegistry.registerComponent(appName, () => AppRedux);
