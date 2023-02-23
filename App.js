import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme, ActivityIndicator } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, DarkTheme as DarkThemeProvider } from 'react-native-paper';
import { useFonts } from 'expo-font'; 
import { NavigationContainer, DefaultTheme as DefaultThemeNavigation, DarkTheme as DarkThemeNavigation  } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
}; 

const MyTheme = {
  ...DefaultThemeNavigation,
  colors: {
    ...DefaultThemeNavigation.colors, 
    primary: 'rgb(255, 45, 85)',
  },
};

import DrawerNavigator from "./src/navigations/DrawerNavigator"; 

function App(){ 
  const [loaded, error] = useFonts({  
      'Mulish-Black': require('./assets/fonts/Mulish-Black.ttf'),  
      'Mulish-BlackItalic': require('./assets/fonts/Mulish-BlackItalic.ttf'), 
      'Mulish-Bold': require('./assets/fonts/Mulish-Bold.ttf'), 
      'Mulish-BoldItalic': require('./assets/fonts/Mulish-BoldItalic.ttf'), 
      'Mulish-ExtraBoldItalic': require('./assets/fonts/Mulish-ExtraBoldItalic.ttf'), 
      'Mulish-Light': require('./assets/fonts/Mulish-Light.ttf'), 
      'Mulish-Italic': require('./assets/fonts/Mulish-Italic.ttf'), 
      'Mulish-Medium': require('./assets/fonts/Mulish-Medium.ttf'), 
      'Mulish-MediumItalic': require('./assets/fonts/Mulish-MediumItalic.ttf'), 
      'Mulish-Regular': require('./assets/fonts/Mulish-Regular.ttf'), 
      'Mulish-SemiBold': require('./assets/fonts/Mulish-SemiBold.ttf'), 
      'Mulish-SemiBoldItalic': require('./assets/fonts/Mulish-SemiBoldItalic.ttf'),  
  }); 

  const scheme = useColorScheme();
  if (!loaded) {
      return (
        <View style={styles.appLoading}>
          <ActivityIndicator color={'#000'} size="large" />
        </View>
      );  
  }else
    return (
            <PaperProvider theme={scheme === 'dark' ? DarkThemeProvider : theme}>
              <NavigationContainer  theme={scheme === 'dark' ? DarkThemeNavigation : MyTheme}>
                <DrawerNavigator /> 
              </NavigationContainer>
            </PaperProvider>
          );
}

export default App;

const styles = StyleSheet.create({
  appLoading: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
