import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ScrollView , Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar  } from 'react-native-paper';
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get('window'); 

function ProfileScreen(props) { 
  const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);   
  const [ selection, setSelection ] = React.useState({
                                                    amount: '',
                                                    destination: '',
                                                });
                                                
    return (
      <ScrollView style={styles.container}>
        <StatusBar style="light"  />
         <View style={styles.header}>
            <TouchableOpacity style={styles.backContainer} onPress={ e =>  props.updateScreen(e, 'editProfile') }>
              <Text style={styles.backText}> <Ionicons name="arrow-back-sharp" size={25} color="white" />  My Profile</Text>
            </TouchableOpacity>
            <View>
              <View style={styles.avatarContainer}>
                <Avatar.Image  source={{ uri: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' }} size={120} style={styles.avatar}/>
              </View>
              <View style={styles.camaraIcon}>
                  <AntDesign name="camera" size={10} color="#fff" />
              </View>
            </View>
         </View>
         <View style={styles.body}>
            <ScrollView style={{ width: width -60 }} showsVerticalScrollIndicator={false}> 
                <View style={{ marginTop: 15 }}> 
                <TextInput
                    // label="Email"
                    value={selection.amount}
                    mode={'outlined'}
                    placeholder={'Akinmusire Martins'}
                    onChangeText={text => setSelection(text)}
                    style={styles.input}
                    />
                </View>  
                <View style={{ marginTop: 20 }}>  
                <TextInput
                    // label="Email"
                    value={selection.amount}
                    mode={'outlined'}
                    placeholder={'MarrtinzDesigns@gmail.com'}
                    onChangeText={text => setSelection(text)}
                    style={styles.input}
                    />
                </View> 
                <View style={{ marginTop: 15 }}> 
                <TextInput
                    // label="Email"
                    value={selection.amount}
                    mode={'outlined'}
                    placeholder={'Male'}
                    onChangeText={text => setSelection(text)}
                    style={styles.input}
                    />
                </View>  
                <View style={{ marginTop: 15 }}> 
                <TextInput
                    // label="Email"
                    value={selection.amount}
                    mode={'outlined'}
                    placeholder={'01/02/1990'}
                    onChangeText={text => setSelection(text)}
                    style={styles.input}
                    />
                </View> 
                <View style={{ marginTop: 15 }}> 
                <TextInput
                    // label="Email"
                    value={selection.amount}
                    mode={'outlined'}
                    placeholder={'08100090999'}
                    onChangeText={text => setSelection(text)}
                    style={styles.input}
                    />
                </View> 
                <View>
                <TouchableOpacity style={styles.confirmButton} onPress={ e =>  props.updateScreen(e, 'editProfile') }>
                    <Text style={styles.confirmButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Support</Text>
                    <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>|</Text>
                    <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Privacy</Text>
                    <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>|</Text>
                    <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Terms</Text>
                    <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>|</Text>
                    <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Help</Text>
                </View> 
            </ScrollView>           
         </View>
      </ScrollView>
    );
  }

  export default ProfileScreen;

  
const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#fff',
    },
    header:{
      height: '18%',
      backgroundColor: '#14234A',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    backContainer:{
      marginTop: '45%',
      flexDirection: 'row',
      alignSelf: 'flex-start', 
      left: '10%'
    },
    backText:{
        color: 'white',
        fontSize: 25,
        fontFamily: 'Mulish-Bold',
        right: 20,
    },
    avatarContainer: {
      zIndex: -1,
      marginTop: '5%',
      width: 125,
      height: 125,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: '#14234A', 
      justifyContent: 'center',
      alignSelf: 'center',
    },
    camaraIcon:{
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#fff',
      backgroundColor: '#14234A',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end', 
      zIndex: 1,
      bottom: 40
    },
    avatar:{
      alignSelf: 'center',
      backgroundColor: '#fff',
      color: '#000'
    },
    body:{
      height: '82%',
      marginTop: '25%',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1,
    }, 
    formContainer:{
      width: width,
      height: 350,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input:{
      width: '100%',
      height: 40,
      borderColor: '#243972',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingLeft: 10
    },
    confirmContainerWhite:{
      width: width,
      height: 300, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    formLabel:{
      color: '#94AFB6',
      fontFamily: 'Mulish-Bold',
      fontSize: 14
    },
    confirmButton:{
      width: '100%',
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#243972',
      borderRadius: 5,
      marginVertical: 15
    },
    confirmButtonText:{
      color: '#FFFFFF',
      fontFamily: 'Mulish-Regular',
      fontSize: 14
    },
  });