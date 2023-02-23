import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView , TextInput, Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar  } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { BlurView } from 'expo-blur';
const { width, height } = Dimensions.get('window'); 

function PrivacySettings(props) { 
  const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);   
  const [ modalSecurityCheck, setModalSecurityCheck ] = React.useState(false);   
  const [ modalTrasactionLimit, setModalTrasactionLimit ] = React.useState(false);    
  const [ selection, setSelection ] = React.useState({
                                                    amount: '',
                                                    destination: '',
                                                });
                                                
    return (
      <ScrollView style={styles.container}> 
         <StatusBar style="dark" /> 
         <View style={styles.header}>
            <TouchableOpacity style={styles.headerRight} onPress={e =>  props.updateScreen(e, 'editProfile') } > 
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
                          <Text style={styles.leftTextConH6}>Privacy</Text>
                      </View> 
                  </View>
              </LinearGradient>
          </TouchableOpacity> 
         <View style={styles.body}>
            <View style={styles.cardView}>
                {/* <Text style={styles.cardViewText}>Verification Question</Text> */}
                  <View style={{ width: '100%' }}> 
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setModalConfrimIdentity(!modalSecurityCheck) }>
                          <Text style={styles.editOptionText}>Change Transaction Pin</Text>
                          <Ionicons name="caret-forward-circle-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={() => setModalTrasactionLimit(!modalTrasactionLimit) }>
                          <Text style={styles.editOptionText}>Interbank Transfer Limit</Text>
                          <Ionicons name="caret-forward-circle-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listContainer}> 
                        <TouchableOpacity style={styles.editOption} onPress={ e =>  props.updateScreen(e, 'bankDetails') }>
                          <Text style={styles.editOptionText}>Bank and Card Settings</Text>
                          <Ionicons name="caret-forward-circle-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                  </View>      
            </View>    
            <View style={{ marginTop: -20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Support</Text>
                <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>|</Text>
                <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Privacy</Text>
                <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>|</Text>
                <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Terms</Text>
                <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>|</Text>
                <Text style={{color: '#14234A', fontSize: 11,fontFamily: 'Mulish-Regular', padding: 3 }}>Help</Text>  
            </View>

            {/* Change Password Modal */}
            <Modal          
                    animationType="slide"
                    transparent={true}
                    visible={modalConfrimIdentity}
                    onRequestClose={() => { 
                        setModalConfrimIdentity(!modalConfrimIdentity);
                    }}
                >
                <BlurView tint="dark" intensity={100} style={styles.confirmationModal}>
                    <View style={styles.confirmContainerWhite}>  
                        <View style={{ width: width - 50, backgroundColor: '#FFFFFF', padding: 30,  justifyContent: 'center', borderRadius: 10  }}> 
                            <View style={{ marginTop: 30 }}> 
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Enter Old Pin'}
                                    onChangeText={text => setSelection({ ...selection, amount: text })}
                                    style={{ borderColor: '#E5E5E5', height: 40, fontSize: 12, paddingLeft: 20, fontFamily: 'Mulish-Regular', backgroundColor: '#E5E5E5', borderRadius: 10 }}
                                    />
                            </View>
                            <View style={{ marginTop: 3 }}> 
                                <TextInput
                                    // label="Email"
                                    value={selection.destination}
                                    mode={'outlined'}
                                    placeholder={'Enter New Pin'}
                                    onChangeText={text => setSelection({ ...selection, destination: text })}
                                    style={{ borderColor: '#E5E5E5', height: 40, fontSize: 12, paddingLeft: 20, fontFamily: 'Mulish-Regular', backgroundColor: '#E5E5E5', borderRadius: 10 }}
                                    />
                            </View>
                            <View style={{ marginTop: 3 }}> 
                                <TextInput
                                    // label="Email"
                                    value={selection.destination}
                                    mode={'outlined'}
                                    placeholder={'Confirm Pin'}
                                    onChangeText={text => setSelection({ ...selection, destination: text })}
                                    style={{ borderColor: '#E5E5E5', height: 40, fontSize: 12, paddingLeft: 20, fontFamily: 'Mulish-Regular', backgroundColor: '#E5E5E5', borderRadius: 10 }}
                                    />
                            </View>
                            <View>
                                <TouchableOpacity  style={[styles.confirmButton, { width: '100%', borderRadius: 10, }]} onPress={() => { setModalConfrimIdentity(!modalConfrimIdentity); setModalSecurityCheck(!modalSecurityCheck); }}>
                                    <Text style={styles.confirmButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </View>
                </BlurView>
            </Modal>

            {/* Confirm Account Modal */}
            <Modal          
                    animationType="slide"
                    transparent={true}
                    visible={modalSecurityCheck}
                    onRequestClose={() => { 
                        setModalSecurityCheck(!modalSecurityCheck);
                    }}
                >
                <BlurView tint="dark" intensity={100} style={styles.confirmationModal}>
                    <View style={styles.confirmContainerWhite}>  
                        <View style={{ width: width - 50, height: 170, backgroundColor: '#FFFFFF', padding: 30,   borderRadius: 10  }}> 
                            <Text style={styles.formLabel}>Please enter your Aftamaat password to enable us verify it is you</Text>
                            <View style={{ marginTop: 30 }}> 
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Enter Password'}
                                    onChangeText={text => setSelection({ ...selection, amount: text })}
                                    style={{ borderColor: '#E5E5E5', borderWidth: 1, height: 40, fontSize: 12, paddingLeft: 20, fontFamily: 'Mulish-Regular', backgroundColor: '#FFF', borderRadius: 10 }}
                                    />
                            </View>  
                            <View>
                                <TouchableOpacity style={[styles.confirmButton, { width: '90%', borderRadius: 10, top: '2%' }]} onPress={() =>{ setModalSecurityCheck(!modalSecurityCheck); }}>
                                    <Text style={styles.confirmButtonText}>Verify</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </View>
                </BlurView>
            </Modal>

            {/* Transaction Limit Modal */}
            <Modal          
                    animationType="slide"
                    transparent={true}
                    visible={modalTrasactionLimit}
                    onRequestClose={() => { 
                        setModalTrasactionLimit(!modalTrasactionLimit);
                    }}
                >
                <BlurView tint="dark" intensity={100} style={styles.confirmationModal}>
                    <View style={styles.confirmContainerWhite}>  
                        <View style={{ width: width - 50, backgroundColor: '#FFFFFF', padding: 30,  justifyContent: 'center', borderRadius: 10  }}>
                            <Text style={styles.formLabel}>Note: you can only change your limit once a month</Text> 
                            <View style={{ marginTop: 30 }}> 
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Chnage Transfer Limit'}
                                    onChangeText={text => setSelection({ ...selection, amount: text })}
                                    style={{ borderColor: '#E5E5E5', height: 40, fontSize: 12, paddingLeft: 20, fontFamily: 'Mulish-Regular', backgroundColor: '#E5E5E5', borderRadius: 10 }}
                                    />
                            </View> 
                            <View>
                                <TouchableOpacity  style={[styles.confirmButton, { width: '100%', borderRadius: 10, }]} onPress={() => { setModalTrasactionLimit(!modalTrasactionLimit); setModalSecurityCheck(!modalSecurityCheck); }}>
                                    <Text style={styles.confirmButtonText}>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </View>
                </BlurView>
            </Modal>
         </View>
      </ScrollView>
    );
}

export default PrivacySettings;

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
      alignItems: 'center',
      zIndex: 1,
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
    },
    formContainer:{
      width: width,
      height: 350,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmationModal:{
      width,
      height,
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
      fontSize: 12,
      textAlign: 'center'
    },
    confirmButton:{
      width: '80%',
      height: 45,
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
      fontSize: 18
    },
    cardView:{
        width: width - 40, 
        padding: 20,  
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardViewText:{
        color: '#000000',
        fontFamily: 'Mulish-Regular',
        fontSize: 16
    }
  }); 