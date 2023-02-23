import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ScrollView, SafeAreaView , Button} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font'; 
import { Avatar, Badge } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

function NotificationScreen({ navigation }) { 

    return (
      <View style={styles.container}>
        <StatusBar style="auto"  />
        
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } > 
                <Ionicons name="md-menu-outline" size={30} color={'#192841'} />
            </TouchableOpacity>
            <Text style={styles.navText}>Welcome, Dominiq.</Text>
            <View style={styles.headerLeft}>
                <Ionicons name="md-notifications-outline" style={{ right: 5 }} size={29} color={'#192841'} onPress={() => navigation.navigate("TabsNav", { screen: "Notification" }) }  />
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
                        <Text style={styles.leftTextConH6}>Notification</Text>
                    </View> 
                </View>
            </LinearGradient>   
        </TouchableOpacity> 
        <View style={styles.body}>
            <View style={styles.selectType}>
                <View style={[styles.selectCard, { backgroundColor: '#14234A' }]}>
                    <Text style={[styles.selectCardText, { color: '#FFF' }]}>All</Text>
                </View>
                <View style={styles.selectCard}>
                    <Text style={styles.selectCardText}>Important</Text>
                </View>
                <View style={styles.selectCard}>
                    <Text style={styles.selectCardText}>Transactions</Text>
                </View>
            </View>
            <View style={styles.listCard}>
                <View style={styles.list}>
                    <View style={styles.listLeft}>
                        <Badge size={10} style={{ top: 10, right: 8, zIndex: 1 }}>1</Badge>
                        <Avatar.Text size={35} label="A" backgroundColor="#6C3BD0" style={{ fontFamily: 'Mulish-ExtraBold' }} />
                    </View>
                    <View style={styles.listMiddle}>
                        <Text style={styles.listMiddleH1}>Aftamaat Admin</Text>
                        <Text style={styles.listMiddleH2}>Do not respond to calls from persons claiming to Be Aftamaat aen</Text>
                    </View>
                    <View style={styles.listRight}>
                        <Text style={styles.listRightH1}>2days</Text>
                    </View>
                </View>
                <View style={styles.list}>
                    <View style={styles.listLeft}>
                        <Badge size={10} style={{ top: 10, right: 8, zIndex: 1 }}>1</Badge>
                        <Avatar.Text size={35} label="A" backgroundColor="#6C3BD0" style={{ fontFamily: 'Mulish-ExtraBold' }} />
                    </View>
                    <View style={styles.listMiddle}>
                        <Text style={styles.listMiddleH1}>Aftamaat Admin</Text>
                        <Text style={styles.listMiddleH2}>Do not respond to calls from persons claiming to Be Aftamaat aen</Text>
                    </View>
                    <View style={styles.listRight}>
                        <Text style={styles.listRightH1}>2days</Text>
                    </View>
                </View>
            </View>
        </View>
      </View>
    );
}

export default NotificationScreen; 

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
        backgroundColor: '#192841', 
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
        backgroundColor: '#192841', 
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
        width: width - 40, 
        alignSelf: 'center',
    },
    selectType:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#14234A',
        marginTop: 10,
    },
    selectCard:{
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    selectCardText:{
        color: '#14234A',
        fontSize: 12,
        fontFamily: 'Mulish-Bold',
    },
    listCard:{
        marginTop: 20,
    },
    list:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    listLeft:{  
        width: '15%'
    },
    listMiddle:{
        width: '70%'
    },
    listMiddleH1:{
        fontSize: 13,
        color: '#010101',
        fontFamily: 'Mulish-Bold',
    },
    listMiddleH2:{ 
        fontSize: 8,
        color: '#A6A6A6',
        fontFamily: 'Mulish-Regular',
    },
    listRight:{
        width: '15%'
    },
    listRightH1:{
        fontSize: 10,
        color: '#010101',
        fontFamily: 'Mulish-Regular',
    }
});