import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import Tab from './Tab';
const {width, height }= Dimensions.get('screen');

function TabBar({ state, navigation }) {   
    const [ selected, setSelected ] = useState('Dashboard');
    const { routes } = state;
    const renderColor = currentTab => (currentTab === selected ? '#14234A' : '#94AFB6');
    const handlePress = (activeTab, index) => {
        if(state.index !== index){
            setSelected(activeTab)
            navigation.navigate(activeTab);
        }
    }  
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) =>  
                                                ( route.name === "Refer") || 
                                                ( route.name === "Faq") || 
                                                ( route.name === "Wallet") ||  
                                                ( route.name === "PayAfta" ) || 
                                                ( route.name === "Notification" ) ||
                                                ( route.name === "AftamaatVideo") || 
                                                ( route.name === "Contact") ||  
                                                ( route.name === "videoShowcase")   ? null : 
                                                <Tab 
                                                    tab={route}  
                                                    icon={route.params.icon} 
                                                    onPress={() => handlePress(route.name, index)}
                                                    color={renderColor(route.name)}
                                                    key={route.key} 
                                                /> 
                                            )
                }
            </View>
        </View>
    );
  }

export default TabBar; 

const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        bottom: 0,
        width,  
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: width - 2, 
        // elevation: 2,
        // backgroundColor: '#FFF',
    }
});