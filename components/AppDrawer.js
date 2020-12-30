import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import Sidebarmenu from './SidebarMenu'

export const AppDrawer = createDrawerNavigator(
    {
        Home: { screen: AppTabNavigator },
    },
    {
        initialRouteName: 'Home'
    },
    {
        contentComponent: Sidebarmenu
    }

)