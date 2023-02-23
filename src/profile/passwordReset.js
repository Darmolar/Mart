import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView , TextInput, Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar  } from 'react-native-paper';
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get('window'); 

function PasswordReset(props) { 
  const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);   
  const [ selection, setSelection ] = React.useState({
                                                    amount: '',
                                                    destination: '',
                                                });
                                                
    return (
      <ScrollView style={styles.container}> 
         <StatusBar style="dark"  /> 
         <View style={styles.header}>
            <TouchableOpacity style={styles.headerRight} onPress={e =>  props.updateScreen(e, 'chooseEditProfileType') } > 
                <Ionicons name="arrow-back-sharp" size={30} color={'#192841'} />
            </TouchableOpacity> 
            <View style={styles.headerLeft}>
                <Ionicons name="md-notifications-outline" style={{ right: 5 }} size={29} color={'#192841'} onPress={() => navigation.navigate("TabsNav", { screen: "Notification" }) }  />
                {/* <Entypo name="bell" /> */}
                <TouchableOpacity style={styles.avatarImage} onPress={() => navigation.navigate("TabsNav", { screen: "Settings" }) } >
                    <Image source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }}
                        style={{ width: 25, height: 25, resizeMode: 'cover', borderWidth: 1, borderRadius: 20  }} />
                </TouchableOpacity>
            </View>
          </View> 
          <TouchableOpacity style={[styles.viewContainer, ]}>
              <LinearGradient colors={['#192841', '#192841']} style={styles.cardContainer} >
                  <View style={styles.cardBody}>
                      <View style={styles.leftTextCon}> 
                          <Text style={styles.leftTextConH6}>Update Password</Text>
                      </View> 
                  </View>
              </LinearGradient>
          </TouchableOpacity> 
         <View style={styles.body}>
            <ScrollView style={{ width: width - 40 }} showsVerticalScrollIndicator={false}> 
                <View style={{ marginTop: 10 }}> 
                    <Text style={styles.formLabel}>Enter Old passworde</Text>
                    <TextInput
                        // label="Email"
                        value={selection.amount}
                        mode={'outlined'}
                        placeholder={'************************'}
                        onChangeText={text => setSelection(text)}
                        style={{ fontSize: 12, borderColor: '#E5E5E5', paddingLeft: 20, marginTop: 5, borderWidth: 1, backgroundColor: '#F9F9F9', height: 40, borderRadius: 40, }}
                        />
                </View>  
                <View style={{ marginTop: 20 }}>  
                    <Text style={styles.formLabel}>Enter New Password</Text>
                    <TextInput
                        // label="Email"
                        value={selection.amount}
                        mode={'outlined'}
                        placeholder={'************************'}
                        onChangeText={text => setSelection(text)}
                        style={{ fontSize: 12, borderColor: '#E5E5E5', paddingLeft: 20, marginTop: 5, borderWidth: 1, backgroundColor: '#F9F9F9', height: 40, borderRadius: 40, }}
                        />
                </View>   
                <View style={{ marginTop: 20 }}>  
                    <Text style={styles.formLabel}>Confirm New Password</Text>
                    <TextInput
                        // label="Email"
                        value={selection.amount}
                        mode={'outlined'}
                        placeholder={'************************'}
                        onChangeText={text => setSelection(text)}
                        style={{ fontSize: 12, borderColor: '#E5E5E5', paddingLeft: 20, marginTop: 5, borderWidth: 1, backgroundColor: '#F9F9F9', height: 40, borderRadius: 40, }}
                        />
                </View>  
                <View>
                    <TouchableOpacity style={styles.confirmButton} onPress={ e =>  props.updateScreen(e, 'editProfile') }>
                        <Text style={styles.confirmButtonText}>Save Changes</Text>
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

export default PasswordReset;

  
const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    header:{
      marginTop: 40,
      flexDirection: 'row',
      width: width,
      height: 35, 
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
    },
    headerRight:{
        // flexDirection: 'row',
    },
    headerLeft:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    avatarImage:{ 
      width: 30, 
      height: 30, 
      borderRadius: 20, 
      backgroundColor: '#14234A', 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    navText:{
      fontSize: 23,
      fontFamily: 'Mulish-Regular',
    },
    avatarImage:{ 
      width: 30, 
      height: 30, 
      borderRadius: 20, 
      backgroundColor: '#192841', 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    viewContainer:{ 
      width: width,  
      height: 84
    },
    cardContainer: {
      flex: 1,
      width: width - 40,  
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 20,
      marginLeft: 20, 
      marginTop: 10,
    },
    cardHeader:{
      alignItems: 'center',
    },
    cardTextHeader:{
      top: 5,
      fontSize: 16,
      textTransform: 'capitalize',
      fontFamily: 'Mulish-Bold', 
      color: '#fff', 
    },
    leftTextCon:{
      height: 50,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    leftTextConH6:{
      color: '#fff',
      fontSize: 30,
      textTransform: 'capitalize',
      fontFamily: 'Mulish-Bold', 
    },
    body:{
      height: 500,
      marginTop: '5%', 
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
    confirmContainerWhite:{
      width: width,
      height: 300, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    formLabel:{
      color: '#94AFB6',
      fontFamily: 'Mulish-Bold',
      fontSize: 8
    },
    confirmButton:{
      width: '80%',
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#14234A',
      borderRadius: 20,
      marginVertical: 15,
      alignSelf: 'center',
    },
    confirmButtonText:{
      color: '#FFFFFF',
      fontFamily: 'Mulish-Regular',
      fontSize: 12
    },
  });