import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView ,  Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar, Switch  } from 'react-native-paper';
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get('window'); 

import ProfileScreen from './personalInfo';
import ProfileName from './profileName';
import PasswordReset from './passwordReset';
import BVNUpdate from './bvn';
import VerificationQuestion from './verificationQuestion';
import NextOfKin from './nextOfKin';
import PrivacySettings from './privacySettings';
import BankDetails from './bankDetails';

function settinsgScreen({ navigation }) { 
  const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [ currentScreen, setCurrentScreen ] = React.useState('editProfile');
  const [ selection, setSelection ] = React.useState({
                                                    amount: '',
                                                    destination: '',
                                                });

    const checkScreen = (data, type) => { 
        setCurrentScreen(type); 
    }

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
     
      // if(currentScreen == "editProfile"){
      //   return ( 
      //         <ProfileScreen updateScreen={checkScreen} />
      //     );
      // } 

      if(currentScreen == "editProfile"){
        return ( 
          <View style={styles.container}>
             <StatusBar style="dark"  />
             <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } > 
                    <Ionicons name="md-menu-outline" size={30} color={'#192841'} />
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
                              <Text style={styles.leftTextConH6}>Settings</Text>
                          </View> 
                      </View>
                  </LinearGradient>
              </TouchableOpacity> 
             <View style={styles.body}>
                <ScrollView style={{ width: width - 40  }} showsVerticalScrollIndicator={false}> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('chooseEditProfileType') }>
                          <Text style={styles.editOptionText}>Edit Profile</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('accountSettings') }>
                          <Text style={styles.editOptionText}>Account Settings</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('privacySettings') }> 
                          <Text style={styles.editOptionText}>Privacy Settings</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption}>
                          <Text style={styles.editOptionText}>Show Dashboard Balance</Text>
                          <Switch value={isSwitchOn} color="#14234A" onValueChange={onToggleSwitch} />
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
          </View>
        );
      }

      if(currentScreen == "chooseEditProfileType"){
        return ( 
          <View style={styles.container}>
              <StatusBar style="dark"  /> 
              <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => setCurrentScreen('editProfile') } > 
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
                              <Text style={styles.leftTextConH6}>Settings</Text>
                          </View> 
                      </View>
                  </LinearGradient>
              </TouchableOpacity> 
              <View style={styles.body}>
                <View style={{ width: width - 40, }}> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('profileName') }>
                          <Text style={styles.editOptionText}>Change Name</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption}  onPress={() => setCurrentScreen('passwordReset') }>
                          <Text style={styles.editOptionText}>Password Reset</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('profileTask') }>
                          <Text style={styles.editOptionText}>Complete Profile Task</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption}>
                          <Text style={styles.editOptionText}>Delete Account</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
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
                </View>               
              </View>
          </View>
     
          );
      }

      if(currentScreen == "profileTask"){
        return ( 
          <View style={styles.container}>
              <StatusBar style="dark"  /> 
              <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => setCurrentScreen('chooseEditProfileType') } > 
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
                              <Text style={styles.leftTextConH6}>Settings</Text>
                          </View> 
                      </View>
                  </LinearGradient>
              </TouchableOpacity> 
              <View style={styles.body}>
                <ScrollView style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('BVNUpdate') }>
                          <Text style={styles.editOptionText}>BVN</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View>  
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('verificationQuestion') }>
                          <Text style={styles.editOptionText}>Verification Questions</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('NextOfKinInfo')}>
                          <Text style={styles.editOptionText}>Next of Kin Info</Text>
                          <Ionicons name="ios-caret-forward" size={20} color="#192841"  />
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
          </View>
     
          );
      }
      
      if(currentScreen == "profileName"){
        return ( 
              <ProfileName updateScreen={checkScreen} />
          );
      }

      if(currentScreen == "passwordReset"){
        return ( 
              <PasswordReset updateScreen={checkScreen} />
          );
      }

      if(currentScreen == "BVNUpdate"){
        return <BVNUpdate updateScreen={checkScreen} />
      }

      if(currentScreen == "verificationQuestion"){
        return <VerificationQuestion updateScreen={checkScreen} />
      }

      if(currentScreen == "NextOfKinInfo"){
        return <NextOfKin updateScreen={checkScreen} />
      }

      if(currentScreen == "accountSettings"){
        return ( 
          <View style={styles.container}>
            <StatusBar style="dark"  /> 
            <View style={styles.header}>
              <TouchableOpacity style={styles.headerRight} onPress={() => setCurrentScreen('editProfile') } > 
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
                            <Text style={styles.leftTextConH6}>Settings</Text>
                        </View> 
                    </View>
                </LinearGradient>
            </TouchableOpacity> 
             <View style={styles.body}>
                <ScrollView style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setCurrentScreen('chooseEditProfileType') }>
                          <Text style={styles.editOptionText}>Interests</Text>
                          <Switch value={isSwitchOn} color="#14234A" onValueChange={onToggleSwitch} />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption}>
                          <Text style={styles.editOptionText}>Notifications</Text>
                          <Switch value={isSwitchOn} color="#14234A" onValueChange={onToggleSwitch} />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption}>
                          <Text style={styles.editOptionText}>Automatic Savings</Text>
                          <Switch value={isSwitchOn} color="#14234A" onValueChange={onToggleSwitch} />
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
          </View>
        );
      }

      if(currentScreen == "privacySettings"){
        return <PrivacySettings updateScreen={checkScreen} />
      }

      if(currentScreen == "bankDetails"){
        return <BankDetails updateScreen={checkScreen} />
      }

 
    } 

export default settinsgScreen;

  
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
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1,
    }, 
    listContainer:{  
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    editOption:{
      width: width - 50,
      height: 50, 
      elevation: 1,
      backgroundColor: '#fff',
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20
    },
    editOptionText:{
      color: '#252B42',
      fontFamily: 'Mulish-Regular',
      fontSize: 14, 
    }
  });