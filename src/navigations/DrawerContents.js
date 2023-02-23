import { StatusBar } from 'expo-status-bar';
import React from "react";  
import { useWindowDimensions, StyleSheet, View, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, MaterialCommunityIcons, Feather, MaterialIcons, FontAwesome, Entypo, Fontisto } from '@expo/vector-icons';   
import { 
        Drawer, 
        Avatar, 
        Title,
        Caption,
        Paragraph,
        Text,
        TouchableRipple,
        Switch, 
    } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

const { width, height } = Dimensions.get('window');

export function DrawerContents({props, navigation}, ){
    const [isSwitchOn, setIsSwitchOn] = React.useState(false); 
    
    return ( 
        <View style={{ flex: 1 }}> 
            <StatusBar style="light" backgroundColor="#14234A"  />
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <View style={styles.containerHead}>
                        <View style={{ alignSelf: 'flex-end', top: 40, right: 30 }}>
                            <Fontisto name="bell-alt" size={15} color="white" />
                        </View>
                        <View style={styles.profileContainer}>
                            {/* <Avatar.Image 
                                source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }}
                                size={70}
                                style={{ borderWidth: 15, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' }}
                            /> */}
                            <Avatar.Text  
                                label="AM"
                                size={88}
                                style={{ borderWidth: 2, borderColor: '#fff', backgroundColor: '#243972', justifyContent: 'center', alignItems: 'center' }}
                            />
                            <Text style={styles.title}>AKINMUSIRE MARTINS</Text>
                            <Text style={styles.titleSpan}>0192837465</Text>
                        </View>
                    </View>
                    <View style={styles.containerBody}>
                        <Drawer.Section>
                            <DrawerItem
                               icon={({color, size}) => (
                                    <MaterialCommunityIcons 
                                        name="content-save-move-outline" 
                                        size={size} color={color}
                                    />
                               )}  
                               label={"Save"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("TabsNav", { screen: "Save" }) } 
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => (
                                    <MaterialCommunityIcons 
                                        name="chart-timeline-variant"
                                        size={size} color={color} 
                                    />
                               )}  
                               label={"Invest"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("TabsNav", { screen: "Invest" }) } 
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => ( 
                                    <Octicons name="briefcase" size={size} color={color} />
                               )}  
                               label={"Business Account"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => console.log('hello')}
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => (
                                    <MaterialCommunityIcons 
                                        name="chart-timeline-variant"
                                        size={size} color={color} 
                                    />
                               )}  
                               label={"Refer & Earn"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("TabsNav", { screen: "Refer" }) } 
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => ( 
                                  <FontAwesome name="credit-card" size={size} color={color}/>
                               )}  
                               label={"Withdraw"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'} 
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("TabsNav", { screen: "Save" }) } 
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => (  
                                    <MaterialCommunityIcons name="cash-usd-outline" size={size} color={color}/>
                               )}  
                               label={"My Money"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("TabsNav", { screen: "My Money" }) } 
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => ( 
                                    <MaterialIcons name="contact-support" size={size} color={color}  />
                               )}  
                               label={"Contact Us"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                            //    onPress={() => console.log('hello')}
                               onPress={() => navigation.navigate("Contact")}
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => ( 
                                    <Ionicons name="settings-sharp" size={size} color={color} />
                               )}  
                               label={"Settings"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("TabsNav", { screen: "My Profile" }) } 
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => (
                                    <MaterialIcons name="contact-support" size={size} color={color}  />
                               )}  
                               label={"FAQS"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("TabsNav", { screen: "Faq" }) } 
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => (
                                    <MaterialCommunityIcons name="newspaper-variant-outline" size={size} color={color}  />
                               )}  
                               label={"Terms and Conditions"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => console.log('hello')}
                               style={styles.tintView}
                            /> 
                            <DrawerItem
                               icon={({color, size}) => ( 
                                    <Ionicons name="ios-close-circle" size={size} color={color} />
                               )}  
                               label={"Log out"}
                               activeTintColor={'#fff'}
                               inactiveTintColor={'#fff'}
                               labelStyle={styles.tintText}
                               onPress={() => navigation.navigate("Login")}
                               style={styles.tintView}
                            /> 
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section>
                <TouchableRipple>
                    <View style={styles.preferences}>
                        <Text style={{ fontSize: 16, left: 10, fontFamily: 'Mulish-ExtraBoldItalic', }}>Dark Theme</Text>
                        <View pointerEvents={'none'}>
                            <Switch value={isSwitchOn} />
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#14234A',
        height: height,
    },
    containerHead:{
        flex: 1
    },
    profileContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        marginTop: 10,
        color: '#fff',
        fontSize: 13,
        fontFamily: 'Mulish-Regular',
    },
    titleSpan:{
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Mulish-Bold',
    },
    containerBody:{ 
        flex: 3,
        width: '100%',
        color: '#fff',
        height: 700,
        padding: 10,
        backgroundColor: '#243972',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    tintText:{
        fontSize: 12,
        fontWeight: 'bold'
    },
    tintView:{
        height: 33,
    },
    preferences:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
    }
})