import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Auth files
import SignInScreen from '../auth/login';
import SignUpScreen from '../auth/register';
import StepOneScreen from '../auth/step_one';
import StepTwoScreen from '../auth/step_two'; 

import onBoradingScreen from '../index';

import ResponseScreen from '../response';

import TabNavigator from "./TabNavigator";

//Business Pgae screen 
import BusinessHomeScreen from '../Business';
import BusinessPayAftaScreen from '../Business/payAfta';
import BusinessTransactionScreen from '../Business/transactions';
import BusinessSignInScreen from '../Business/auth/login';

const Stack = createStackNavigator();
const screenOptionStyle =  {
                        headerStyle: {
                            backgroundColor: "#9AC4F8",
                        },
                        headerTintColor: "white",
                        headerBackTitle: "Back",
                    }
                     
const AuthStackNavigator = () => {
  return (
      <Stack.Navigator headerMode={'none'} initialRouteName="onBorading" screenOptions={screenOptionStyle}> 
        <Stack.Screen name="onBorading" component={onBoradingScreen} />
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} /> 
        <Stack.Screen name="StepOne" component={StepOneScreen} /> 
        <Stack.Screen name="StepTwo" component={StepTwoScreen} /> 
        <Stack.Screen name={"Response"} component={ResponseScreen} /> 
        <Stack.Screen name={"TabsNav"} component={TabNavigator} /> 
        <Stack.Screen name={"BusinessHome"} component={BusinessHomeScreen} /> 
        <Stack.Screen name={"BusinessPayAfta"} component={BusinessPayAftaScreen} /> 
        <Stack.Screen name={"BusinessTransaction"} component={BusinessTransactionScreen} /> 
        <Stack.Screen name={"BusinessSignIn"} component={BusinessSignInScreen} /> 

        
      </Stack.Navigator>
    );
  } 

export { AuthStackNavigator };