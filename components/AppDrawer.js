import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import Sidebarmenu from './SidebarMenu'
import Settingscreen from '../screens/settingscreen';



export const AppDrawer = createDrawerNavigator(
    {
        Home: { screen: AppTabNavigator },
        Settings: { screen: Settingscreen },
    },
    {
        contentComponent: Sidebarmenu
    },
    {
        initialRouteName: 'Home'
    },


)