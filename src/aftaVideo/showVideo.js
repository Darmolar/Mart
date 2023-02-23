import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import {Picker, PickerIOS} from '@react-native-picker/picker';
import { Video, AVPlaybackStatus } from 'expo-av';
import { ProgressBar } from 'react-native-paper';
import { Asset, useAssets } from 'expo-asset';

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

const { width, height } = Dimensions.get('window');

function videoShowcaseScreen({ navigation, route }) {   
    const [ totalSec, settotalSec ] = useState('');
    const [ progress, setProgress ] = useState(0);
    const [ durationSec, setDurationSec ] = useState('');
    const [ isReady, setIsReady ]= useState(false);
    const [ videoIndex, setvideoIndex ] = useState(0); 
    const [ shouldPlay, setshouldPlay ] = useState(false);
    const theVideo = route.params.video;
    const [ showOption, setOptions ] = useState(true);
    const  videoRef = useRef(null);  
    useEffect(()=>{
        setshouldPlay(false);
        // setCurrentVideo(); 
    }, []) 

    const millisToMinutesAndSeconds = async (data) => {   
        await videoRef.current.getStatusAsync()
            .then(function(result) { 
                // console.log(result);
                if(result.durationMillis && result.positionMillis){  
                    setProgress(result.positionMillis/result.durationMillis) ;
                    var millisTot = result.durationMillis;
                    var minutesTot = Math.floor(millisTot / 60000);
                    var secondsTot = ((millisTot % 60000) / 1000).toFixed(0);
                    // console.log(minutesTot + ":" + (secondsTot < 10 ? '0' : '') + secondsTot);
                    settotalSec(minutesTot + ":" + (secondsTot < 10 ? '0' : '') + secondsTot); 

                    var millis = result.positionMillis;
                    var minutes = Math.floor(millis / 60000);
                    var seconds = ((millis % 60000) / 1000).toFixed(0);
                    // console.log(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
                    setDurationSec(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
                }
            })
            .catch(failureCallback => console.log(failureCallback));         
    } 

    // if (!assets) {
    //     return (
    //       <View style={styles.loadingCotainer}>
    //           <ActivityIndicator color="#000" size="large" />
    //       </View>
    //     );
    // }
    
    return (
            <View style={styles.container}>
                <StatusBar style='light' />
                <View style={styles.videoContainer}>
                    <Video
                        ref={videoRef}
                        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
                        source={ theVideo === 1 ? require('../../assets/home/video1.mp4') : require('../../assets/home/video2.mp4')}
                        useNativeControls={false}
                        resizeMode="contain"
                        shouldPlay={shouldPlay} 
                        isLooping={false}
                        onPlaybackStatusUpdate={status => millisToMinutesAndSeconds(status)}
                    />
                    <TouchableOpacity onPress={() => setOptions(!showOption) } style={ showOption == true ? styles.controlsCon : styles.controlsConNull }>
                        {
                            showOption == true &&
                            <> 
                                <View style={styles.navControl}>
                                    <Ionicons name="arrow-back-circle" size={30} color="#FFF" onPress={() => navigation.goBack() }  />
                                    <Ionicons name="ios-repeat-outline" size={30} color="#FFF" onPress={() => { setshouldPlay(true); videoRef.current.replayAsync() } } />
                                </View>
                                <View style={styles.middleCon}>
                                    <Ionicons name={ shouldPlay === true ? "pause" : "play"} size={50} color="#FFF" onPress={() => setshouldPlay(!shouldPlay) } />
                                </View>
                                <View style={styles.footerCon}>
                                    <View>
                                        <Text style={{ color: '#fff', fontFamily: 'Mulish-Regular', fontSize: 12 }}>{ durationSec } / { totalSec } </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <Ionicons name="volume-medium" size={20} color="#FFF" />
                                        <MaterialCommunityIcons name="fullscreen" size={20} color="#FFF" /> 
                                    </View>
                                </View>
                                <ProgressBar progress={progress} color={'#14234A'} />
                            </>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.textTag}>#investment</Text>
                        <Text  style={styles.textTitle}>Investing Wisely</Text> 
                        <Text  style={styles.textTag}>Okonkwo Dominiq</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styles.viewText}> <Ionicons name="ios-eye-outline"  size={10} color="#BDBDBD"  />  524 Views  </Text>
                            <Text style={styles.viewText}> 71Likes </Text>
                            <Text style={styles.viewText}>  3 DisLikes  </Text>
                            <Text  style={styles.viewText}> <Ionicons name="time" size={10} color="#BDBDBD" />  </Text>
                            <Text style={styles.viewText}>  <Entypo name="forward" size={10} color="#BDBDBD" />  </Text>
                            <Text style={styles.viewText}>  <Ionicons name="md-download-outline" size={10} color="#BDBDBD" />  </Text>
                            
                        </View>
                        <View style={{ marginTop: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.titleButtonAlternate}>
                                <Text style={styles.titleButtonTextAlternate}>Invest Now</Text>
                            </View>
                            <View style={styles.titleButton}>
                                <Text style={styles.titleButtonText}>View More Options</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recormendationCon}>
                        <Text style={{  color: '#A6A6A6', fontSize: 8, fontFamily: 'Mulish-Regular', bottom: 5 }}>Recommended Videos</Text>
                        <ScrollView style={{ width: '100%',  marginBottom: '75%'  }} showsVerticalScrollIndicator={false}>
                            <View style={styles.card}>
                                <View style={styles.cardLeft}>
                                    <View style={styles.cardLeftCon}>
                                        <Text  style={{ color: '#fff', fontFamily: 'Mulish-Regular', fontSize: 7 }}>10:21</Text>
                                    </View>
                                </View>
                                <View style={styles.cardRight}>
                                    <Text style={styles.cardRighth1}>Oxford Mortgage Vest</Text>
                                    <Text style={styles.cardRighth2}>Okonkwo Dominiq | 703 views | 4days ago</Text>
                                </View>
                            </View> 
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
}

export default videoShowcaseScreen;

const styles = StyleSheet.create({
    loadingCotainer:{
        flex: 1,  
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {  
        flex: 1,  
    }, 
    videoContainer:{
        flex: 1.2,
        zIndex: -1, 
    },
    controlsCon:{
        width: '100%', 
        height: '100%',
        justifyContent: 'space-between',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    controlsConNull:{
        width: '100%', 
        height: '100%',
        justifyContent: 'space-between',
        zIndex: 1, 
    },
    navControl:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 30,
    },
    middleCon:{ 
        width,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    footerCon:{  
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 30,
    },    
    body:{
        flex: 1.8,
    },
    titleContainer:{
        width,
        padding: 20,
        borderBottomWidth: .1,
        elevation: 1
    },
    textTitle:{
        color: '#292828',
        opacity: 100,
        fontFamily: 'Mulish-Bold',
        fontSize: 16,
    },
    textTag:{
        color: '#404CB2',
        opacity: 100,
        fontSize: 8,
        fontFamily: 'Mulish-Regular',
        marginVertical: 5,
    },
    viewText:{
        color: '#BDBDBD',
        opacity: 100,
        fontSize: 8,
        fontFamily: 'Mulish-Bold',
    },
    titleButton:{
        width: '49%',
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#14234A',
        padding: 10,
    },
    titleButtonText:{
        color: '#14234A',
        opacity: 100,
        fontSize: 12
    },
    titleButtonAlternate:{
        width: '49%',
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#14234A',
        backgroundColor: '#14234A',
        padding: 10,
    },
    titleButtonTextAlternate:{
        color: '#fff',
        opacity: 100,
        fontSize: 12
    },
    recormendationCon:{ 
        width,
        padding: 20,
    },
    card:{
        width: '100%',
        height: 86,
        borderWidth: 1,
        borderColor: '#243972',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5,
    },
    cardLeft: {
        width: '35%',
        height: 86,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    cardLeftCon:{
        right: 7,
        bottom: 7,
        padding: 5,
        borderRadius: 3,
        backgroundColor: '#404CB2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardRight:{
        width: '65%',
        height: 86,
        justifyContent: 'center',
        padding: 10,
    },
    cardRighth1:{
        color: '#292828',
        opacity: 100,
        fontSize: 11,
        fontFamily: 'Mulish-Bold',
    },
    cardRighth2:{
        color: '#404CB2',
        opacity: 100,
        fontSize: 6,
        fontFamily: 'Mulish-Bold',
    }
});