// import { StatusBar } from 'expo-status-bar';
// import 'react-native-gesture-handler'; 
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView , Modal} from 'react-native';
// import { EvilIcons, Ionicons, AntDesign, Octicons, Feather, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';   
// import { useFonts } from 'expo-font';
// import { LinearGradient } from 'expo-linear-gradient';
// import { TextInput } from 'react-native-paper';
// import { BlurView } from 'expo-blur';
// const { width, height } = Dimensions.get('window'); 


// function components({ navigation }) {
//     const [ modalVisible, setModalVisible ] = React.useState(false);
//     const [ modalConfrimIdentity, setModalConfrimIdentity ] = React.useState(false);
//     const [ selectedType, setSelectedType ]  = React.useState({
//                                                               type: '',
//                                                               step: '',
//                                                             });
//     const [ saveForGoal, setSaveForGoal ]  = React.useState({
//                                                               type: '',
//                                                               amount: 0,
//                                                               frequency: '',
//                                                               perTime: '',
//                                                               paymentMethod: '',
//                                                             });
//     const [ widthdraSelect, setWidthdraSelect ]  = React.useState({
//                                                               type: '', 
//                                                             });
//     const [ selection, setSelection ] = React.useState({
//                                                       amount: '',
//                                                       destination: '',
//                                                   });