import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font'; 
import {Picker, PickerIOS} from '@react-native-picker/picker';
import * as Animatable from 'react-native-animatable';


const { width, height } = Dimensions.get('window');
 
function SignInScreen({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [ showPassword, setShowPassword ] = React.useState(true); 
    return (
      <View style={styles.container}>
        <StatusBar style="light" /> 
        <ImageBackground  style={styles.header} source={require('../../assets/login.png')}>
            <Text style={styles.headerText}>Login your</Text>
            <Text style={styles.headerText}>Account</Text>
        </ImageBackground> 
        <View style={styles.body}>
          <Animatable.View animation="fadeInDown" style={styles.formCard}>
              <View style={styles.formGroup}>
                  <View style={styles.icon}> 
                    <Feather name="user" size={20} color="#243972" />
                  </View>
                  <View style={styles.inputCon}>
                    <TextInput 
                          style={styles.input}
                          placeholder="Email or Phone Number"
                          placeholderTextColor={'#243972'}
                    />
                  </View>
              </View>
              <View style={styles.formGroup}>
                  <View style={styles.icon}>  
                    <Ionicons name="ios-lock-closed-sharp" size={20} color="#243972" />
                  </View>
                  <View style={[styles.inputCon, {  width: '70%' }]}>
                    <TextInput 
                          style={styles.input}
                          secureTextEntry={showPassword}
                          placeholder="Password"
                          placeholderTextColor={'#243972'}
                    />
                  </View>
                  <TouchableOpacity style={styles.icon} onPress={() => setShowPassword(!showPassword)}>  
                    <Text style={{ color: '#243972', fontSize: 10 }}> { !showPassword ? 'Hide' : 'Show' }</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('TabsNav', { screen: 'Dashboard' })}>
                  <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <View style={styles.buttonIcon}>
                  <Ionicons name="finger-print" size={24} color="#fff" />
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.createText}>Create Your Account</Text>
              </TouchableOpacity>
          </Animatable.View>
          <View style={styles.footer}>
            <View style={styles.selectFooter}>
              <Pressable onPress={() => navigation.navigate('Login')} style={[styles.selectCard, { borderBottomRightRadius: 20, borderWidth: 0,  }]}>
                <View>
                  <Feather name="user" size={30} color="#fff" />
                </View>
                <View>
                  <Text style={styles.selectText}>Personal</Text>
                  <Text style={styles.selectText}>Account</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('BusinessSignIn')} style={[styles.selectCard, { borderBottomLeftRadius: 20, backgroundColor: '#FFF'  }]}>
                <View>
                  <Feather name="user" size={30} color="#243972" />
                </View>
                <View>
                  <Text style={[styles.selectText, { color: '#243972' }]}>Business</Text>
                  <Text style={[styles.selectText, { color: '#243972' }]}>Account</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }

export default SignInScreen; 

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    header:{
      flex: 1.2,
      // backgroundColor: '#243972',
      padding: 20,
      justifyContent: 'center', 
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
    formGroup:{
      width: '90%',
      height: 41.1,
      borderColor: '#243972',
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: 'row', 
      alignItems: 'center',
      marginVertical: 5
    },
    inputCon:{
      width: '85%',
      justifyContent: 'center',
    },
    input:{
      fontFamily: 'Mulish-Regular',
      fontSize: 10,
      color: '#243972'
    },
    icon:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '15%'
    },
    buttonContainer:{
      width: '90%',
      height: 41.1, 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button:{
      width: '82%',
      height: 41.1,
      backgroundColor: '#243972', 
      borderRadius: 10, 
      justifyContent: 'center',
      alignItems: 'center', 
    },
    buttonText:{
      color: '#FFFFFF',
      fontSize: 20,
      fontFamily: 'Mulish-Regular',
    },
    buttonIcon:{
      width: '16%',
      height: 41.1,
      backgroundColor: '#243972', 
      borderRadius: 10, 
      justifyContent: 'center',
      alignItems: 'center', 
    },
    createText:{
      marginTop: 10,
      color: '#404CB2',
      fontSize: 12,
      fontFamily: 'Mulish-Regular'
    },
    footer:{
      marginTop: '40%'
    },
    selectFooter:{
      width: '75%', 
      justifyContent: 'center',
      alignItems: 'center', 
      flexDirection: 'row', 
      alignSelf: 'center', 
    },
    selectCard:{
      width: '50%',
      height: 68,
      backgroundColor: '#243972',
      borderWidth: 2,
      borderRadius: 4,
      flexDirection: 'row', 
      justifyContent: 'flex-start',
      alignItems: 'center', 
      paddingLeft: 10
    },
    selectText:{
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Mulish-Regular'
    }
  });