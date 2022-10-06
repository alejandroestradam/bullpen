import React from 'react';
import { SafeAreaView } from 'react-native';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import ContadorScreen from './src/screens/ContadorScreen';
import DimensionesScreen from './src/screens/DimensionesScreen';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*<ContadorScreen/>
      <BoxObjectModelScreen/>*/}
      <DimensionesScreen/>
    </SafeAreaView>
  );
};

export default App;


