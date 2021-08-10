import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Linking } from 'react-native'

AppRegistry.registerComponent(appName, () => App);

