import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React , { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ScrollView , Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar  } from 'react-native-paper';
import { BlurView } from 'expo-blur';
const { width, height } = Dimensions.get('window'); 

function PayAftaScreen({ navigation }) {  
    const [ modalVisible, setModalVisible ] = React.useState(false);
    const [ benefitModal, setBenefitModalVisible ] = React.useState(false);
    const [ TCModal, setTCModal ] = React.useState(false);
    const [ payAfterPage, setPayafterPage ] = React.useState(1);
    const [ updateAllShows, setUpdateAllShows ] = React.useState(false);  
    const [ selection, setSelection ] = React.useState({
                                                            amount: '',
                                                            destination: '',
                                                        });
    useEffect(() => {
        setPayafterPage(1)
    }, [])
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
                        colors={['#192841', '#192841']}
                        style={styles.cardContainer}
                    > 
                    <View style={styles.cardBody2}>
                        <View style={styles.leftTextCon}> 
                            <Text style={styles.leftTextConH6}>PayAfta</Text>
                        </View> 
                    </View>
                </LinearGradient>   
            </TouchableOpacity>
            <View style={styles.body}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <Text style={styles.emptyItem}>No Existing Record</Text> */}
                    <ScrollView style={{  }}>
                        <TouchableOpacity
                          style={styles.card} onPress={() =>  setUpdateAllShows(!updateAllShows) }>
                            <View style={styles.cardBody}>
                                <View>
                                    <Text style={styles.cardTextH1}>A & B COMPANY</Text>
                                    <Text style={styles.cardTextH2}>Electronics</Text>
                                </View>
                                <View>
                                    <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                                        <Text style={styles.cardButtonText}>{'\u20A6'}5,000</Text>
                                    </View>
                                </View>
                            </View>
                            {
                                updateAllShows == true &&
                                <View style={styles.transactionList}>  
                                    <View style={styles.transactionListElement}>
                                        <Text style={[styles.transactionListElementText, { color: '#14234A', }]}>You have 2 repayments left</Text>
                                        <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                                            <Text style={styles.cardButtonText}>Pay All Now</Text>
                                        </View>
                                    </View> 
                                    <View style={styles.transactionListElement}>
                                        <View>
                                            <Text style={styles.transactionListElementText}>INITIAL - N15,000</Text>
                                            <Text style={styles.transactionListElementTextDate}>07/02/2021</Text>
                                        </View>
                                        <View style={[styles.cardButton, { backgroundColor: '#A6A6A6' }]}>
                                            <Text style={styles.cardButtonText}>PAID</Text>
                                        </View>
                                    </View> 
                                    <View style={styles.transactionListElement}>
                                        <View>
                                            <Text style={styles.transactionListElementText}>WEEK 1 - N3900</Text>
                                            <Text style={styles.transactionListElementTextDate}>08/02/2021</Text>
                                        </View>
                                        <View style={[styles.cardButton, { backgroundColor: '#A6A6A6' }]}>
                                            <Text style={styles.cardButtonText}>PAID</Text>
                                        </View>
                                    </View> 
                                    <View style={styles.transactionListElement}>
                                        <View>
                                            <Text style={styles.transactionListElementText}>WEEK 2 - N3900</Text>
                                            <Text style={styles.transactionListElementTextDate}>15/02/2021</Text>
                                        </View>
                                        <View style={[styles.cardButton, { backgroundColor: '#A6A6A6' }]}>
                                            <Text style={styles.cardButtonText}>PAID</Text>
                                        </View>
                                    </View>  
                                    <View style={styles.transactionListElement}>
                                        <View>
                                            <Text style={styles.transactionListElementText}>WEEK 3 - N3900</Text>
                                            <Text style={styles.transactionListElementTextDate}>22/02/2021</Text>
                                        </View>
                                        <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                                            <Text style={styles.cardButtonText}>PAY NOW</Text>
                                        </View>
                                    </View>  
                                    <View style={styles.transactionListElement}>
                                        <View>
                                            <Text style={styles.transactionListElementText}>WEEK 4 - N3900</Text>
                                            <Text style={styles.transactionListElementTextDate}>24/02/2021</Text>
                                        </View>
                                        <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                                            <Text style={styles.cardButtonText}>PAY NOW</Text>
                                        </View>
                                    </View> 
                                </View>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.card}  >
                            <View style={styles.cardBody}>
                                <View>
                                    <Text style={styles.cardTextH1}>JUMIA FOODS</Text>
                                    <Text style={styles.cardTextH2}>Mobile Phone</Text>
                                </View>
                                <View>
                                    <View style={[styles.cardButton, { backgroundColor: '#192841' }]}>
                                        <Text style={styles.cardButtonText}>{'\u20A6'}34,000</Text>
                                    </View>
                                </View>
                            </View> 
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{ marginBottom: '20%' }}>
                        <TouchableOpacity style={[styles.bottomButton, { backgroundColor: '#192841' }]} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={[styles.bottomButtonText, { color: '#FFF' }]}>Click to pay afta</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={[styles.bottomButton]} onPress={() => setBenefitModalVisible(!benefitModal)}>
                            <Text style={styles.bottomButtonText}>Benefits of using pay afta</Text>
                        </TouchableOpacity> 
                        <Text style={styles.tc}>T&C applies</Text>
                    </View>
                </View>
            </View>

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
                      <LinearGradient colors={['#192841', '#192841']} style={styles.selectContainer}>
                          <Ionicons name="remove-outline" size={30} color="#FFFFFFB8" onPress={() => setModalVisible(!modalVisible)} />
                          <Text style={styles.modalTitle}>PAY AFTA</Text>
                      </LinearGradient>
                      <View style={styles.formContainer}>  
                        <View style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}> 
                            {
                                payAfterPage == 1 && 
                                <> 
                                    <View>
                                        <Text style={styles.formLabel}>I want to pay Afta to</Text>
                                        <TextInput
                                            // label="Email"
                                            value={selection.amount}
                                            mode={'outlined'}
                                            placeholder={'Account ID'}
                                            onChangeText={text => setSelection(text)}
                                            style={styles.input}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={styles.formLabel}>Description</Text>
                                        <TextInput
                                            // label="Email"
                                            value={selection.amount}
                                            mode={'outlined'}
                                            placeholder={'Paying for'}
                                            onChangeText={text => setSelection(text)}
                                            style={styles.input}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={styles.formLabel}>Total Amount</Text>
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
                                        <TouchableOpacity style={styles.confirmButton} onPress={() => setPayafterPage(payAfterPage + 1)}>
                                        <Text style={styles.confirmButtonText}>Continue</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            }
                            {
                                payAfterPage == 2 && 
                                <>                                            
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={styles.formLabel}>How much to pay Now</Text>
                                        <TextInput
                                            // label="Email"
                                            value={selection.amount}
                                            mode={'outlined'}
                                            placeholder={'Fair (50%)'}
                                            onChangeText={text => setSelection(text)}
                                            style={styles.input}
                                        />
                                    </View>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={styles.formLabel}>Duration</Text>
                                        <TextInput
                                            // label="Email"
                                            value={selection.amount}
                                            mode={'outlined'}
                                            placeholder={'1 Month'}
                                            onChangeText={text => setSelection(text)}
                                            style={styles.input}
                                        />
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.confirmButton} onPress={() => { setPayafterPage(payAfterPage - 1); setModalVisible(!modalVisible)  } }>
                                        <Text style={styles.confirmButtonText}>Continue</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            }
                            <TouchableOpacity onPress={() => setTCModal(!TCModal)}>
                                <Text style={styles.tc}>T&C applies</Text>
                            </TouchableOpacity>
                        </View>  
                      </View>
                  </View>
              </View>
            </Modal> 
            
            <Modal
                  animationType="slide"
                  transparent={true}
                  visible={benefitModal}
                  onRequestClose={() => { 
                    setBenefitModalVisible(!benefitModal);
                  }}
                >
              <View style={styles.modalContainer}>
                  <View style={[styles.slideContainer, { height: 460 }]}>
                      <LinearGradient colors={['#192841', '#192841']} style={styles.selectContainer}>
                          <Ionicons name="remove-outline" size={30} color="#FFFFFFB8" onPress={() => setBenefitModalVisible(!benefitModal)} />
                          <Text style={styles.modalTitle}>BENEFITS</Text>
                      </LinearGradient>
                      <View style={[styles.formContainer, {height: 430, justifyContent: 'center' }]}>  
                        <ScrollView style={{ width: width - 20, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >   
                                <View style={styles.benefitTextCon}>
                                    <Text> <Entypo name="dot-single" size={24} color="black" />  </Text>
                                    <Text style={styles.benefitText}> Pay Afta allows you pay for things you cannot fully afford all at once with the promise of paying later. </Text>
                                </View>
                                <View style={styles.benefitTextCon}>
                                    <Text> <Entypo name="dot-single" size={24} color="black" />  </Text>
                                    <Text style={styles.benefitText}> Pay Afta makes payment easy for you by splitting the balance into 4 equal weekly or fortnightly payment you can work on (you decide which suits you). </Text>
                                </View>
                                <View style={styles.benefitTextCon}>
                                    <Text> <Entypo name="dot-single" size={24} color="black" />  </Text>
                                    <Text style={styles.benefitText}> It can be a good alternative to loans. Loans can be risky and costly, but with Pay Afta you are save, you just pay a part of what you can afford and pay the balance later without paying hefty interest on loans. </Text>
                                </View>
                                <View style={styles.benefitTextCon}>
                                    <Text> <Entypo name="dot-single" size={24} color="black" />  </Text>
                                    <Text style={styles.benefitText}> Pay Afta helps you manage your funds by making smart money decisions, so you can do the things you need with you money and pay up what you owe later without knowing it . </Text>
                                </View>
                                <View style={styles.benefitTextCon}>
                                    <Text> <Entypo name="dot-single" size={24} color="black" />  </Text>
                                    <Text style={styles.benefitText}> It’s a seamless process; you can pay Afta to a certified business owner in just few steps. As long as the business has a Pay Afta, it’s almost too easy, just Pay Afta from the app. </Text>
                                </View>
                                <View style={styles.benefitTextCon}>
                                    <Text> <Entypo name="dot-single" size={24} color="black" />  </Text>
                                    <Text style={styles.benefitText}> No call disturbance, it works automatically. 7. You do not need to pay hefty returns; just 1% fee (of the total amount) is charged which will be paid to the business owner for agreeing to a part payment for you. We call it thank you charge.</Text>
                                </View> 
                                
                                <View>
                                    <TouchableOpacity style={styles.bottomButton} onPress={() => setBenefitModalVisible(!benefitModal)}>
                                    <Text style={styles.bottomButtonText}>Continue</Text>
                                    </TouchableOpacity>
                                </View> 
                            </View>
                        </ScrollView>  
                      </View>
                  </View>
              </View>
            </Modal> 
            
            <Modal
                  animationType="slide"
                  transparent={true}
                  visible={TCModal}
                  onRequestClose={() => { 
                    setTCModal(!TCModal);
                  }}
                >
              <View style={styles.modalContainer}>
                  <View style={[styles.slideContainer, { height: 300 }]}>
                      <LinearGradient colors={['#192841', '#14234A']} style={styles.selectContainer}>
                          <Ionicons name="remove-outline" size={30} color="#FFFFFFB8" onPress={() => setTCModal(!TCModal)} />
                          <Text style={styles.modalTitle}>T&C</Text>
                      </LinearGradient>
                      <View style={[styles.formContainer, {height: 370}]}>  
                        <ScrollView style={{ width: width - 40, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                            <View style={{ marginTop: 15 }}>   
                                <Text style={styles.benefitText}>We know it’s tempting to skip the terms and condition of this service, but it’s important to establish what you can expect from us as you use the Pay Afta, and what we expect from you </Text>
                                <Text style={styles.benefitText}>1.  This is a premium feature, to enjoy the Pay Afta feature, you will charges N100 monthly (both business and Personal Account). With this you can use the Pay Afta anytime you want to. </Text>
                                <Text style={styles.benefitText}>2.  For a personal account user, you must be a consistent user of Aftamaat with the 52weeks challenge switched on (this is on by default, so may not be a problem) or must have made savings/investments up to N20,000). You must have an initial upfront, up to half the total amount of payment you want to make. </Text>
                                <Text style={styles.benefitText}>3.  It can be difficult to create and stick to your payment plan, so Pay Afta does it for you by splitting the total amount of your balance into 4 equal weekly or fortnightly installments. This is then automatically charged from your bank. </Text>
                                <Text style={styles.benefitText}>4.  A 1% fee of the total amount is automatically added to your fee which is earned by the business owner who has been helpful to you. </Text>
                                <Text style={styles.benefitText}>5.  If the personal account owner does not make up for his payment, his savings with Aftamaat will be broken (also adhering to the savings terms) to pay up or you will be charged 10% more from your account. </Text>
                                <Text style={styles.benefitText}>6.  The Business Account owner will not be charged extra, except he exceeds 3 Pay Aftas after which he will be charged an Additional N100 for every new Pay Afta Account.</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.bottomButton} onPress={() => setTCModal(!TCModal)}>
                                <Text style={styles.bottomButtonText}>Continue</Text>
                                </TouchableOpacity>
                            </View> 
                        </ScrollView>  
                      </View>
                  </View>
              </View>
            </Modal> 
        </View> 
    );
}

export default PayAftaScreen; 

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
    cardBody2:{
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }, 
    leftTextConH6:{
        fontSize: 30,
        fontFamily: 'Mulish-SemiBold',
        color: '#fff', 
    },
    leftTextConH6:{
        fontSize: 24,
        color: '#fff', 
        fontFamily: 'Mulish-Bold'
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
    body:{ 
        flex: 3.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyItem:{
        color: '#A6A6A6',
        fontSize: 16,
        fontFamily: 'Mulish-Regular',
        marginTop: '50%'
    },
    bottomButton:{
        width: width - 50,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: '#192841',
        marginVertical: 5,
    },
    bottomButtonText:{
        color: '#192841',
        fontFamily: 'Mulish-Regular',
        fontSize: 12,
        textTransform: 'uppercase',
    },
    tc:{
        color: '#A6A6A6',
        fontSize: 11,
        fontFamily: 'Mulish-Regular', 
        textAlign: 'center',
    },
    modalContainer:{
        flex: 1,
        backgroundColor: '#333333A3', 
        justifyContent: "flex-end", 
    },
    slideContainer:{
        width: width,
        height: 350,
        justifyContent: 'flex-end',  
    },
    selectContainer:{
        width: width,
        height: 80,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center'
    },
    formContainer:{
        width: width,
        height: 300,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
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
        fontSize: 11
    },
    input:{
      width: '100%',
      height: 40,
      borderColor: '#192841',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingLeft: 10
    },
    confirmButton:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192841',
        borderRadius: 10,
        marginVertical: 15
    },
    confirmButtonText:{
        color: '#FFFFFF',
        fontFamily: 'Mulish-Regular',
        fontSize: 20
    },
    confirmationModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    modalTitle:{
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Mulish-Bold',
        textTransform: 'uppercase'
    }, 
    card:{ 
        width: width - 50,
        borderBottomWidth: 2,
        borderColor: '#E0ECDE',
        marginVertical: 5,
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
        fontSize: 13,
        fontFamily: 'Mulish-Regular',
    },
    cardTextH2:{
        color: '#205072',
        fontSize: 11,
        fontFamily: 'Mulish-Regular',
        opacity: 60,
    },
    cardButtonText:{
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
        fontSize: 11,
    },
    transactionListElementTextDate:{
        color: '#205072',
        opacity: 71,
        fontSize: 8,
    },
    benefitTextCon:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 2,
    },
    benefitText:{
        color: '#000000',
        opacity: 60,
        fontSize: 14,
        textAlign: 'left',
        marginVertical: 2.5,
        fontFamily: 'Mulish-Regular',
    }
  }); 