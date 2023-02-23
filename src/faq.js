import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ScrollView, SafeAreaView , Button} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
import { useFonts } from 'expo-font'; 
import { Avatar, Badge } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

function FaqScreen({ navigation }) {
    const [ showFaq, setShowFaq ] = React.useState(false);
    
    return (
      <View style={styles.container}>
        <StatusBar style="auto"  />
        <View style={styles.header}>
            <Text style={styles.headerText}>FREQUENTLY ASKED QUESTIONS</Text>
            <AntDesign name="closecircle" size={20} color="#1D1D1D"  onPress={() => navigation.goBack() } /> 
        </View>
        <View style={styles.body}>
            <View style={styles.listCard}>
                <TouchableOpacity style={styles.list} onPress={() => setShowFaq(!showFaq) }>
                    <View style={styles.listLeft}>
                        <View style={styles.listLeftCon}>
                            <AntDesign name="questioncircle" size={20} color="#1E4251" />
                        </View>
                    </View>
                    <View style={styles.listMiddle}>
                        <Text style={styles.listMiddleH1}>When can I withdraw my investment</Text> 
                        { 
                            showFaq &&
                            <Text style={styles.faqAnswer}>Answer: you can withdraw at the end of 3 months more text more text more text more text more text more text more text more text more text more text more text more text more text more text more text more text more text more text more text</Text>
                        }
                    </View>
                    <View style={styles.listRight}>
                        <Feather name="chevrons-down" size={20} color="#1D1D1D" /> 
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
}

export default FaqScreen; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      padding: 30,
      alignItems: 'center',
    },
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    headerText:{
        color: '#1D1D1D',
        fontSize: 29,
        fontFamily: 'Mulish-Bold',  
    },
    headerTextSM:{
        color: '#14234A',
        fontSize: 10,
        fontFamily: 'Mulish-Bold',
    },
    body:{
        marginVertical: 0,
    }, 
    listCard:{
        marginTop: 20,
    },
    list:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 10,
        padding: 7,
    },
    listLeft:{  
        width: '5%'
    },
    listLeftCon:{
        width: 30, 
        height: 30,
        borderRadius: 20,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        right: 20,
    },
    listMiddle:{
        width: '85%'
    },
    listMiddleH1:{
        fontSize: 13,
        color: '#010101',
        fontFamily: 'Mulish-Bold',
    }, 
    listRight:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%'
    }, 
    faqAnswer:{
        marginTop: 5,
        color: '#1D1D1D',
        fontSize: 10,
        fontFamily: 'Mulish-Bold'
    }
});