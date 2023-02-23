import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView, Pressable, Modal, Alert } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import {Picker, PickerIOS} from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

const SendorWithdrawScreen = (props) => {
    return (
            <View style={styles.modalView}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Text style={{ color: 'grey', fontFamily: 'Mulish-SemiBold', textTransform: 'uppercase' }}>Send/Withdraw</Text>

                    <View style={{ marginTop: 5,  width: '100%' }}>
                        <Text style={styles.formLabel}>Amount</Text>
                        <TextInput
                            // label="Email"
                            // value={selection.amount}
                            mode={'outlined'}
                            placeholder={'Savings'}
                            // onChangeText={text => setSaveForGoal({ ...saveForGoal, frequency: text })}
                            selectionColor={'#243972'}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ marginTop: 5,  width: '100%' }}>
                        <Text style={styles.formLabel}>Bank</Text>
                        <TextInput
                            // label="Email"
                            // value={selection.amount}
                            mode={'outlined'}
                            placeholder={'Access Bank'}
                            // onChangeText={text => setSaveForGoal({ ...saveForGoal, frequency: text })}
                            selectionColor={'#243972'}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ marginTop: 5,  width: '100%' }}>
                        <Text style={styles.formLabel}>Destination</Text>
                        <TextInput
                            // label="Email"
                            // value={selection.amount}
                            mode={'outlined'}
                            placeholder={'Personal Account'}
                            // onChangeText={text => setSaveForGoal({ ...saveForGoal, frequency: text })}
                            selectionColor={'#243972'}
                            style={styles.input}
                        />
                    </View>                                    
                    <Pressable style={styles.button}  onPress={e => props.onClick(e)}>
                        <Text style={styles.buttonText}>Send Money</Text>
                    </Pressable> 
                </View>
            </View>
        )
}
export default SendorWithdrawScreen;
const styles = StyleSheet.create({
    modalView: { 
        width: width - 40,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 2
            },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    formLabel:{
        color: '#243972',
        borderRadius: 10,
        fontFamily: 'Mulish-Bold',
        fontSize: 12
    },
    input:{
        width: '100%',
        height: 40,
        borderColor: '#243972',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingLeft: 10
    },
    button:{
        top: 10,
        width: '100%',
        height: 50,
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
        textTransform: 'uppercase'
    },
})