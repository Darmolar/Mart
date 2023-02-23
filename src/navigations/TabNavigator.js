import React from "react"; 
import { Ionicons, AntDesign, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Dashboard Files
import HomeScreen from '../dashboard';
import saveScreen from '../save/save';
import myMoneyScreen from '../save/myMoney';
import settinsgScreen from '../profile/index'; 
 
import WalletScreen from '../wallet/index';
import InvestScreen from '../invest/index';
import PayAftaScreen from '../payAfta';
import NotificationScreen from '../notification';
import FaqScreen from '../faq';
import ReferScreen from '../refer';

import AftamaatVideoScreen from '../aftaVideo';
import videoShowcaseScreen from '../aftaVideo/showVideo';

import ContactScreen from '../contact';

import TabBar from './TabBar';

const Tab = createBottomTabNavigator();
const options = {
            activeTintColor: '#14234A',
            inactiveTintColor: '#94AFB6',
            activeBackgroundColor: '#14234A',
            inactiveBackgroundColor: '#94AFB6',
            tabStyle: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
            labelStyle:{ fontSize: 14, fontFamily: 'Nunito-Bold' },
            labelPosition: 'below-icon',
            showLabel: true
          }
const BottomTabNavigator = () => {  
  
    return ( 
      <Tab.Navigator
          tabBar={(props) => <TabBar { ...props } />}
          screenOptions={({ route }) => ({
            tabBarButton: [
              "Wallet",  
              "Invest",
            ].includes(route.name)
              ? () => {
                  return null;
                }
              : undefined,
          })}
          tabBarOptions={options} 
          initialRouteName={'Dashboard'}
        > 
        <Tab.Screen 
                name="Save" 
                component={saveScreen}  
                initialParams={{ icon: 'ios-download-outline'}}
                options={{
                    title: 'Save',
                    tabBarVisible: true,
                    tabBarIcon: ({focused, color, size}) => <AntDesign name="pluscircle"  size={28} color={color} /> , 
                  }}
              />

        <Tab.Screen 
              name="My Money" 
              initialParams={{ icon: 'ios-card-outline'}}
              component={myMoneyScreen}  
              options={{
                  title: 'My Money',
                  tabBarVisible: true,
                  tabBarIcon: ({focused, color, size}) => <MaterialCommunityIcons name="currency-ngn" size={28} color={color} /> , 
                }}
            />
            
        <Tab.Screen 
              name="Dashboard" 
              initialParams={{ icon: 'md-home-outline'}}
              component={HomeScreen}  
              options={{
                  title: 'Home',
                  tabBarVisible: true,
                  tabBarIcon: ({focused, color, size}) => <Feather name="home" size={28} color={color} /> , 
                }}
            />
        
        <Tab.Screen 
              name="Invest" 
              initialParams={{ icon: 'ios-bar-chart-outline'}}
              component={InvestScreen}  
              options={{
                  title: 'Invest',
                  tabBarVisible: false,
                  tabBarIcon: ({focused, color, size}) => null , 
                }}
            />

        <Tab.Screen 
              name="My Profile" 
              initialParams={{ icon: 'person-outline'}}
              component={settinsgScreen}  
              options={{
                  title: 'Profile',
                  tabBarVisible: true,
                  tabBarIcon: ({focused, color, size}) => <FontAwesome5 name="user-alt" size={28} color={color} /> , 
                }}
            />

        <Tab.Screen 
              name="Wallet" 
              initialParams={{ icon: 'wallet'}}
              component={WalletScreen}  
              options={{
                  title: 'Wallet',
                  tabBarVisible: false,
                  tabBarIcon: ({focused, color, size}) => null , 
                }}
            />

        <Tab.Screen 
              name="PayAfta" 
              initialParams={{ icon: 'wallet'}}
              component={PayAftaScreen}  
              options={{
                  title: 'PayAfta',
                  tabBarVisible: false,
                  tabBarIcon: ({focused, color, size}) => null , 
                }}
            />

        <Tab.Screen 
              name="Notification" 
              initialParams={{ icon: 'invest'}}
              component={NotificationScreen}  
              options={{
                  title: 'Notification',
                  tabBarVisible: false,
                  tabBarIcon: ({focused, color, size}) => null , 
                }}
            />
            
        <Tab.Screen 
              name="Faq" 
              initialParams={{ icon: 'invest'}}
              component={FaqScreen}  
              options={{
                  title: 'Faq',
                  tabBarVisible: false,
                  tabBarIcon: ({focused, color, size}) => null , 
                }}
            />
        
        <Tab.Screen 
              name="Refer" 
              initialParams={{ icon: 'invest'}}
              component={ReferScreen}  
              options={{
                  title: 'Refer',
                  tabBarVisible: false,
                  tabBarIcon: ({focused, color, size}) => null , 
                }}
            />
        
        <Tab.Screen 
            name="AftamaatVideo" 
            initialParams={{ icon: 'invest'}}
            component={AftamaatVideoScreen}  
            options={{
                title: 'AftamaatVideo',
                tabBarVisible: false,
                tabBarIcon: ({focused, color, size}) => null , 
              }}
          />

        <Tab.Screen 
            name="videoShowcase" 
            initialParams={{ icon: 'invest'}}
            component={videoShowcaseScreen}  
            options={{
                title: 'videoShowcase',
                tabBarVisible: false,
                tabBarIcon: ({focused, color, size}) => null , 
              }}
          />

        <Tab.Screen 
            name="Contact" 
            initialParams={{ icon: 'invest'}}
            component={ContactScreen}  
            options={{
                title: 'Contact',
                tabBarVisible: false,
                tabBarIcon: ({focused, color, size}) => null , 
              }}
          />
 
      </Tab.Navigator>
    );
};

export default BottomTabNavigator;