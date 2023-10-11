/**
 * @format
 */
import {Provider} from "react-redux"
import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import { Stores } from "./component/Redux/Store";
const AppRedux=()=>{
     return <Provider store={Stores}>
      <App/>
     </Provider>
}

AppRegistry.registerComponent(appName, () => AppRedux);
