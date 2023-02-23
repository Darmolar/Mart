import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
import { useFonts } from 'expo-font'; 

const { width, height } = Dimensions.get('window');

const sliders = [
                    {
                        image: require('../assets/swiper1.png'),
                        text: 'Save without thinking about It and earn more than you get on any bank',
                        overlay: 'rgba(36, 57, 114, .7)',
                        buttonText: 'Get Started',
                    },
                    {
                        image: require('../assets/swiper1.png'),
                        text: 'We have created strong portfolios for you to invest and grow your wealth',
                        overlay: 'rgba(30, 66, 81, .7)',
                        buttonText: 'Get Started',
                    },
                    {
                        image: require('../assets/swiper1.png'),
                        text: 'There’s a Payafta system so you can pay in instalment and stop being ripped by loans',
                        overlay: 'rgba(36, 57, 114, .7)',
                        buttonText: 'Get Started',
                    },
                    {
                        image: require('../assets/swiper1.png'),
                        text: 'You can have your own business account here to receive payment from customers',
                        overlay: 'rgba(36, 57, 114, .7)',
                        buttonText: 'Get Started',
                    },
                    {
                        image: require('../assets/swiper1.png'),
                        text: 'And with our videos, you can learn to earn more, save more and grow wealth',
                        overlay: 'rgba(36, 57, 114, .7)',
                        buttonText: 'Get Started',
                    }, 
                ]

export default function onBoradingScreen ({ navigation }) { 
    return (
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                    {
                        sliders.map((item, index) => {
                            return (
                                <ImageBackground source={item.image} key={index} resizeMode="cover" testID="Hello" style={styles.slide1}>
                                    <View style={[styles.overlaY, { backgroundColor: item.overlay }]}>
                                        <View style={styles.footer}>
                                            {/* <Text style={styles.h1}>SAVE SMARTLY</Text> */}
                                            <Text style={styles.h3}>{ item.text }</Text>
                                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                                                <Text style={styles.text}>{item.buttonText}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            )
                        })
                    }
                </ScrollView>
            </View>
        ) 
}


var styles = StyleSheet.create({
    container:{
        flex: 1,
    }, 
    slide1: { 
      flex: 1,
    //   height: height+30,
    }, 
    overlaY:{
        width,
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        resizeMode: 'cover'
    },
    footer:{
        width : '80%',  
        justifyContent: 'center',
        alignItems: 'center', 
    },
    button:{ 
        width: '100%',
        height: 39,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    text: {
      color: '#243972',
      fontSize: 12, 
      fontFamily: 'Mulish-Bold'
    },
    h1:{
        padding: 15,
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Mulish-Regular'
    },
    h3:{ 
        padding: 15,
        color: '#FFF',
        fontSize: 15,
        bottom: 5,
        fontFamily: 'Mulish-Bold',
        textAlign: 'center',
    }
  })












        {/* <Swiper 
            style={styles.wrapper} 
            autoplay={true}  
            loop={true}
            // dot={}
            showsButtons={false}
            activeDotColor={'#FFF'}
        >
        <ImageBackground source={require('../assets/swiper1.png')} resizeMode="cover" testID="Hello" style={styles.slide1}>
            <View style={styles.overlaY}>
                <View style={styles.footer}>
                    <Text style={styles.h1}>SAVE SMARTLY</Text>
                    <Text style={styles.h3}>Save without thinking about it and earn more Than you get naturally on any bank.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        <ImageBackground source={require('../assets/swiper2.png')} resizeMode="cover" testID="Beautiful" style={styles.slide1}>
            <View style={styles.overlaY}>
                <View style={styles.footer}>
                    <Text style={styles.h1}>INVEST SMARTLY</Text>
                    <Text style={styles.h3}>Grow your money, Invest in diversified portfolios.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        <ImageBackground source={require('../assets/swiper3.png')} resizeMode="cover" testID="Simple" style={styles.slide1}>
            <View style={styles.overlaY}>
                <View style={styles.footer}>
                    <Text style={styles.h1}>PAY AFTA</Text>
                    <Text style={styles.h3}>Why take loans when you can PayAfta and Enjoy The benefits.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        <ImageBackground source={require('../assets/swiper4.png')} resizeMode="cover" testID="Simple" style={styles.slide1}>
            <View style={styles.overlaY}>
                <View style={styles.footer}>
                    <Text style={styles.h1}>ACHIEVE YOUR GOAL</Text>
                    <Text style={styles.h3}>Save money automatically for that thing you want While we try to help achieve it.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground> 
        <ImageBackground source={require('../assets/swiper5.png')} resizeMode="cover" testID="Simple" style={styles.slide1}>
            <View style={styles.overlaY}>
                <View style={styles.footer}>
                    <Text style={styles.h1}>GROW YOUR MONEY</Text>
                    <Text style={styles.h3}>Get frequent videos & tips, on how to grow Your money, invest smarter & reduce bill.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </Swiper> */}
