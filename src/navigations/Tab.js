import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, Feather, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';   
import { useFonts } from 'expo-font';

const Tab = ({ color, tab, onPress, icon }) => { 

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <Ionicons name={icon} size={18} color={color} />}
            <Text style={{color, fontSize: 9, fontFamily: 'Mulish-Regular'}}>{tab.name}</Text>
        </TouchableOpacity>
    )
}  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
});

export default Tab;