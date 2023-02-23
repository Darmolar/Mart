import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView , TextInput, Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar  } from 'react-native-paper';
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get('window'); 

function myMoneyScreen({ navigation }) {
  const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);   
  const [ updateAllShows, setUpdateAllShows ] = React.useState({
                                                              wallet: false,
                                                              invest: false,
                                                              saving: false,
                                                              goal: false,                                                              
                                                            });   
  const [ selection, setSelection ] = React.useState({
                                                    amount: '',
                                                    destination: '',
                                                });
    
    return (
      <ScrollView style={styles.container}> 
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
            <LinearGradient colors={['#192841', '#192841']} style={styles.navCard}>
              <View>
                <Text style={styles.navCardTextH1}><Entypo name="wallet" size={30} color="white" /> My Money</Text>
              </View>
              <View>
                <Text style={styles.navCardTextH3}>Total Balance</Text>
                <Text style={styles.navCardTextH2}>{'\u20A6'}5,720,20</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.body}>
            <View>
              <View style={styles.bodyTop}>
                  <TouchableOpacity style={styles.bodyTopButton} onPress={() => navigation.navigate('Save')}>
                    <Text style={styles.bodyTopButtonText}>Add money</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.bodyTopButton, { width: 130, left: 5, backgroundColor: '#192841' }]}  onPress={() => navigation.navigate('My Profile')}>
                    <Text style={styles.bodyTopButtonText}>view your profile</Text>
                  </TouchableOpacity>
              </View>
            </View>

            <View style={styles.bodyMain}>
                <TouchableOpacity  style={styles.card} onPress={() =>  setUpdateAllShows({ ...updateAllShows, wallet: !updateAllShows.wallet }) }>
                  <View style={styles.cardBody}>
                    <View>
                      <Text style={styles.cardTextH1}>AFTAWALLET</Text>
                      <Text style={styles.cardTextH2}>Money Available in your Wallet</Text>
                    </View>
                    <View>
                      <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                        <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                      </View>
                    </View>
                  </View>
                  {
                    updateAllShows.wallet == true &&
                    <View style={styles.transactionList}> 
                        <View style={styles.transactionListElement}>
                          <Text style={styles.transactionListElementText}>Afta Invest</Text>
                          <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                            <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                          </View>
                        </View> 
                    </View>
                  }
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() =>  setUpdateAllShows({ ...updateAllShows, invest: !updateAllShows.invest }) }>
                  <View style={styles.cardBody}> 
                    <View>
                      <Text style={styles.cardTextH1}>INVESTMENT</Text>
                      <Text style={styles.cardTextH2}>Small Savings, A+ Savings….</Text>
                    </View>
                    <View>
                      <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                        <Text style={styles.cardButtonText}>{'\u20A6'}20,000</Text>
                      </View>
                    </View>
                  </View>
                  {
                    updateAllShows.invest == true &&
                    <View style={styles.transactionList}> 
                        <View style={styles.transactionListElement}>
                          <Text style={styles.transactionListElementText}>Afta Invest</Text>
                          <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                            <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                          </View>
                        </View> 
                    </View>
                  }
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() =>  setUpdateAllShows({ ...updateAllShows, saving: !updateAllShows.saving }) }>
                  <View style={styles.cardBody}> 
                    <View>
                      <Text style={styles.cardTextH1}>SAVINGS</Text>
                      <Text style={styles.cardTextH2}>Your Aftamaat savings Account</Text>
                    </View>
                    <View>
                      <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                        <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                      </View>
                    </View>
                  </View>
                  {
                    updateAllShows.saving == true &&
                    <View style={styles.transactionList}> 
                        <View style={styles.transactionListElement}>
                          <Text style={styles.transactionListElementText}>Quick Save</Text>
                          <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                            <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                          </View>
                        </View> 
                    </View>
                  }
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() =>  setUpdateAllShows({ ...updateAllShows, goal: !updateAllShows.goal }) }>
                  <View style={styles.cardBody}> 
                    <View>
                      <Text style={styles.cardTextH1}>GOAL</Text>
                      <Text style={styles.cardTextH2}>Wedding, Car</Text>
                    </View>
                    <View>
                      <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                        <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                      </View>
                    </View>
                  </View>
                  {
                    updateAllShows.goal == true &&
                    <View style={styles.transactionList}> 
                        <View style={styles.transactionListElement}>
                          <Text style={styles.transactionListElementText}>Rent</Text>
                          <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                            <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                          </View>
                        </View> 
                    </View>
                  }
                </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    );
  }

  export default myMoneyScreen;
  const styles = StyleSheet.create({
    container: { 
      flex: 1
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
      backgroundColor: '#192841', 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    nav:{
      marginTop: '25%',
      width: width - 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }, 
    navBar:{ 
      marginTop: 0,
    },
    navBarH1:{
      color: '#FFF',
      fontSize: 22,
      fontFamily: 'Mulish-Bold'
    },
    navBarH2:{
      color: '#FFF',
      fontSize: 18,
      fontFamily: 'Mulish-Regular'
    },
    viewContainer:{ 
      width: width,  
      height: 84
    },
    navCard: {
      flex: 1,
      width: width - 40,  
      flexDirection: 'row',
      justifyContent: 'space-between',  
      alignItems: 'center', 
      borderRadius: 20,
      marginLeft: 20, 
      marginTop: 10,
      padding: 20,
    }, 
    navCardTextH1:{
      fontSize: 21,
      fontFamily: 'Mulish-Regular',
      color: '#FFF',
      justifyContent: 'center', 
      alignItems: 'center',
    },
    navCardTextH2:{
      fontSize: 16,
      fontFamily: 'Mulish-Bold',
      color: '#FFF',
    },
    navCardTextH3:{
      fontSize: 3,
      fontFamily: 'Mulish-Regular',
      color: '#FFF',
    },
    body:{
      height: '80%',
      marginTop: '5%', 
      alignItems: 'center',
    },
    bodyTop:{ 
      width: width - 40,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    bodyTopButton:{
      width: 80,
      height: 30,
      backgroundColor: '#192841',
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: 30,
      padding: 10,
      right: 5,
    },
    bodyTopButtonText:{
      color: '#fff',
      fontSize: 10,
      textTransform: 'capitalize',
      fontFamily: 'Mulish-Regular',
    },
    bodyMain:{ 
      width: width - 60,
    },
    card:{ 
      width: '100%',
      borderBottomWidth: 2,
      borderColor: '#E0ECDE',
      marginVertical: 3,
    },
    cardBody:{
      width: '100%',
      minHeight: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardButton:{
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 30,
    },
    cardTextH1:{
      color: '#205072',
      fontSize: 10,
      fontFamily: 'Mulish-Black',
    },
    cardTextH2:{
      color: '#205072',
      fontSize: 11,
      fontFamily: 'Mulish-Regular',
      opacity: 60,
    },
    cardButtonText:{
      fontSize: 10,
      color: '#fff',
      fontFamily: 'Mulish-Regular',
    },
    transactionList:{
      width: '100%',
      marginBottom: 20
    },
    transactionListElement:{ 
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5
    },
    transactionListElementText:{
      color: '#205072',
      opacity: 71,
      fontSize: 12,
    }
  });