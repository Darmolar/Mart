import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';   
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');


const GameView = (props) =>{ 
    const clickMe = () => {
        props.clickMe()
    }  
    return ( 
            <TouchableOpacity onPress={clickMe} style={styles.tabContainer} >
                <View style={styles.cardContainer} >
                    <View style={styles.cardHeader}>
                        {props.icon}
                        <Text style={[styles.cardTextHeader, { color: props.color }]}>{ props.type }</Text>
                    </View> 
                </View>
            </TouchableOpacity> 
    );
}

export { GameView };

const styles = StyleSheet.create({
    tabContainer:{ 
        width: width/4.7,
        height: 96,    
        zIndex: 10, 
    },
    cardContainer: {   
      flex: 1,
      width: '100%',
      marginLeft: 5,
      padding: 10,
      height: 114, 
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 10,  
      backgroundColor: '#FFFFFF', 
      elevation: 1, 
    },
    cardHeader:{
        alignItems: 'center',
    },
    cardTextHeader:{
        top: 5,
        fontSize: 10,
        textTransform: 'capitalize',
        fontFamily: 'Mulish-Black', 
        color: '#14234A', 
        textAlign: 'center',
    }, 
})