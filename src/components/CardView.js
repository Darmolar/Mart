import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';    
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

const CardView = (props, {navigation, }) =>{ 
    const clickMe = () => {
        props.clickMe()
    } 
 
    return (  
        <TouchableOpacity onPress={clickMe} style={styles.tabContainer}>
            <LinearGradient 
                    colors={[props.color1, props.color2]}
                    style={styles.cardContainer}
                >  
                    <View style={styles.cardBody}>
                        <View style={styles.leftTextCon}> 
                            <Text style={styles.leftTextConH6}>{'\u20A6'}{props.amount}</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.cardButton} onPress={clickMe} >
                                <Text style={styles.cardButtonText}>Save Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </LinearGradient>  
        </TouchableOpacity>
    );
}

export { CardView };

const styles = StyleSheet.create({
    tabContainer:{ 
        width: '100%',
        height: 74, 
        justifyContent: 'center',  
        alignSelf: 'center', 
    },
    cardContainer: {
      flex: 1,
      width: '100%',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 20,  
    },  
    leftTextCon:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    cardBody:{
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    cardButton:{
        top: 15,
        width: 70,
        height: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    cardButtonText:{
        fontSize: 11,
        color: '#14234A', 
        fontFamily: 'Mulish-Regular'
    },
    leftTextConH1:{
        fontSize: 11,
        fontFamily: 'Mulish-SemiBold',
        color: '#94AFB6', 
    },
    leftTextConH6:{
        fontSize: 24,
        color: '#fff', 
        fontFamily: 'Mulish-Bold'
    }
})