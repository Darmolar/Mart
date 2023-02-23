import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView, Pressable, Modal, Alert } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import {Picker, PickerIOS} from '@react-native-picker/picker';
import { DataTable } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const BusinessTransactionScreen = () => {
    return (
            <View style={styles.contianer}>
                <View style={styles.tableView}>
                    <ScrollView >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>#</DataTable.Title>
                                <DataTable.Title>Title of Paymet</DataTable.Title>
                                <DataTable.Title>Name</DataTable.Title>
                                <DataTable.Title>Date/Time</DataTable.Title>
                                <DataTable.Title numeric>Payment</DataTable.Title>
                                <DataTable.Title numeric>Amount</DataTable.Title> 
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Title>1</DataTable.Title> 
                                <DataTable.Title>MTN Card</DataTable.Title>
                                <DataTable.Title>Aftawallet</DataTable.Title>
                                <DataTable.Title>12/20/2020 | 22:00</DataTable.Title>
                                <DataTable.Title numeric>Lesson</DataTable.Title>
                                <DataTable.Title numeric>200</DataTable.Title> 
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Title>2</DataTable.Title> 
                                <DataTable.Title>MTN Card</DataTable.Title>
                                <DataTable.Title>Aftawallet</DataTable.Title>
                                <DataTable.Title>12/20/2020 | 22:00</DataTable.Title>
                                <DataTable.Title numeric>Lesson</DataTable.Title>
                                <DataTable.Title numeric>200</DataTable.Title> 
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Title>3</DataTable.Title> 
                                <DataTable.Title>MTN Card</DataTable.Title>
                                <DataTable.Title>Aftawallet</DataTable.Title>
                                <DataTable.Title>12/20/2020 | 22:00</DataTable.Title>
                                <DataTable.Title numeric>Lesson</DataTable.Title>
                                <DataTable.Title numeric>200</DataTable.Title> 
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Title>4</DataTable.Title> 
                                <DataTable.Title>MTN Card</DataTable.Title>
                                <DataTable.Title>Aftawallet</DataTable.Title>
                                <DataTable.Title>12/20/2020 | 22:00</DataTable.Title>
                                <DataTable.Title numeric>Lesson</DataTable.Title>
                                <DataTable.Title numeric>200</DataTable.Title> 
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Title>5</DataTable.Title> 
                                <DataTable.Title>MTN Card</DataTable.Title>
                                <DataTable.Title>Aftawallet</DataTable.Title>
                                <DataTable.Title>12/20/2020 | 22:00</DataTable.Title>
                                <DataTable.Title numeric>Lesson</DataTable.Title>
                                <DataTable.Title numeric>200</DataTable.Title> 
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Title>6</DataTable.Title> 
                                <DataTable.Title>MTN Card</DataTable.Title>
                                <DataTable.Title>Aftawallet</DataTable.Title>
                                <DataTable.Title>12/20/2020 | 22:00</DataTable.Title>
                                <DataTable.Title numeric>Lesson</DataTable.Title>
                                <DataTable.Title numeric>200</DataTable.Title> 
                            </DataTable.Row>   
    
                            <DataTable.Pagination
                                page={1}
                                numberOfPages={3}
                                onPageChange={page => {
                                    console.log(page);
                                }}
                                label="1-2 of 6"
                                />
                        </DataTable>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <View>
                        <Text style={{ color: '#FFF', fontFamily: 'Mulish-Regular', fontSize: 12 }}>A+ Group</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Ionicons name="print-outline" size={20} color="white" style={{ right: 10, }} />
                        <MaterialIcons name="save-alt" size={20} color="white" />
                    </View>
                </View>
            </View>
        )
}
export default BusinessTransactionScreen;
const styles = StyleSheet.create({
    contianer:{
        flex: 1,
    },
    tableView:{
        marginTop: 40,
        height: '85%',
        width: width,
    },
    footer:{ 
        marginTop: 20,
        height: 60,
        width: width,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#252B42',
        padding: 10
    }
})