import React from "react"; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';   
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthStackNavigator, DashboardStackNavigator } from "./StackNavigator";
import { DrawerContents } from './DrawerContents';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator 
            drawerContent={ props => <DrawerContents {...props} /> } 
            drawerType={dimensions.width >= 768  ? 'permanent' : 'front'}  
            drawerStyle={{ width: '75%' }}
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 },
              }}
        > 
       <Drawer.Screen name="Auth" component={AuthStackNavigator} />
       {/* <Drawer.Screen name="Dashboard" component={DashboardStackNavigator} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;