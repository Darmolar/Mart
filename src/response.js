import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

function ResponseScreen({ navigation }) { 
    return (
      <View style={styles.container}>
        <StatusBar style="dark" /> 
        <View style={styles.bodyDetails}>
            <View style={styles.topImage}> 
                <Animatable.Image animation="pulse" iterationCount="infinite" source={require('../assets/success.png')} style={{ bottom: 100 }} />
                <Text style={styles.topImageText}>Successfully Saved!</Text>
            </View>
            <View style={styles.bodyDetailsHeader}>
                <Text style={styles.bodyDetailsHeaderText}>Transaction Details</Text>
                <AntDesign name="caretdown" size={20} color="#14234A" />
            </View>
            <View style={styles.bodyDetailBody}>
                <View style={styles.bodyDetailBodyList}> 
                    <Text style={styles.bodyDetailsBodyText}>Amount</Text>
                    <Text style={styles.bodyDetailsBodyText}>N20,000</Text>
                </View>
                <View style={styles.bodyDetailBodyList}>
                    <Text style={styles.bodyDetailsBodyText}>Destination</Text>
                    <Text style={styles.bodyDetailsBodyText}>Savings</Text>
                </View>
                <View style={styles.bodyDetailBodyList}>
                    <Text style={styles.bodyDetailsBodyText}>Status</Text>
                    <Text style={styles.bodyDetailsBodyText}>Success</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack() } style={styles.bodyDetailFooter}>
                <LinearGradient style={styles.button} colors={['#243972', '#14234A']} >
                    <Text style={styles.buttonText}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  export default ResponseScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    bodyDetails:{
        width: '100%',
    },
    bodyDetailsHeader:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#14234A',
        paddingRight: 20,
        paddingLeft: 20,
    },
    bodyDetailsHeaderText:{
        color: '#14234A',
        fontSize: 16,
        fontFamily: 'Mulish-Regular',
    },
    bodyDetailBody:{ 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    bodyDetailsBodyText:{
        color: '#14234A',
        fontSize: 16,
        fontFamily: 'Mulish-Regular',
    },
    bodyDetailBodyList:{
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    bodyDetailFooter:{ 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    button:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText:{
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Mulish-Regular',
    },
    topImage:{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    topImageText:{
        color: '#243972',
        fontSize: 20,
        top: -50,
        fontFamily: 'Mulish-Regular',
    }
  });