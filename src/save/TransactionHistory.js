import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ScrollView, SafeAreaView , Button} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font'; 
import { Avatar, Badge } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

function TransactionHistory({ navigation, closeThisTab }) {
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto"  />
        <View style={styles.header}>
            <Text style={styles.headerText}>Transactions</Text>
            <TouchableOpacity onPress={ closeThisTab }><Text style={styles.headerTextSM}>Back</Text></TouchableOpacity>
        </View>
        <View style={styles.body}>
            <View style={styles.selectType}>
                <View style={[styles.selectCard, { backgroundColor: '#14234A' }]}>
                    <Text style={[styles.selectCardText, { color: '#FFF' }]}>All</Text>
                </View>
                <View style={styles.selectCard}>
                    <Text style={styles.selectCardText}>Credit</Text>
                </View>
                <View style={styles.selectCard}>
                    <Text style={styles.selectCardText}>Debit</Text>
                </View>
            </View>
            <ScrollView style={styles.listCard}>
                <View style={styles.list}>
                    <View style={styles.listLeft}> 
                        <Entypo name="dot-single" size={24} color="#6C3BD0" /> 
                    </View>
                    <View style={styles.listMiddle}>
                        <Text style={styles.listMiddleH1}>Daily Savinsg Deposit (Payment ID:</Text>
                        <Text style={styles.listMiddleH1}>BVCFYJHFUUFUJJ8765GHHHN</Text>
                    </View>
                    <View style={styles.listRight}>
                        <Text style={styles.listRightH1}>{'\u20A6'}2,000</Text>
                    </View>
                </View> 
                <View style={styles.list}>
                    <View style={styles.listLeft}> 
                        <Entypo name="dot-single" size={24} color="#6C3BD0" /> 
                    </View>
                    <View style={styles.listMiddle}>
                        <Text style={styles.listMiddleH1}>Daily Savinsg Deposit (Payment ID:</Text>
                        <Text style={styles.listMiddleH1}>BVCFYJHFUUFUJJ8765GHHHN</Text>
                    </View>
                    <View style={styles.listRight}>
                        <Text style={styles.listRightH1}>{'\u20A6'}2,000</Text>
                    </View>
                </View> 
                <View style={styles.list}>
                    <View style={styles.listLeft}> 
                        <Entypo name="dot-single" size={24} color="#6C3BD0" /> 
                    </View>
                    <View style={styles.listMiddle}>
                        <Text style={styles.listMiddleH1}>Daily Savinsg Deposit (Payment ID:</Text>
                        <Text style={styles.listMiddleH1}>BVCFYJHFUUFUJJ8765GHHHN</Text>
                    </View>
                    <View style={styles.listRight}>
                        <Text style={styles.listRightH1}>{'\u20A6'}2,000</Text>
                    </View>
                </View> 
                <View style={styles.list}>
                    <View style={styles.listLeft}> 
                        <Entypo name="dot-single" size={24} color="#6C3BD0" /> 
                    </View>
                    <View style={styles.listMiddle}>
                        <Text style={styles.listMiddleH1}>Daily Savinsg Deposit (Payment ID:</Text>
                        <Text style={styles.listMiddleH1}>BVCFYJHFUUFUJJ8765GHHHN</Text>
                    </View>
                    <View style={styles.listRight}>
                        <Text style={styles.listRightH1}>{'\u20A6'}2,000</Text>
                    </View>
                </View> 
            </ScrollView>
        </View>
      </View>
    );
}

export default TransactionHistory; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff', 
      padding: 20,
    },
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText:{
        color: '#14234A',
        fontSize: 16,
        fontFamily: 'Mulish-Regular',  
    },
    headerTextSM:{
        color: '#14234A',
        fontSize: 10,
        fontFamily: 'Mulish-Bold',
    },
    body:{
        marginVertical: 0,
    },
    selectType:{
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
    listCard:{
        marginTop: 5,
    },
    list:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    listLeft:{  
        width: '8%'
    },
    listMiddle:{
        width: '73%'
    },
    listMiddleH1:{
        fontSize: 10,
        color: '#010101',
        fontFamily: 'Mulish-Regular',
    },
    listMiddleH2:{ 
        fontSize: 8,
        color: '#A6A6A6',
        fontFamily: 'Mulish-Regular',
    },
    listRight:{
        width: '25%'
    },
    listRightH1:{
        fontSize: 10,
        color: '#010101',
        fontFamily: 'Mulish-Regular',
    }
});