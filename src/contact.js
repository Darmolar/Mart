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
function ContactScreen({ navigation }) {
  const [ modalVisible, setModalVisible ] = React.useState(false); 
  const [ modalInvest, setModalInvest ] = React.useState(false); 
  const [ checkOptions, setCheckOptions ] = React.useState(false);
  const [ searchText, setSearchText ] = React.useState(''); 
 
    return (
        <View style={styles.container}>
            <StatusBar style="dark"  />
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } >
                    <Ionicons name="md-menu-outline" size={30} color="#14234A" />
                </TouchableOpacity>
                <Text style={styles.navText}>Contact Us.</Text>
                <View style={styles.headerLeft}>  
                    <Ionicons name="md-notifications-outline" style={{ right: 5 }} size={29} color={'#243972'} onPress={() => navigation.navigate("TabsNav", { screen: "Notification" }) }  />
                    {/* <Entypo name="bell" /> */}
                    <TouchableOpacity style={styles.avatarImage} onPress={() => navigation.navigate("TabsNav", { screen: "Settings" }) } >
                        <Image source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }}
                            style={{ width: 25, height: 25, resizeMode: 'cover', borderWidth: 1, borderRadius: 20  }} />
                    </TouchableOpacity>
                </View>
            </View>  
            <View style={styles.body}>
                <Text style={{ color: '#000000', fontSize: 10, fontFamily: 'Mulish-Regular' }}>Get in touch and let us know how we can help</Text>

                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Leave your message'}
                        placeholderTextColor={'#FFFFFF'}
                        multiline={true}
                    />
                    <Feather name="edit" size={29} color={'#fff'}  /> 
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>

                <View style={styles.others}>
                    <Text style={[styles.othersText, {marginTop: 40}]}>Call Us</Text>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ionicons name="chatbubble-ellipses-sharp" size={40} color="#205072" />
                        <Text style={styles.othersText}>Chat With Us</Text>
                    </View>
                    <Text style={[styles.othersText, {marginTop: 40}]}>Send mail</Text>
                </View>
            </View> 
        </View> 
    );
  }

  export default ContactScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    header:{
        flexDirection: 'row',
        width: width,
        height: 50, 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 40
    },
    headerRight:{
        flexDirection: 'row',
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
        fontFamily: 'Mulish-Bold',
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
        height: 100
    },
    body:{
        marginTop: '20%',
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox:{
        flexDirection: 'row',
        width: width - 20,
        height: 242,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    input:{
        width: '90%',
        fontFamily: 'Mulish-Bold',
        fontSize: 18,
        color: '#fff'
    },
    button:{
        marginTop: 15,
        width: '70%',
        height: 38,
        backgroundColor: '#14234A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#FFF',
        fontFamily: 'Mulish-Bold',
        fontSize: 14,
    },
    others:{
        marginTop: '15%',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    othersText:{
        color: '#205072',
        fontFamily: 'Mulish-Bold',
    }
  }); 