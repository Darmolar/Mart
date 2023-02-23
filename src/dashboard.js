import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Linking, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import {Picker, PickerIOS} from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

import { CardView } from './components/CardView';
import { GameView } from './components/GameView';

function HomeScreen({ navigation }) {  
    const [ currentType, setCurrentType ] = React.useState('save');
    const [ currentColor, setCurrentColor ] = React.useState('#243972')
    const [ currentImage, setCurrentImage ] = React.useState(require('../assets/home/savings.jpeg'))
   
    const chnageType = (event) => { 
        if(event == 'save' ){ 
            setCurrentColor('#192841');
            setCurrentType(event);
            setCurrentImage(require('../assets/home/savings.jpeg'));
        }else if(event == 'invest'){ 
            setCurrentColor('#1e453e');
            setCurrentType(event);
            setCurrentImage(require('../assets/home/investment.jpeg'));
        }else{ 
            setCurrentColor('#031163');
            setCurrentType(event);
            setCurrentImage(require('../assets/home/aftawallet.jpeg'));
        }
    }

    const openUrl = async (url) => {
        await Linking.openURL(url);
    }

    return (
        <View  style={styles.container}>
            <StatusBar style="dark"  /> 
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } > 
                    <Ionicons name="md-menu-outline" size={30} color={currentColor} />
                </TouchableOpacity> 
                <View style={styles.headerLeft}>
                    <Ionicons name="md-notifications-outline" style={{ right: 5 }} size={29} color={currentColor} onPress={() => navigation.navigate("TabsNav", { screen: "Notification" }) }  />
                    {/* <Entypo name="bell" /> */}
                    <TouchableOpacity style={styles.avatarImage} onPress={() => navigation.navigate("TabsNav", { screen: "Settings" }) } >
                        <Image source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }}
                            style={{ width: 25, height: 25, resizeMode: 'cover', borderWidth: 1, borderRadius: 20  }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: '20%' }}>
                <View style={[styles.viewContainer, ]}>
                    <View style={{width: width - 40 }}>
                        { 
                            currentType == 'save' && 
                            <CardView color1={'#192841'} color2={'#192841'} amount={'12,300'} type={'Savings'}  clickMe={() => navigation.navigate("TabsNav", { screen: "Save" }) }/>
                        } 
                        {
                            currentType == 'invest' && 
                            <CardView color1={'#1e453e'} color2={'#1e453e'} amount={'1,200,000'} type={'Investment'} clickMe={() => navigation.navigate("TabsNav", { screen: "Invest" }) }/>
                        } 
                        {
                            currentType == 'aftawallet' && 
                            <CardView color1={'#031163'} color2={'#031163'} amount={'100,300'} type={'AFTAWallet'} clickMe={() => navigation.navigate("TabsNav", { screen: "Wallet" }) }/>
                        }  

                        <View style={styles.navCon}>
                            <Pressable style={[styles.navConButton, { borderColor: currentColor }]} onPress={() => chnageType('save')}>
                                <Ionicons name={ currentType == 'save' ? "save" : "save-outline"} size={20} color={currentColor} />
                                <Text style={styles.navConButtonText}>Save</Text>
                            </Pressable>
                            <Pressable style={[styles.navConButton, { borderColor: currentColor }]} onPress={() => chnageType('invest')}>
                                <Ionicons name={ currentType == 'invest' ? "pie-chart" : "pie-chart-outline"} size={20} color={currentColor} />
                                <Text style={styles.navConButtonText}>Invest</Text>
                            </Pressable>
                            <Pressable style={[styles.navConButton, { borderColor: currentColor }]} onPress={() => chnageType('aftawallet')}>
                                <Ionicons name={ currentType == 'aftawallet' ? "wallet" : "wallet-outline"} size={20} color={currentColor} />
                                <Text style={styles.navConButtonText}>AftaWallet</Text>
                            </Pressable>
                        </View> 
                    </View>
                </View> 
                <View style={styles.viewContainer}>
                    <View style={styles.banner}>
                        <ImageBackground 
                            style={{ flex: 1, overflow: 'hidden' }}
                            imageStyle={{ borderRadius: 10}}
                            resizeMode="cover"
                            source={ currentImage} >
                        </ImageBackground>
                    </View>
                </View> 
                
                <View style={[styles.viewContainer, ]}>
                    <View style={{ width: width - 40, }}>
                        <Text style={[styles.dailyText,  { left: 5, color: currentColor}  ]}>Other Features</Text> 
                        <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between' }}>
                            <GameView icon={<FontAwesome5 name="file-video" size={30} color={currentColor} />} color={currentColor} type={'AftaVideos'} clickMe={() => navigation.navigate("TabsNav", { screen: "AftamaatVideo" })  }/>
                            <GameView icon={<Ionicons name="people-outline" size={30} color={currentColor} /> } color={currentColor} type={'Pay Afta'} clickMe={() => navigation.navigate("TabsNav", { screen: "PayAfta" }) }/>
                            <GameView icon={<Ionicons name="md-game-controller" size={30} color={currentColor} />} color={currentColor} type={'Play2Win'} clickMe={() => openUrl('https://mobile.gtbet.bet/live') }/>
                            <GameView icon={<Ionicons name="people-outline" size={30} color={currentColor} /> } color={currentColor} type={'Refer and Earn'} clickMe={() =>  navigation.navigate("TabsNav", { screen: "Refer" })}/>
                        </View> 
                    </View>
                </View>
                
                <View style={styles.viewContainer}>
                    <View>
                        <Text style={[styles.dailyText, { color: currentColor, textAlign: 'left'  } ]}>Daily Tasks</Text>
                        <View style={[styles.dailyTask, { borderColor: currentColor, }]}>
                            <View style={{ width: '30%' }}>
                                <Image style={{ flex: 1 }} source={{ uri: 'data:image/jpeg;base64,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' }} />
                            </View>
                            <View style={{ width: '70%', padding: 10 }}>
                                <Text style={[styles.dailyTaskTextH1, { color: currentColor }]}>Save N5,000 </Text>
                                <Text style={[styles.dailyTaskText, { color: currentColor }]}>Save today to qualify for a Car</Text>
                            </View>
                        </View> 
                        <View style={[styles.dailyTask, { borderColor: currentColor, }]}>
                            <View style={{ width: '30%' }}>
                                <Image style={{ flex: 1 }} source={{ uri: 'data:image/jpeg;base64,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' }} />
                            </View>
                            <View style={{ width: '70%', padding: 10 }}>
                                <Text style={[styles.dailyTaskTextH1, { color: currentColor }]}>Save N5,000 </Text>
                                <Text style={[styles.dailyTaskText, { color: currentColor }]}>Save today to qualify for a Car</Text>
                            </View>  
                        </View> 
               
                    </View>
               </View> 
            </ScrollView>  
      </View>
    );
  }

  export default HomeScreen;

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
    navbar:{   
        width: width,  
        paddingLeft: 20,
    },
    navText:{
        fontSize: 20,
        color: '#192841',
        fontFamily: 'Mulish-Regular',
    },
    navSelect:{
        top: -10,
        alignItems: 'center',  
        justifyContent: 'center',  
    },
    navSelectText:{ 
        width: width / 3,
        fontSize: 11,
        color: '#000', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: 'Mulish-Bold',
        textTransform: 'capitalize', 
    },
    navSelectTextCont:{
        width: width / 2,
        fontSize: 11,
        color: 'red',
        fontFamily: 'Mulish-Bold',
        textTransform: 'capitalize', 
    },
    navCon:{
        marginTop: 10,
        width: width - 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end', 
    },
    navConButton:{
        width: '33%',
        padding: 2,
        justifyContent: 'center', 
        alignItems: 'center',
        // borderWidth: .7,
        // borderColor: 'grey',
        borderRadius: 10,
    },
    navConButtonText:{ 
        fontSize: 13,
        fontFamily: 'Mulish-Bold',
        textTransform: 'capitalize', 
    },
    viewContainer:{ 
        width: width,  
        marginVertical: 10, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    banner:{  
        width: width - 40,
        height: 160,      
        marginTop: -10,
    },
    dailyTask:{
        flexDirection: 'row',
        width: width - 40,
        height: 68,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    dailyText:{
        fontSize: 13,
        fontFamily: 'Mulish-Bold',
        color: '#192841',
        textTransform: 'uppercase',
        marginBottom: 5,
        textAlign: 'left',
    },
    dailyTaskTextH1:{ 
        fontSize: 14,
        color: '#192841',
        fontFamily: 'Mulish-Bold',
    },
    dailyTaskText:{
        fontSize: 12,
        color: '#192841',
        fontFamily: 'Mulish-Regular',
    }
  });