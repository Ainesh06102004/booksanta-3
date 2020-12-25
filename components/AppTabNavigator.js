import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bookdonate from '../screens/bookdonate';
import Bookrequest from '../screens/bookrequest';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const BottomTab = createBottomTabNavigator({
    Bookrequest: { screen: Bookrequest, navigationOptions: { tabBarLabel: "Request Books" } },
    Bookdonate: { screen: Bookdonate, navigationOptions: { tabBarLabel: "Donate Books" } }
})