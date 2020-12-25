import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loginscreen from './screens/loginscreen';
import Bookdonate from './screens/bookdonate';
import Bookrequest from './screens/bookrequest';
import { BottomTab } from './components/AppTabNavigator';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appcontainer />
      </View>
    );
  }

}

const Switch = createSwitchNavigator({
  Loginscreen: {screen: Loginscreen},
  BottomTab: {screen: BottomTab}
})

const Appcontainer = createAppContainer(Switch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

