import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   

const { width, height } = Dimensions.get('window');

function AftamaatVideoScreen({ navigation }) {   
    const [ showModal, setShowModal ] = React.useState(false);
    return (
        <View  style={styles.container}>
            <StatusBar style="dark"  />
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRight} onPress={() => navigation.toggleDrawer() } > 
                    <Ionicons name="md-menu-outline" size={30} color="#14234A" />
                </TouchableOpacity>
                <View style={styles.headerLeft}> 
                    <Ionicons name="md-notifications-outline" style={{ right: 5 }} size={29} color="#14234A" onPress={() => navigation.navigate("TabsNav", { screen: "Notification" }) }  />
                    {/* <Entypo name="bell" /> */}
                    <TouchableOpacity style={styles.avatarImage} onPress={() => navigation.navigate("TabsNav", { screen: "Settings" }) } >
                        <Image source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }}
                            style={{ width: 25, height: 25, resizeMode: 'cover', borderWidth: 1, borderRadius: 20  }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchCon}>
                <View style={styles.formGroup}>
                    <Ionicons name="ios-search" color={'#fff'} size={20}  />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={'#fff'}
                        style={styles.searchInput}
                    />
                </View>
            </View>  
            <View style={styles.selectType}>
                <View style={[styles.selectCard, { backgroundColor: '#14234A' }]}>
                    <Text style={[styles.selectCardText, { color: '#FFF' }]}>All Videos</Text>
                </View>
                <View style={styles.selectCard}>
                    <Text style={styles.selectCardText}>Recent</Text>
                </View>
                <View style={styles.selectCard}>
                    <Text style={styles.selectCardText}>Recommended</Text>
                </View>
            </View> 

            <View style={styles.cardCon}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', marginBottom: '65%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('videoShowcase', { video : 1 }) } style={styles.card}>
                        <Image
                                source={require('../../assets/home/video.jpeg')}   
                                borderRadius={5}  
                                style={styles.cardImg}
                            />
                        <Text style={styles.cardText}>Oxford Mortgage Vest</Text>
                        <View style={styles.cardOptions}>
                            <Text style={styles.cardOptionsH2}>Okonkwo Dominiq   </Text>
                            <Text style={[styles.cardOptionsH2, {left: 15}]}> <Ionicons name="ios-eye-outline" style={{ right: 5 }} size={10} color="#404CB2"  /> 524 Views</Text>
                            <Text style={[styles.cardOptionsH2, {left: 20}]}> 71Likes</Text>
                            <Text style={[styles.cardOptionsH2, {left: 30}]}> 3 DisLikes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('videoShowcase', { video : 2 }) } style={styles.card}>
                        <Image
                                source={require('../../assets/home/image2.jpeg')}   
                                borderRadius={5}  
                                style={styles.cardImg}
                            />
                        <Text style={styles.cardText}>Oxford Mortgage Vest</Text>
                        <View style={styles.cardOptions}>
                            <Text style={styles.cardOptionsH2}>Okonkwo Dominiq   </Text>
                            <Text style={[styles.cardOptionsH2, {left: 15}]}> <Ionicons name="ios-eye-outline" style={{ right: 5 }} size={10} color="#404CB2"  /> 524 Views</Text>
                            <Text style={[styles.cardOptionsH2, {left: 20}]}> 71Likes</Text>
                            <Text style={[styles.cardOptionsH2, {left: 30}]}> 3 DisLikes</Text>
                        </View>
                    </TouchableOpacity>     
                </ScrollView>
            </View>
        </View>
    )
}

export default AftamaatVideoScreen;

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
    searchCon:{
        width,
        padding: 10,  
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    formGroup:{
        width: '95%',
        height: 41,
        backgroundColor: 'rgba(36, 57, 114, .4)',
        opacity: 100,
        justifyContent: 'center', 
        alignItems: 'center' ,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 5
    },
    searchInput:{
        flex: 1,
        left: 5,
        fontFamily: 'Mulish-Regular',
    },
    selectType:{
        width: '89%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#14234A'
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
    cardCon:{
        marginTop: 5,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '100%',
        padding: 5,
        backgroundColor: '#FFF', 
        elevation: 3,
        marginVertical: 5,
    },
    cardImg:{
        width: '100%',
        height: 168, 
    },
    cardText:{
        marginTop: 10,
        fontSize: 10,
        color: '#292828',
        fontFamily: 'Mulish-Bold',
    },
    cardOptions:{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },  
    cardOptionsH1:{
        fontSize: 8,
        color: '#404CB2',
        opacity: 100
    },
    cardOptionsH2:{
        fontSize: 8,
        color: '#404CB2',
        opacity: 100
    }
});