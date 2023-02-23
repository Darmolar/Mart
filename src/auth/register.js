import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font'; 
import {Picker, PickerIOS} from '@react-native-picker/picker'; 
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');
 
function SignUpScreen({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [showPassword, setShowPassword] = React.useState(true);
     
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground source={require('../../assets/login.png')} style={styles.header}> 
        </ImageBackground>
        <View style={styles.body}>
          <Animatable.View animation="slideInLeft" style={styles.formCard}> 
            <View style={styles.IntoCon}>
              <Text style={styles.IntoConText}>To begin saving, what type of account would like to create?</Text>
            </View>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('StepOne') }>
              <View style={styles.cardLeft}>  
                  <Ionicons name="ios-arrow-forward" color={'#fff'} /> 
              </View>
              <View style={styles.cardMiddle}>
                  <Text style={styles.cardMiddleH1}>Individual Account</Text>
                  <Text style={styles.cardMiddleH2}>Personal account to manage all your savings and investmets</Text>
              </View>
              <View style={styles.cardRight}>
                <Ionicons name="ios-arrow-forward" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardLeft}>  
                  <Ionicons name="ios-arrow-forward" color={'#fff'} /> 
              </View>
              <View style={styles.cardMiddle}>
                  <Text style={styles.cardMiddleH1}>Business Account</Text>
                  <Text style={styles.cardMiddleH2}>Own or belong to a company, this is for you.</Text>
              </View>
              <View style={styles.cardRight}>
                <Ionicons name="ios-arrow-forward" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Login') }>
              <Text style={styles.signInText}>Already have an account? <Text style={{ color: '#243972' }}>Sign in</Text></Text>
            </TouchableOpacity>
          </Animatable.View> 
        </View>
      </View>
    );
  }

  export default SignUpScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    header:{
      flex: 1.2,
      // backgroundColor: '#243972',
      padding: 20,
      justifyContent: 'center'
    },
    headerText:{ 
      color: '#FFFFFF',
      fontSize: 31,
      fontFamily: 'Mulish-Regular',
    },
    body:{ 
      flex: 2.8,
    },
    formCard:{
      marginTop: 40,
      width: width,
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    IntoCon:{
      width: '55%',
      marginVertical: 5,
    },
    IntoConText:{
      textAlign: 'center',
      color: '#8692A6',
      fontSize: 12
    },
    card:{
      width: '80%',
      height: 69,
      borderWidth: 2,
      borderColor: '#243972',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
    },
    cardLeft:{
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    cardMiddle:{
      width: '60%',
      justifyContent: 'center', 
    },
    cardMiddleH1:{
      color: '#000000',
      fontSize: 12,
      fontFamily: 'Mulish-Regular',
    },
    cardMiddleH2:{
      color: '#8692A6',
      fontSize: 10,
    },
    cardRight:{
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    signInText:{
      marginTop: 20,
      color: '#1B1B1C',
      opacity: 100,
      fontFamily: 'Mulish-Regular',
      fontSize: 10
    }
  });