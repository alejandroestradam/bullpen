import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    text: string,
    color?: string,
    ancho?: boolean,
    accion: (numero: string) => void
}

const Button = ({text, color = '#2D2D2D', ancho = false, accion}: Props) => {
    return (
        <TouchableOpacity onPress={()=>accion(text)}>
            <View style={{...styles.boton, 
                        backgroundColor: color,
                        width: (ancho) ? 180 : 80}}>
                <Text style={{...styles.botonTexto, 
                            color:(color === '#9B9B9B') ? 'black' : 'white'}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton:{
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
        backgroundColor: '#2D2D2D'
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 35,
        color: 'white',
        fontWeight: '400'
    }
});

export default Button;