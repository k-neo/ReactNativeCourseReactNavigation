import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './screens/Main'
import Push from './screens/Push'
import Modal from './screens/Modal'

const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main },
    Push: { screen: Push },
  },
  {initialRouteName: 'Main', headerMode: 'none'}
)
const NestNavigation = createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
    Modal: { screen: Modal },
  },
  {initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none'},
)
const AppContainer = createAppContainer(NestNavigation);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer
        ref = {nav => {this.navigator = nav;}}
      />
    );
  }
}