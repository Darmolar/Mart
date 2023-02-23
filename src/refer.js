import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView , Button, Modal } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Badge } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

function ReferScreen({ navigation }) {
    const [ showModal, setShowModal ] = React.useState(false);
    const [ showFaq, setShowFaq ] = React.useState(false); 
    return (
      <View style={styles.container}>
        <StatusBar style="dark" /> 
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } >  
                <Ionicons name="arrow-back" size={20} color={'#031163'}   onPress={() => navigation.goBack() } />
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
         <View style={styles.cardHeader}>
            <View style={styles.cardHeaderBody}>
                <View style={styles.rightCard}>
                    <Avatar.Text size={25} label="A" backgroundColor="#6C3BD0" style={{ fontFamily: 'Mulish-ExtraBold', color: '#FFF' }} />
                </View>
                <View style={styles.leftCard}>
                    <Text style={styles.cardHeaderBodyH1}>Your Earnings</Text>
                    <Text style={styles.cardHeaderBodyH2}>N6,050.00</Text>
                </View>
            </View>
            <View style={styles.cardHeaderImage}>
                <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../assets/refer.png')}>

                </ImageBackground>
            </View>
        </View>
        <View style={styles.body}>
            <View style={styles.listCard}>
                <Text style={styles.listCardText}>Get up to N1,000 for every friend you invite</Text>
                <View style={styles.socials}>
                    <FontAwesome5 name="whatsapp-square" size={30} color="#61FD7D" />
                    <Entypo name="facebook-with-circle" size={30} color="#3B5998" />
                    <View style={{ width: 33, height: 33, borderRadius: 25, backgroundColor: '#0A80F8', justifyContent: 'center', alignItems: 'center' }}>
                        <Feather name="message-circle" size={28} color="#FFF" />
                    </View>
                    <View style={{ width:33, height: 33, borderRadius: 25, backgroundColor: '#0A80F8', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="dots-three-horizontal" size={20} color="#FFF" />
                    </View>
                </View>
                <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                    <LinearGradient
                            colors={['#14234A', '#243972']}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Redeem</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => { 
                setShowModal(!showModal);
            }}
            >
            <View style={styles.modalContainer}>
                <View style={styles.modalBody}>
                    <View style={styles.modalBodyHeader}>
                        <Text style={styles.modalBodyHeaderText}>Redeem Referral Earnings</Text>
                    </View>
                    <View style={styles.modalBodyCon}>
                        <View style={styles.modalContainerBody}>
                            <View style={styles.formGroup}>
                                <Image 
                                        style={{ width: '100%', height: 220, marginVertical: 10, resizeMode: 'contain' }}
                                        source={{ uri: 'https://static.turbosquid.com/Preview/2019/05/18__20_27_35/COLOR_01.jpgA5D51AFE-BCA3-4CC4-9B6B-C8BE43456A76Large.jpg' }} />
                                <TextInput 
                                        style={styles.input}
                                        placeholder={'Enter Amount to Redeem to Aftawallet'}
                                        placeholderTextColor={'#494949'}
                                    />
                                    <LinearGradient
                                            colors={['#243972', '#243972']}
                                            style={[styles.button, { width: '70%', marginVertical: 10 }]}
                                        >
                                        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                                            <Text style={styles.buttonText}>Redeem</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    <Text style={{ color: '#737373', fontSize: 10, fontFamily: 'Mulish-Regular' }}>T&C applies</Text>
                            </View>
                        </View>
                    </View>
                    
                </View>
                
            </View>
        </Modal>
    
        </View>
     </View>
    );
}

export default ReferScreen; 

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
    navHeader:{
        marginTop: 40, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText:{
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Mulish-Regular',  
    },
    headerTextSM:{
        color: '#14234A',
        fontSize: 10,
        fontFamily: 'Mulish-Bold',
    },
    body:{
        width,
        height: '50%',
        marginVertical: 0,
    }, 
    cardHeader:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    cardHeaderBody:{
        width: '40%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 15,
        marginTop: 20,
    },
    rightCard:{
        width: 28,
        height: 28,
        borderRadius: 90,
        right: 15, 
        borderWidth: 2,
        borderColor: '#fff',
    },
    leftCard:{
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardHeaderBodyH1:{
        color: '#6C3BD0',
        fontSize: 10,
        fontFamily: 'Mulish-Regular', 
    },
    cardHeaderBodyH2:{
        color: '#205072',
        fontSize: 20,
        fontFamily: 'Mulish-Regular', 
    },
    cardHeaderImage:{
        width: '90%',
        height: 300,
        backgroundColor: 'grey',
        zIndex: 1,
        borderRadius: 10, 
        top: 10,
    },
    body:{
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listCardText:{
        color: '#5C0F98',
        fontFamily: 'Mulish-Regular', 
        fontSize: 13
    },
    socials:{
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText:{
        color: '#FFF',
        fontFamily: 'Mulish-Regular', 
    },
    modalContainer:{
        width, 
        height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalBody:{
        width: '90%',
        height: 425,
        backgroundColor: '#FFF',
        borderRadius: 20,
    },
    modalBodyHeader:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 0.9,
        borderColor: '#05274314',
    },
    modalBodyHeaderText:{
        color: '#1565D8',
        textAlign: 'center',
        fontFamily: 'Mulish-Regular', 
        fontSize: 12, 
    },
    modalBodyCon:{
        width: '100%',
    },
    modalContainerBody:{
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    formGroup:{ 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        width: '80%',
        height: 37,
        borderRadius: 10,
        borderColor: '#14234A',
        borderWidth: 1,
        fontSize: 10,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
    }
});