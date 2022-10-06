import React from 'react'
import { Text, View, Dimensions, StyleSheet, useWindowDimensions} from 'react-native';



const DimensionesScreen = () => {

    const {width, height} = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{...styles.cajaMorada, width: width * 0.50}}></View>
                <View style={styles.cajaRoja}></View>
            </View>
            <Text style={styles.title}>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada:{
        backgroundColor: 'purple',
        width: '50%',
        height: '50%'
    },
    cajaRoja:{
        backgroundColor: 'red',
        width: '50%',
        height: '50%'
    },
    title:{
        fontSize: 40,
        textAlign: 'center'
    }
});

export default DimensionesScreen;