import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ScrollView , Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font';
import TransactionHistory from '../save/TransactionHistory';
import { LinearGradient } from 'expo-linear-gradient'; 
import { BlurView } from 'expo-blur';
const { width, height } = Dimensions.get('window'); 

function WalletScreen({ navigation }) {
  const [ modalVisible, setModalVisible ] = React.useState(false);
  const [ showTransactionHistory, setShowTransactionHistory ] = React.useState(false);
  const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);
  const [ selectedType, setSelectedType ] = React.useState({
                                                            type: '',
                                                            step: '',
                                                          });
  const [ saveForGoal, setSaveForGoal ] = React.useState({
                                                            type: '',
                                                            amount: 0,
                                                            frequency: '',
                                                            perTime: '',
                                                            paymentMethod: '',
                                                          });
  const [ widthdraSelect, setWidthdraSelect ] = React.useState({
                                                            type: '', 
                                                          });
  const [ selection, setSelection ] = React.useState({
                                                    amount: '',
                                                    destination: '',
                                                });
    return (
        <View style={styles.container}>
            <StatusBar style="dark" /> 
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } > 
                    <Ionicons name="md-menu-outline" size={30} color={'#031163'} />
                </TouchableOpacity>
                <Text style={styles.navText}>Welcome, Dominiq.</Text>
                <View style={styles.headerLeft}>
                    <Ionicons name="md-notifications-outline" style={{ right: 5 }} size={29} color={'#031163'} onPress={() => navigation.navigate("TabsNav", { screen: "Notification" }) }  />
                    {/* <Entypo name="bell" /> */}
                    <TouchableOpacity style={styles.avatarImage} onPress={() => navigation.navigate("TabsNav", { screen: "Settings" }) } >
                        <Image source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }}
                            style={{ width: 25, height: 25, resizeMode: 'cover', borderWidth: 1, borderRadius: 20  }} />
                    </TouchableOpacity>
                </View>
            </View>
            
            <TouchableOpacity style={styles.viewContainer} onPress={() => navigation.goBack() }>
                <LinearGradient 
                        colors={['#031163', '#031163']}
                        style={styles.cardContainer}
                    > 
                    <View style={styles.cardBody}>
                        <View style={styles.leftTextCon}>
                            <Text style={styles.leftTextConH1}>Available balance</Text>
                            <Text style={styles.leftTextConH6}>{'\u20A6'}{'12 487.12'}</Text>
                        </View> 
                    </View>
                </LinearGradient>   
            </TouchableOpacity>
            
            {
              showTransactionHistory == false ?
              <ScrollView>
                <View style={styles.listCard}>
                    <TouchableOpacity style={styles.card} onPress={() => { setSelectedType({ ...selectedType , type: 'Add Money', step: 0}); setModalVisible(!modalVisible)}}>
                        <Entypo name="save" size={30} color="#11438A" />
                        <Text style={styles.cardText}>Add Money to my Aftawallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => { setSelectedType({ ...selectedType , type: 'withdraw', step: 0 }); setModalVisible(!modalVisible)}}>
                        <FontAwesome5 name="piggy-bank" size={30} color="#11438A" /> 
                        <Text style={styles.cardText}>Withdraw /send money from Aftawallet</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.listCard]}>
                    <TouchableOpacity style={styles.card} onPress={() => {  setSelectedType({ ...selectedType , type: 'Save Money', step: 0 });  setModalVisible(!modalVisible)}}>
                        <Entypo name="save" size={30} color="#11438A" />
                        <Text style={styles.cardText}>Save money I have in Aftawallet</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.card} onPress={() => {  setSelectedType({ ...selectedType , type: 'Save for a goal', step: 0 });  setModalVisible(!modalVisible)}}>
                        <Ionicons name="paper-plane" size={30} color="#11438A" /> 
                        <Text style={styles.cardText}>Save for goal from Aftwallet’s money</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.listCard]}>
                    <TouchableOpacity style={styles.card} onPress={() => {  setSelectedType({ ...selectedType , type: 'Invest', step: 0 });  setModalVisible(!modalVisible)}}>
                        <AntDesign name="creditcard" size={30} color="#11438A" />
                        <Text style={styles.cardText}>Invest with money in Aftwallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}  onPress={() => setShowTransactionHistory(true)} >
                        <Ionicons name="md-newspaper-outline" size={30} color="#11438A" /> 
                        <Text style={styles.cardText}>Transactions</Text>
                    </TouchableOpacity>
                </View>
              </ScrollView>
              :
              <TransactionHistory closeThisTab={() => setShowTransactionHistory(false) } />
            }

            <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => { 
                    setModalVisible(!modalVisible);
                  }}
                >
              <View style={styles.modalContainer}>
                  <View style={styles.slideContainer}>
                      <LinearGradient colors={['#243972', '#031163']} style={styles.selectContainer}>
                          <Ionicons name="remove-outline" size={30} color="#FFFFFFB8" onPress={() => setModalVisible(!modalVisible)} />
                          <Text style={styles.modalTitle}>{ selectedType.type }</Text>
                      </LinearGradient>
                      <View style={styles.formContainer}>

                        {
                          (selectedType.type == "Add Money" && selectedType.step == '' || null ) &&
                            <View style={{ width: width - 40, }}>
                              <View>
                                <Text style={styles.formLabel}>How much are you adding</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'0000000000000'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>Choose Destination Account</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Savings'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View>
                                <TouchableOpacity style={styles.confirmButton} onPress={() => setModalConfrimIdentity(!modalConfrimIdentity)}>
                                  <Text style={styles.confirmButtonText}>Save</Text>
                                </TouchableOpacity>
                              </View>
                              <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center'}}>T&C applies</Text>
                            </View> 
                        }

                        {
                          (selectedType.type == "Save for a goal" && selectedType.step == '' || null ) &&
                            <View style={{ width: width }}>
                              <Text style={[styles.formLabel, { left: 40, top: 10 }]}>Choose Goal to save for</Text>
                              <View style={styles.piggySelection}>
                                <TouchableOpacity style={styles.selectPiggyType} onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Home' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <Entypo name="home" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Home</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.selectPiggyType} onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Car' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <FontAwesome5 name="car" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Car</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.selectPiggyType} onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Vacation' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <Ionicons name="md-umbrella" size={24} color="#192841" /> 
                                  <Text style={styles.selectPiggyTypeText}>Vacation</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.piggySelection}>
                                <TouchableOpacity style={styles.selectPiggyType}  onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Phone' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <FontAwesome name="mobile-phone" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Phone</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.selectPiggyType}  onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Education' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <MaterialCommunityIcons name="bank-outline" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.selectPiggyType}  onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Food' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <Ionicons name="fast-food" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Food</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.piggySelection}>
                                <TouchableOpacity style={styles.selectPiggyType}  onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Clothes' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <MaterialCommunityIcons name="hanger" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Clothes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.selectPiggyType}  onPress={() => {
                                                                                                  setSaveForGoal({ ...saveForGoal, type: 'Wedding' });
                                                                                                  setSelectedType({ ...selectedType, step: 1 });
                                                                                                }}>
                                  <MaterialCommunityIcons name="ring" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Wedding</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.selectPiggyType}>
                                  <Entypo name="plus" size={24} color="#192841" />
                                  <Text style={styles.selectPiggyTypeText}>Add Goal</Text>
                                </TouchableOpacity>
                              </View>
                            </View> 
                        }

                        {
                          (selectedType.type == "Save for a goal" && selectedType.step == 1 ) &&
                            <ScrollView style={{ width: width - 40,}} showsVerticalScrollIndicator={false}> 
                                <View style={{ width: width - 40, height: 150, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.formLabel}>Saving For:</Text>
                                    <Entypo name="home" size={45} color="#243972" />
                                    <Text  style={[styles.selectPiggyTypeText, { fontSize: 30 } ]}>{ saveForGoal.type }</Text>
                                </View>
                                <View>
                                  <Text style={styles.formLabel}>How much are you saving in Total</Text>
                                  <TextInput
                                      // label="Email"
                                      value={selection.amount}
                                      mode={'outlined'}
                                      placeholder={'0000000000000'}
                                      onChangeText={text => setSaveForGoal({ ...saveForGoal, amount: text })}
                                      style={styles.input}
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                  <Text style={styles.formLabel}>Save Type</Text>
                                  <TextInput
                                      // label="Email"
                                      value={selection.amount}
                                      mode={'outlined'}
                                      placeholder={'Savings'}
                                      onChangeText={text => setSaveForGoal({ ...saveForGoal, frequency: text })}
                                      style={styles.input}
                                    />
                                </View>
                                <View>
                                  <TouchableOpacity style={styles.confirmButton} onPress={() => {
                                                                                                setSaveForGoal({ ...saveForGoal, type: 'Vacation' });
                                                                                                setSelectedType({ ...selectedType, step: 2 });
                                                                                              }}>
                                    <Text style={styles.confirmButtonText}>Continue</Text>
                                  </TouchableOpacity>
                                </View>
                                <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center' }}>T&C applies</Text>
                            </ScrollView> 
                        }

                        {
                          (selectedType.type == "Save for a goal" && selectedType.step == 2 ) &&
                            <ScrollView style={{ width: width - 40,}} showsVerticalScrollIndicator={false}> 
                                <View style={{ marginTop: 20 }}>
                                  <Text style={styles.formLabel}>How much are saving per time</Text>
                                  <TextInput
                                      // label="Email"
                                      value={selection.amount}
                                      mode={'outlined'}
                                      placeholder={'0000000000000'}
                                      onChangeText={text => setSaveForGoal({ ...saveForGoal, perTime: text })}
                                      style={styles.input}
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                  <Text style={styles.formLabel}>Select Payment Method</Text>
                                  <TextInput
                                      // label="Email"
                                      value={selection.amount}
                                      mode={'outlined'}
                                      placeholder={'Savings'}
                                      onChangeText={text => setSaveForGoal({ ...saveForGoal, frequency: text })}
                                      style={styles.input}
                                    />
                                </View>
                                <View>
                                  <TouchableOpacity style={styles.confirmButton} onPress={() =>  setModalConfrimIdentity(!modalConfrimIdentity)}>
                                    <Text style={styles.confirmButtonText}>Continue</Text>
                                  </TouchableOpacity>
                                </View>
                                <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center' }}>T&C applies</Text>
                            </ScrollView> 
                        }

                        {
                          selectedType.type == "Save Money" &&
                            <ScrollView style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                              <View>
                                <Text style={styles.formLabel}>What do you want to be Save for</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Rent, Shcool fee'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>How much do you want to save</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'0000000000000'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>When do you need the Fund</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'DD/MM/YYYY'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>Save Fund from</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Aftawallet'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View>
                                <TouchableOpacity style={styles.confirmButton} onPress={() => setModalConfrimIdentity(!modalConfrimIdentity)}>
                                  <Text style={styles.confirmButtonText}>Save</Text>
                                </TouchableOpacity>
                              </View>
                              <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center'}}>T&C applies</Text>
                            </ScrollView> 
                        }

                        {
                          (selectedType.type == "withdraw" && selectedType.step == '' || null )  &&
                            <ScrollView style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                              <Text style={[styles.formLabel, { textAlign: 'center' }]}>I wish to send money to</Text>
                              <View>
                                <TouchableOpacity style={[styles.confirmButton, { marginVertical: 10 }]} onPress={() => {
                                                                                                          setSelectedType({ ...selectedType, step: 1 });
                                                                                                          setWidthdraSelect({ ...widthdraSelect, type: 'Bank account' })
                                                                                                      } }>
                                  <Text style={styles.confirmButtonText}>My Bank Account</Text>
                                </TouchableOpacity>
                              </View>
                              <View>
                                <TouchableOpacity style={[styles.confirmButton, { marginVertical: 10 }]} onPress={() => setModalConfrimIdentity(!modalConfrimIdentity)}>
                                  <Text style={styles.confirmButtonText}>Another Bank Account</Text>
                                </TouchableOpacity>
                              </View>
                              <View>
                                <TouchableOpacity style={[styles.confirmButton, { marginVertical: 10 }]} onPress={() => {
                                                                                                          setSelectedType({ ...selectedType, step: 1 });
                                                                                                          setWidthdraSelect({ ...widthdraSelect, type: 'Wallet' })
                                                                                                      } }>
                                  <Text style={styles.confirmButtonText}>My Aftawallet</Text>
                                </TouchableOpacity>
                              </View>
                              {/* <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center'}}>T&C applies</Text> */}
                            </ScrollView> 
                        }

                        {
                          (selectedType.type == "withdraw"  && selectedType.step == 1 ) &&
                          <ScrollView style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                            
                                <View>
                                  <Text style={styles.formLabel}>Withdraw from</Text>
                                  <TextInput
                                      // label="Email"
                                      value={selection.amount}
                                      mode={'outlined'}
                                      placeholder={'Savings'}
                                      onChangeText={text => setSelection(text)}
                                      style={styles.input}
                                    />
                                </View>
                              { 
                                widthdraSelect.type == "Bank account" &&
                                <> 
                                  <View style={{ marginTop: 15 }}>
                                    <Text style={styles.formLabel}>Choose Bank</Text>
                                    <TextInput
                                        // label="Email"
                                        value={selection.amount}
                                        mode={'outlined'}
                                        placeholder={'Access Bank'}
                                        onChangeText={text => setSelection(text)}
                                        style={styles.input}
                                      />
                                  </View>
                                  <View style={{ marginTop: 15 }}>
                                    <Text style={styles.formLabel}>Account Number</Text>
                                    <TextInput
                                        // label="Email"
                                        value={selection.amount}
                                        mode={'outlined'}
                                        placeholder={'1381003221'}
                                        onChangeText={text => setSelection(text)}
                                        style={styles.input}
                                      />
                                  </View>
                                </>
                              } 
                              
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>Enter Amount</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'0000000000000'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View>
                                <TouchableOpacity style={styles.confirmButton} onPress={() => setModalConfrimIdentity(!modalConfrimIdentity)}>
                                  <Text style={styles.confirmButtonText}>Proceed</Text>
                                </TouchableOpacity>
                              </View>
                              {/* <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center'}}>T&C applies</Text> */}
                            </ScrollView> 
                        }

                        {
                          (selectedType.type == "Invest" && selectedType.step == '' || null )  &&
                          <ScrollView style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                            
                              <View style={{ marginTop: 20 }}> 
                                <Text style={styles.formLabel}>How much are you Investing</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'0000000000000'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View> 
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>Investment Type</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Investment'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>  
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>Account ID</Text>
                                <TextInput
                                    // label="Email"
                                    value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'Account Number/ID/Link'}
                                    onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>   
                              <View>
                                <TouchableOpacity style={styles.confirmButton} onPress={() => setModalConfrimIdentity(!modalConfrimIdentity)}>
                                  <Text style={styles.confirmButtonText}>INVEST NOW</Text>
                                </TouchableOpacity>
                              </View>
                              <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center'}}>T&C applies</Text>
                            </ScrollView> 
                        }

                      </View>
                  </View>
              </View>
            </Modal> 

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
                    <View style={{ width: width - 50, backgroundColor: '#FFFFFF', padding: 30, justifyContent: 'center', borderRadius: 10  }}>
                      <Text style={{color: '#222222', fontFamily: 'Mulish-Bold', textAlign: 'center'}}>Confirm Identity</Text>
                      <View> 
                        <TextInput
                            // label="Email"
                            value={selection.amount}
                            mode={'outlined'}
                            placeholder={'Fathers Home Town'}
                            onChangeText={text => setSelection({ ...selection, amount: text })}
                            style={styles.input}
                          />
                      </View>
                      <View style={{ marginTop: 15 }}> 
                        <TextInput
                            // label="Email"
                            value={selection.destination}
                            mode={'outlined'}
                            placeholder={'Answer'}
                            onChangeText={text => setSelection({ ...selection, destination: text })}
                            style={styles.input}
                          />
                      </View>
                      <View>
                        <TouchableOpacity style={styles.confirmButton} onPress={() =>{ setModalConfrimIdentity(!modalConfrimIdentity); setModalVisible(!modalVisible)}}>
                          <Text style={styles.confirmButtonText}>Proceed</Text>
                        </TouchableOpacity>
                      </View>
                    </View> 
                  </View>
                </BlurView>
            </Modal>
        </View> 
    );
  }

  export default WalletScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
        backgroundColor: '#031163', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    navText:{
        fontSize: 23,
        fontFamily: 'Mulish-Bold',
    },
    avatarImage:{ 
        width: 30, 
        height: 30, 
        borderRadius: 20, 
        backgroundColor: '#031163', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    navbar:{  
        width: width,  
        marginVertical: 5,
    },
    navSelect:{
        alignItems: 'center', 
    },
    navSelectText:{ 
        fontFamily: 9,
        fontFamily: 'Mulish-Bold',
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
        textTransform: 'uppercase',
        fontFamily: 'Mulish-Bold', 
        color: '#fff', 
    },
    leftTextCon:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    cardBody:{
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }, 
    leftTextConH1:{
        fontSize: 11,
        fontFamily: 'Mulish-SemiBold',
        color: '#94AFB6', 
    },
    leftTextConH6:{
        fontSize: 24,
        color: '#fff', 
        fontFamily: 'Mulish-Bold'
    },
    listCard:{ 
      width: width,   
      justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignContent: 'center',
      padding: 10, 
    },
    card:{
      width: '45%',
      height: 130,
      elevation: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.1,
      borderRadius: 10,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      padding: 20,
    },
    cardText:{
      color: '#11438A',
      fontFamily: 'Mulish-Bold',
      fontSize: 11,
      marginTop: 15,
      textAlign: 'center'
    },
    modalContainer:{
      flex: 1,
      backgroundColor: '#333333A3', 
      justifyContent: "flex-end", 
    },
    slideContainer:{
      width: width,
      height: 375,
      justifyContent: 'flex-end',  
    },
    selectContainer:{
      width: width,
      height: 90,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      alignItems: 'center'
    },
    formContainer:{
      width: width,
      height: 285,
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
      fontSize: 12
    },
    input:{
      width: '100%',
      height: 40,
      borderColor: '#243972',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingLeft: 10
    },
    confirmButton:{
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#243972',
      borderRadius: 10,
      marginVertical: 15
    },
    confirmButtonText:{
      color: '#FFFFFF',
      fontFamily: 'Mulish-Bold',
      fontSize: 14
    },
    confirmationModal:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    piggySelection:{
      width: width,
      height: '30%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
    },
    selectPiggyType:{
      width: width / 3,
      height: 60, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectPiggyTypeText:{
      color: '#243972',
      fontSize: 12,
      fontFamily: 'Mulish-Bold',
    },
    modalTitle:{
      color: '#ffffff',
      fontSize: 30,
      fontFamily: 'Mulish-Bold',
      textTransform: 'uppercase'
    }
  }); 