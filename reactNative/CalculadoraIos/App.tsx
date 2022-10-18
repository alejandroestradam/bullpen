import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import CalculadoraScreen from './src/Screens/CalculadoraScreen';
import { styles } from './src/Themes/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={'black'} barStyle='light-content'/>
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;