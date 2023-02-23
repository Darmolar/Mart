import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView, Pressable, Modal, Alert } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import {Picker, PickerIOS} from '@react-native-picker/picker';

import CircularProgress from './components/Circular';
import SaveMoneyScreen from './components/saveMoney';
import SendorWithdrawScreen from './components/sendorWithdraw';
import InvestScreen from './components/invest';

const { width, height } = Dimensions.get('window');
 
function BusinessHomeScreen({ navigation }) {  
    const [ currentType, setCurrentType ] = React.useState('save');
    const [ currentColor, setCurrentColor ] = React.useState('#243972') ;
    const [ modalVisible, setModalVisible] = useState(false);
    const [ modalType, setModalType] = useState('');
    
    const openModal = (type) => {
        setModalType(type);
        setModalVisible(true);
    }

    const closeModal = () => { 
        setModalType('');
        setModalVisible(false);
    }
    
    return (
        <View  style={styles.container}>
            <StatusBar style="dark"  /> 
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} > 
                    {/* <Ionicons name="md-menu-outline" size={30} color={currentColor} /> */}
                </TouchableOpacity>
                <View style={styles.headerLeft}>
                    <Ionicons name="ios-search-outline" style={{ right: 5 }} size={29} color={currentColor} />
                    <Ionicons name="md-notifications-outline" style={{ right: 5 }} size={29} color={currentColor} onPress={() => navigation.navigate("TabsNav", { screen: "Notification" }) }  />
                    {/* <Entypo name="bell" /> */}
                    <TouchableOpacity style={styles.avatarImage} onPress={() => navigation.navigate("TabsNav", { screen: "Settings" }) } >
                        <Image source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }}
                            style={{ width: 25, height: 25, resizeMode: 'cover', borderWidth: 1, borderRadius: 20  }} />
                    </TouchableOpacity>
                </View>
            </View> 
            <ScrollView style={styles.body}>
                <View style={styles.topHead}>
                    <View>
                        <Text style={styles.topHeadH1}>A+ Group</Text>
                        <Text style={styles.topHeadH1}>Overview</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}> 
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', padding: 10, }}> 
                        <CircularProgress  percent={60} amount={1500} />
                    </View>
                    <View style={{  width: '45%', justifyContent: 'center', padding: 10, }}>
                        <Text style={styles.cardText}>Total</Text>
                        <Text style={styles.cardText}>Savings</Text>
                    </View>
                    <View style={{  width: '30%', justifyContent: 'flex-end', padding: 10, }}>
                        <Text style={styles.cardTextSM}>Last Updated: 01/12/20</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', padding: 10, }}> 
                        <CircularProgress  percent={60} amount={1500} />
                    </View>
                    <View style={{  width: '45%', justifyContent: 'center', padding: 10, }}>
                        <Text style={styles.cardText}>Total</Text>
                        <Text style={styles.cardText}>Investment</Text>
                    </View>
                    <View style={{  width: '30%', justifyContent: 'flex-end', padding: 10, }}>
                        <Text style={styles.cardTextSM}>Last Updated: 01/12/20</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', padding: 10, }}> 
                        <CircularProgress  percent={60} amount={1500} />
                    </View>
                    <View style={{  width: '45%', justifyContent: 'center', padding: 10, }}>
                        <Text style={styles.cardText}>Total Number</Text>
                        <Text style={styles.cardText}>Of Transactions</Text>
                    </View>
                    <View style={{  width: '30%', justifyContent: 'flex-end', padding: 10, }}>
                        <Text style={styles.cardTextSM}>Last Updated: 01/12/20</Text>
                    </View>
                </View>            
                <View style={{ marginTop: 10 }}>
                    <Pressable style={styles.button} onPress={() => openModal('save')}>
                        <Text style={styles.buttonText}>Save Money</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => openModal('invest')}>
                        <Text style={styles.buttonText}>Invest Money</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('BusinessTransaction')}  >
                        <Text style={styles.buttonText}>Transactions</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => openModal('withdraw')}>
                        <Text style={styles.buttonText}>Send/Withdraw</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('BusinessPayAfta')} style={styles.button}>
                        <Text style={styles.buttonText}>Business PayAfta</Text>
                    </Pressable> 
                </View>
            </ScrollView>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible} 
                >
                <View style={styles.centeredView}>
                    { modalType == 'save' &&  <SaveMoneyScreen onClick={closeModal} /> }
                    { modalType == 'invest' &&  <InvestScreen onClick={closeModal} /> }
                    { modalType == 'withdraw' &&  <SendorWithdrawScreen onClick={closeModal} /> } 
                </View>
            </Modal>
        </View>
    );
  }

  export default BusinessHomeScreen;

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
    body:{ 
        width: width,
        // alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    card:{
        width: '100%',
        height: 100,
        borderWidth: 2,
        borderColor: '#243972',
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardText:{
        fontFamily: 'Mulish-Bold',
        fontSize: 20,
        color: '#14234A', 
    },
    cardTextSM:{
        fontFamily: 'Mulish-Regular',
        fontSize: 8,
        color: '#14234A', 
    }, 
    button:{
        width: '100%',
        height: 40,
        backgroundColor: '#243972',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 3,
    },
    buttonText:{
        color: '#FFF',
        fontFamily: 'Mulish-Bold',
        fontSize: 12,
    },
    topHead:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    topHeadH1:{
        fontFamily: 'Mulish-Bold',
        fontSize: 17,
        color: '#14234A', 
    },
    centeredView: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    
  });