import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions, ScrollView , Modal} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font'; 
import { LinearGradient } from 'expo-linear-gradient';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const { width, height } = Dimensions.get('window'); 

const data = [
            {
                name: "Large Company Stock",
                size: 45,
                color: "#FFF",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Real Estate",
                size: 25,
                color: "#FFF",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Agriculture",
                size: 20,
                color: "#FFF",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Int’l Company Stocks",
                size: 8,
                color: "#FFF",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Small Company",
                size: 2,
                color: "#FFF",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            }
        ];
const chartConfig = {
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#08130D",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    strokeWidth: 10, // optional, default 3
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false // optional
                };
function InvestScreen({ navigation }) {
  const [ modalVisible, setModalVisible ] = React.useState(false); 
  const [ modalInvest, setModalInvest ] = React.useState(false); 
  const [ checkOptions1, setCheckOptions1 ] = React.useState(false);
  const [ checkOptions2, setCheckOptions2 ] = React.useState(false);
  const [ searchText, setSearchText ] = React.useState(''); 
 
    return (
        <View style={styles.container}>
            <StatusBar style="dark"  />
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } >
                    <Ionicons name="md-menu-outline" size={30} color="#1e453e" />
                </TouchableOpacity>
                <Text style={styles.navText}>Welcome, Dominiq.</Text>
                <View style={styles.headerLeft}> 
                    <Feather name="search" size={23} color="#243972" />
                </View>
            </View> 
            <TouchableOpacity style={styles.viewContainer} onPress={() => navigation.goBack() }>
                <LinearGradient 
                        colors={['#1e453e', '#1e453e']}
                        style={styles.cardTopContainer}
                    > 
                    <View style={styles.cardTopBody}>
                        <View style={styles.leftTextCon}>
                            <Text style={styles.leftTextConH1}>Available balance</Text>
                            <Text style={styles.leftTextConH6}>{'\u20A6'}{'12 487.12'}</Text>
                        </View> 
                    </View>
                </LinearGradient>   
            </TouchableOpacity>
            <View style={styles.searchBarcontainer}>
                <View style={styles.searchBar}>
                    <View style={styles.searchInput}> 
                        <TextInput
                                 style={styles.inputSearch}
                                 value={searchText} 
                                 placeholder="Search investment"
                                 onChangeText={value => setSearchText(value) } />
                    </View>
                    <View style={styles.searchCat}>
                        <Text style={{ fontSize: 10, color: '#252B42', fontFamily: 'Mulish-Bold' }}>Category</Text>
                    </View>
                    <View style={styles.searchIcon}>
                        <Feather name="search" size={20} color="#FFF" />
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginBottom: 50 }}>
                <View style={styles.listContainer}>
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={() => setCheckOptions1(!checkOptions1)} style={styles.card}>
                            <Image
                                  style={styles.cardImage}
                                  source={require('../../assets/invest/Invest_1.jpeg')} />
                            <View>
                                {
                                    checkOptions1 == false ?                                    
                                    <>
                                        <Text style={styles.cardTitle}>Oxford Agrovest</Text>
                                        <Text style={styles.cardText}>Get <Text style={{ color: '#1ED147' }}>29%%</Text> ROI in 12months…..</Text>
                                        <View style={styles.cardFooter}>
                                            <View></View>
                                            <View style={styles.cardPrice}>
                                                <Text style={styles.cardPriceText}> from {'\u20A6'}5,000 +</Text>
                                            </View>
                                        </View> 
                                    </> :
                                    <View style={{ marginTop: -60, backgroundColor: '#fff' }}>
                                        <TouchableOpacity style={styles.listOptions} onPress={() => setModalInvest(!modalInvest)} >
                                            <View style={styles.listOptionsLeft}>
                                                <MaterialIcons name="show-chart" size={16} color="white" />
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={styles.listOptionsText}>INVEST</Text>
                                            </View>
                                        </TouchableOpacity> 
                                        <TouchableOpacity style={styles.listOptions} onPress={() => setModalVisible(!modalVisible)} >
                                            <View style={styles.listOptionsLeft}>
                                                <AntDesign name="info" size={16} color="white" /> 
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={styles.listOptionsText}>ABOUT</Text>
                                            </View>
                                        </TouchableOpacity>  
                                        <View style={styles.listOptions}>
                                            <View style={styles.listOptionsLeft}>
                                                <AntDesign name="question" size={16} color="white" /> 
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={styles.listOptionsText}>FAQS</Text>
                                            </View>
                                        </View> 
                                        <View style={styles.listOptions}>
                                            <View style={styles.listOptionsLeft}>
                                                <Ionicons name="chatbubble-ellipses" size={16} color="white" /> 
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={[styles.listOptionsText]}>Chat Us</Text>
                                            </View>
                                        </View> 
                                    </View>
                                    
                                }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCheckOptions2(!checkOptions2)} style={styles.card}>
                            <Image
                                  style={styles.cardImage}
                                  source={require('../../assets/invest/Invest_1.jpeg')} />
                            <View>
                                {
                                    checkOptions2 == false ?                                    
                                    <>
                                        <Text style={styles.cardTitle}>Oxford Agrovest</Text>
                                        <Text style={styles.cardText}>Get <Text style={{ color: '#1ED147' }}>29%%</Text> ROI in 12months…..</Text>
                                        <View style={styles.cardFooter}>
                                            <View></View>
                                            <View style={styles.cardPrice}>
                                                <Text style={styles.cardPriceText}> from {'\u20A6'}5,000 +</Text>
                                            </View>
                                        </View> 
                                    </> :
                                    <View style={{ marginTop: -60, backgroundColor: '#fff' }}>
                                        <TouchableOpacity style={styles.listOptions} onPress={() => setModalInvest(!modalInvest)} >
                                            <View style={styles.listOptionsLeft}>
                                                <MaterialIcons name="show-chart" size={16} color="white" />
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={styles.listOptionsText}>INVEST</Text>
                                            </View>
                                        </TouchableOpacity> 
                                        <TouchableOpacity style={styles.listOptions} onPress={() => setModalVisible(!modalVisible)} >
                                            <View style={styles.listOptionsLeft}>
                                                <AntDesign name="info" size={16} color="white" /> 
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={styles.listOptionsText}>ABOUT</Text>
                                            </View>
                                        </TouchableOpacity>  
                                        <View style={styles.listOptions}>
                                            <View style={styles.listOptionsLeft}>
                                                <AntDesign name="question" size={16} color="white" /> 
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={styles.listOptionsText}>FAQS</Text>
                                            </View>
                                        </View> 
                                        <View style={styles.listOptions}>
                                            <View style={styles.listOptionsLeft}>
                                                <Ionicons name="chatbubble-ellipses" size={16} color="white" /> 
                                            </View>
                                            <View style={styles.listOptionsRight}>
                                                <Text  style={[styles.listOptionsText]}>Chat Us</Text>
                                            </View>
                                        </View> 
                                    </View>
                                    
                                }
                            </View>
                        </TouchableOpacity>
                    </View>  
               </View>
            </ScrollView>
            
            <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalInvest}
                  onRequestClose={() => { 
                    setModalInvest(!modalInvest);
                  }}
                >
              <View style={styles.modalContainer2}>
                  <View style={styles.slideContainer2}>
                      <LinearGradient colors={['#1e453e', '#1e453e']} style={styles.selectContainer2}> 
                          <Ionicons name="remove-outline" size={30} color="#FFF" onPress={() => setModalInvest(!modalInvest)} />
                          {/* <Text style={styles.modalTitle2}>INVEST</Text>  */}
                      </LinearGradient>
                      <View style={styles.formContainer2}> 
                           <ScrollView style={{ width: width - 40, }} showsVerticalScrollIndicator={false}>
                              <View>
                                <Text style={styles.formLabel}>Make investment from</Text>
                                <TextInput
                                    // label="Email"
                                    // value={selection.amount}
                                    mode={'outlined'} 
                                    placeholder={'Bank Account'}
                                    // onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View style={{ marginTop: 15 }}>
                                <Text style={styles.formLabel}>Amount</Text>
                                <TextInput
                                    // label="Email"
                                    // value={selection.amount}
                                    mode={'outlined'}
                                    placeholder={'0000000000000'}
                                    // onChangeText={text => setSelection(text)}
                                    style={styles.input}
                                  />
                              </View>
                              <View>
                                <TouchableOpacity style={styles.confirmButton2} onPress={() => setModalInvest(!modalInvest)}>
                                  <Text style={styles.confirmButtonText2}>INVEST</Text>
                                </TouchableOpacity>
                              </View>
                              <Text style={{color: '#737373', fontFamily: 'Mulish-Regular', textAlign: 'center'}}>T&C applies</Text>
                            </ScrollView> 
                      </View>
                  </View>
              </View>
            </Modal> 


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
                      <View style={styles.selectContainer}> 
                          <Ionicons name="arrow-back" size={16} color="#1e453e" onPress={() => setModalVisible(false)} />
                          <Text style={styles.modalTitle}>AFTA INVESTMENT</Text>
                          <View></View>
                      </View>
                      <ScrollView style={styles.formContainer}> 
                        <View>
                            <Text style={{ fontSize: 12, color: 'white', fontFamily: 'Mulish-Regular', textAlign: 'left' }}>Invest smartly in aftamaat and get 25% ROI In 3 months. You can invest any amount from N100,000. This is how your money will be invested</Text>
                        </View>
                        <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                            <PieChart
                                    data={data}
                                    width={width - 50}
                                    height={250}
                                    chartConfig={chartConfig}
                                    accessor={"size"}
                                    backgroundColor={"transparent"}
                                    paddingLeft={width / 6}
                                    // center={[50, 50]}
                                    hasLegend={false}
                                />
                        </View>    
                        <View>
                            <View style={styles.percentBreakDown}>
                                <Text style={styles.percentBreakDownText}>Large Company Stock</Text>
                                <View style={styles.percentBreakDownButton}>
                                    <Text style={styles.percentBreakDownButtonText}>45%</Text>
                                </View>
                            </View>
                            <View style={styles.percentBreakDown}>
                                <Text style={styles.percentBreakDownText}>Real Estate</Text>
                                <View style={styles.percentBreakDownButton}>
                                    <Text style={styles.percentBreakDownButtonText}>25%</Text>
                                </View>
                            </View>
                            <View style={styles.percentBreakDown}>
                                <Text style={styles.percentBreakDownText}>Agriculture</Text>
                                <View style={styles.percentBreakDownButton}>
                                    <Text style={styles.percentBreakDownButtonText}>20%</Text>
                                </View>
                            </View>
                            <View style={styles.percentBreakDown}>
                                <Text style={styles.percentBreakDownText}>Int’l Company Stocks</Text>
                                <View style={styles.percentBreakDownButton}>
                                    <Text style={styles.percentBreakDownButtonText}>8%</Text>
                                </View>
                            </View>
                            <View style={styles.percentBreakDown}>
                                <Text style={styles.percentBreakDownText}>Small Company</Text>
                                <View style={styles.percentBreakDownButton}>
                                    <Text style={styles.percentBreakDownButtonText}>2%</Text>
                                </View>
                            </View>
                        </View>
                        {/* <Text style={{ color: '#FFFFFF', fontFamily: 'Mulish-Bold', fontSize: 14, textAlign: 'center' }}>Learn More</Text> */}
                      </ScrollView>
                  </View>
              </View>
            </Modal> 

        </View> 
    );
  }

  export default InvestScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
    navbar:{  
        width: width,
        height: 20,   
        paddingLeft: 20,
        bottom: 10,
    },
    navText:{
        fontSize: 23,
        fontFamily: 'Mulish-Regular',
    },
    navSelect:{
        alignItems: 'center',
        marginVertical: 5, 
    },
    navSelectText:{ 
        fontFamily: 'Mulish-Bold',
    },
    viewContainer:{ 
        width: width,  
        height: 84
    },
    cardTopContainer: {
        flex: 1,
        width: width - 40,  
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 20,
        marginLeft: 20, 
        marginTop: 10,
    },
    cardTopHeader:{
        alignItems: 'center',
    },
    cardTopTextHeader:{
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
    cardTopBody:{
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }, 
    leftTextConH1:{
        fontSize: 11,
        opacity: 100,
        fontFamily: 'Mulish-Bold',
        color: '#94AFB6', 
    },
    leftTextConH6:{
        fontSize: 24,
        color: '#fff', 
        fontFamily: 'Mulish-Bold'
    },
    searchBarcontainer:{ 
        width: width - 40,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    searchBar:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center', 
    },
    searchInput:{
        width: '55%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .9,
        borderColor: '#E5E5E5',
        borderTopLeftRadius: 10,
    },
    inputSearch:{
        width: '100%',
        paddingLeft: 10,
        fontSize: 10,
        fontFamily: 'Mulish-Bold',
    },
    searchCat:{
        width: '30%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .9,
        borderColor: '#E5E5E5',
    },
    searchIcon:{
        width: '15%',
        height: 40,
        backgroundColor: '#1e453e',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .9,
        borderColor: '#E5E5E5',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    listContainer:{  
        width: width - 40,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    cardContainer:{ 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginVertical: 10,
    },
    card:{
        width: '48%',
        backgroundColor: '#FFFFFF',
        opacity: 100,
        padding: 10,
        borderRadius: 10,
    },
    cardImage:{
        width: '100%',
        height: 132,
        resizeMode: 'contain'
    },
    cardTitle:{
        color: '#121212',
        opacity: 100,
        fontFamily: 'Mulish-Bold',
        fontSize: 16,
        marginTop: 5
    },
    cardText:{
        color: '#252B42',
        opacity: 100,
        fontFamily: 'Mulish-Regular',
        fontSize: 8,
    },
    cardFooter:{
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    cardPrice:{
        // width: '50%',
        height: 30,
        backgroundColor: '#EDEDED',
        opacity: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
    },
    cardPriceText:{
        color: '#252B42',
        opacity: 100,
        fontSize: 10,
        fontFamily: 'Mulish-Bold',
    },
    listOptions:{
        width: '100%', 
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#1e453e',
        borderRadius: 5,
        marginVertical: 5,
        zIndex: 1,
    },
    listOptionsLeft:{
        width: '20%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e453e',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    listOptionsRight:{
        width: '80%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5EBF1',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    listOptionsText:{
        color: '#1e453e',
        textAlign: 'center',
        fontFamily: 'Mulish-Bold',
        textTransform: 'uppercase'
    },
    modalContainer:{
        width: width,
        height: height,
    },
    slideContainer:{ 
        backgroundColor: '#1e453e',
        width: '100%',
        height: '100%',
    },
    selectContainer:{
        width: width,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 20,
    },
    modalTitle:{
        color: '#000000',
        fontFamily: 'Mulish-Bold',
        right: 40,
        fontSize: 16
    },
    formContainer:{
        width: '100%',
        height: '150%',
        padding: 20,
    },
    input:{
      width: '100%',
      height: 40,
      borderColor: '#1e453e',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingLeft: 10
    },
    percentBreakDown:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E0ECDE',
        marginVertical: 5
    },
    percentBreakDownText:{
        color: '#FFF',
        fontFamily: 'Mulish-Regular',
        fontSize: 11,
    },
    percentBreakDownButton:{
        width: '20%',
        height: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 20,
    },
    percentBreakDownButtonText:{
        color: '#1e453e',
        opacity: 100,
        fontFamily: 'Mulish-Bold',
        fontSize: 11,
    },
    modalContainer2:{
        flex: 1,
        backgroundColor: '#333333A3', 
        justifyContent: "flex-end", 
    },
    slideContainer2:{
        width: width,
        height: 348,
        justifyContent: 'flex-end',  
    },
    selectContainer2:{
        width: width,
        height: 68,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,  
        justifyContent: 'flex-start', 
        alignItems: 'center',
        backgroundColor: '#FFF',
        // padding: 20,
    },
    modalTitle2:{
        color: '#FFF',
        fontFamily: 'Mulish-Bold',
        fontSize: 25,
    },
    formContainer2:{
        width: width,
        height: 270,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
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
    confirmButton2:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e453e',
        borderRadius: 10,
        marginVertical: 15
    },
    confirmButtonText2:{
        color: '#FFFFFF',
        fontFamily: 'Mulish-Bold',
        fontSize: 20
    }, 
  }); 