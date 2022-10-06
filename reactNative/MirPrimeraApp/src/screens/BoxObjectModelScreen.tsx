import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Box object Model
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue'
    },
    title:{
        padding: 10,
        fontSize: 20,
        borderWidth: 10
    }
});

export default BoxObjectModelScreen;