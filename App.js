import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loginscreen from './screens/loginscreen';
import Bookdonate from './screens/bookdonate';
import { AppDrawer } from './components/AppDrawer';

export default class App extends React.Component {
  render() {
    return (
        <Appcontainer />
    );
  }

}

const Switch = createSwitchNavigator({
  Loginscreen: {screen: Loginscreen},
  //Bookdonate: {screen: Bookdonate}
  AppDrawer: {screen: AppDrawer}
})

const Appcontainer = createAppContainer(Switch);

