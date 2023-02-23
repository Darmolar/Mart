import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font'; 
import {Picker, PickerIOS} from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');
 
function StepTwoScreen({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [ showPassword, setShowPassword ] = React.useState(true); 
    const [ screen, setScreen ] = React.useState(1);  

    const move = (type) => {
        if(type == 'next'){
            if(screen === 2){
                navigation.navigate('TabsNav', { screen: 'Dashboard' });
            }else{ 
                setScreen(screen + 1);
            }
        }
        if(type == 'prev'){
            if(screen === 1){
                navigation.goBack();
            }else{
                setScreen(screen - 1);
            }
        }
    }

    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground source={require('../../assets/login.png')}  style={styles.header}> 
            <View style={styles.nav}>
                <Ionicons name={'ios-arrow-back'} color="#FFF" size={30} onPress={() => move('prev')} />
                <TouchableOpacity onPress={() => move('next')}>
                    <Text style={styles.actionText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        <View style={styles.body}>
          <View style={styles.formCard}> 
            {
                screen == 1 &&
                <>
                    <View style={styles.introCon}>
                        <Text style={styles.formGroupLabel}>Enter the 6 digit code sent to your mobile number</Text>
                    </View>

                    <View style={[styles.formGroup , { marginTop: 30 }]}>
                        <Text  style={styles.formGroupLabel}>Enter OTP</Text>
                        <View style={styles.inputCon}>
                            <TextInput 
                                    style={styles.input}
                                    placeholderTextColor={'grey'}
                                    placeholder={''}
                                />
                        </View>
                    </View>   
                    <Text style={{ color: '#0A0909', fontSize: 10, fontFamily: 'Mulish-Regular', textAlign: 'center', marginTop: 10, }}>Did not receive code?</Text>
                    <Text style={{ color: '#404CB2', fontSize: 12, fontFamily: 'Mulish-Regular', textAlign: 'center' }}>Resend Code In 00:30</Text>
                </>
            }

            {
                screen == 2 &&
                <>
                    <View style={styles.introCon}>
                        <Text style={styles.formGroupLabel}>Your name should be your legal name as it appears on all your documents.</Text>
                    </View>

                    <View style={[styles.formGroup , { marginTop: 30 }]}>
                        <Text  style={styles.formGroupLabel}>Surname / Last Name</Text>
                        <View style={styles.inputCon}>
                            <TextInput 
                                    style={styles.input}
                                    placeholderTextColor={'grey'}
                                    placeholder={'Surname / Last Name'}
                                />
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text  style={styles.formGroupLabel}>First Name</Text>
                        <View style={styles.inputCon}>
                            <TextInput 
                                    style={styles.input}
                                    placeholderTextColor={'grey'}
                                    placeholder={'First Name'}
                                />
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text  style={styles.formGroupLabel}>Date of Birth</Text>
                        <View style={styles.inputCon}>
                            <TextInput 
                                    style={styles.input}
                                    placeholderTextColor={'grey'}
                                    placeholder={'DD/MM/YY'}
                                />
                        </View>
                    </View> 
                </>
            }


          </View>
        </View>
      </View>
    );
  }

export default StepTwoScreen; 

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    header:{
      flex: 1.2, 
      padding: 20, 
    },
    nav:{
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionText:{
        color: '#FFFFFF',
        fontFamily: 'Mulish-Regular',
        fontSize: 14
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
    introCon:{
        width: '80%',
    },
    introConTextH1:{ 
        color: '#202021',
        opacity: 100,
        fontFamily: 'Mulish-Regular',
        fontSize: 17,
    },
    introConText:{
        color: '#202021',
        opacity: 100,
        fontFamily: 'Mulish-Medium',
        fontSize: 10,
    },
    formGroup:{ 
        width: '80%',
        height: 61,
        marginVertical: 5,
    },
    formGroupLabel:{
        color: '#696F79',
        opacity: 100,
        fontFamily: 'Mulish-Medium',
    },
    inputCon:{
        width: '100%',
        height: 35, 
        borderWidth: 2,
        borderColor: '#243972',
        borderRadius: 10, 
    },
    input:{
        width: '100%',
        height: '100%',
        left: 10,
        color: 'grey',
        opacity: 100,
        fontSize: 14,
        fontFamily: 'Mulish-Medium',
    }
  });