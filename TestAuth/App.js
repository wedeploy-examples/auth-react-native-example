/**
 * Todo React Native App using WeDeploy's Data service
 * @flow
 */

import {
  StackNavigator
} from 'react-navigation';

import SignIn from './pages/signin';

const App = StackNavigator({
  SignIn: { screen: SignIn },
});

export default App;
