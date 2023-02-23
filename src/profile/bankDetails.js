import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar  } from 'react-native-paper';
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get('window'); 

function BankDetails(props) { 
  const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);   
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
         <ScrollView style={styles.body}  showsVerticalScrollIndicator={false}>
            <View style={styles.cardView}>
                <Text style={styles.cardViewText}>Card 1</Text>
                  <ScrollView style={{ width: '100%', marginTop: 5, }} showsVerticalScrollIndicator={false}> 
                    <View style={{ marginTop: 15 }}> 
                        <Text style={styles.formLabel}>Enter Name on Card</Text>
                        <TextInput
                            // label="Email"
                            value={selection.amount} 
                            placeholder={'Martinz Martinz'}
                            onChangeText={text => setSelection(text)}
                            style={{ borderColor: '#E5E5E5', paddingLeft: 20, borderWidth: 1, backgroundColor: '#FFFFFF', height: 40, fontSize: 12, borderRadius: 5, }}
                            />
                    </View>  
                    <View style={{ marginTop: 20 }}>  
                        <Text style={styles.formLabel}>Card Number</Text>
                        <TextInput
                            // label="Email"
                            value={selection.amount} 
                            textContentType={'creditCardNumber'}
                            keyboardType={'number-pad'}
                            placeholder={'4747 4747 4747 4747'}
                            onChangeText={text => setSelection(text)}
                            style={{ borderColor: '#E5E5E5',  paddingLeft: 20, borderWidth: 1, backgroundColor: '#FFFFFF', height: 40, fontSize: 12, borderRadius: 5, }}
                            />
                    </View>  
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 15, width: '50%', }}> 
                            <Text style={styles.formLabel}>Expire Date</Text>
                            <TextInput
                                // label="Email"
                                value={selection.amount} 
                                placeholder={'07/21'}
                                onChangeText={text => setSelection(text)}
                                style={{ borderColor: '#E5E5E5',  paddingLeft: 20, borderWidth: 1, backgroundColor: '#FFFFFF', height: 40, fontSize: 12, borderRadius: 5, }}
                                />
                        </View> 
                        <View style={{ marginTop: 15, width: '40%', }}> 
                            <Text style={styles.formLabel}>CVC</Text>
                            <TextInput
                                // label="Email"
                                value={selection.amount} 
                                placeholder={'474'}
                                onChangeText={text => setSelection(text)}
                                style={{ borderColor: '#E5E5E5', paddingLeft: 20, borderWidth: 1, backgroundColor: '#FFFFFF', height: 40, fontSize: 12, borderRadius: 5, }}
                                />
                        </View> 
                    </View>  
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', zIndex: 1 }}>
                        <TouchableOpacity style={styles.confirmButton} onPress={ e =>  props.updateScreen(e, 'profileTask') }>
                            <Text style={styles.confirmButtonText}>Add New Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={ e =>  props.updateScreen(e, 'profileTask') }>
                            <Text style={styles.confirmButtonText}>Delete Card</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>      
            </View>    
            
            <View style={styles.cardView}>
                <Text style={styles.cardViewText}>Account Details</Text>
                  <ScrollView style={{ width: '100%', marginTop: 5, }} showsVerticalScrollIndicator={false}> 
                    <View style={{ marginTop: 15 }}> 
                        <Text style={styles.formLabel}>Name On Account</Text>
                        <TextInput
                            // label="Email"
                            value={selection.amount} 
                            placeholder={'Martinz Martinz'}
                            onChangeText={text => setSelection(text)}
                            style={{ borderColor: '#E5E5E5', paddingLeft: 20, borderWidth: 1, backgroundColor: '#FFFFFF', height: 40, fontSize: 12, borderRadius: 5, }}
                            />
                    </View>  
                    <View style={{ marginTop: 20 }}>  
                        <Text style={styles.formLabel}>Account Number</Text>
                        <TextInput
                            // label="Email"
                            value={selection.amount} 
                            textContentType={'creditCardNumber'}
                            keyboardType={'number-pad'}
                            placeholder={'1234567890'}
                            onChangeText={text => setSelection(text)}
                            style={{ borderColor: '#E5E5E5',  paddingLeft: 20, borderWidth: 1, backgroundColor: '#FFFFFF', height: 40, fontSize: 12, borderRadius: 5, }}
                            />
                    </View>   
                    <View style={{ marginTop: 20 }}>  
                        <Text style={styles.formLabel}>Bank Name</Text>
                        <TextInput
                            // label="Email"
                            value={selection.amount}  
                            placeholder={'Access Bank'}
                            onChangeText={text => setSelection(text)}
                            style={{ borderColor: '#E5E5E5',  paddingLeft: 20, borderWidth: 1, backgroundColor: '#FFFFFF', height: 40, fontSize: 12, borderRadius: 5, }}
                            />
                    </View>  
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', zIndex: 1 }}>
                        <TouchableOpacity style={styles.confirmButton} onPress={ e =>  props.updateScreen(e, 'profileTask') }>
                            <Text style={styles.confirmButtonText}>Add New Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={ e =>  props.updateScreen(e, 'profileTask') }>
                            <Text style={styles.confirmButtonText}>Delete Card</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>      
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
      </ScrollView>
    );
}

export default BankDetails;

  
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
    body:{
      marginBottom: '15%',
      marginTop: '5%',   
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
      fontSize: 12, 
      left: 2,
    },
    confirmButton:{
      width: '40%',
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#14234A',
      borderRadius: 10,
      marginVertical: 15,
      alignSelf: 'center',
      zIndex: 1
    },
    confirmButtonText:{
      color: '#FFFFFF',
      fontFamily: 'Mulish-Regular',
      fontSize: 14
    },
    cardView:{
        width: width - 40, 
        // height: 320,
        padding: 15,
        backgroundColor: '#FFFFFF', 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
        marginVertical: 10,
        alignSelf: 'center',
    },
    cardViewText:{
        color: '#000000',
        fontFamily: 'Mulish-Regular',
        fontSize: 16
    }
  });