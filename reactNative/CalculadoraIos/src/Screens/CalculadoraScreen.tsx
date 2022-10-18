import React, { useRef, useState } from 'react'
import { Image, Text, View } from 'react-native'
import Button from '../Components/Button'
import useCalculadora from '../hooks/useCalculadora'
import { styles } from '../Themes/appTheme'

enum Operadores{
    sumar, restar, multiplicar, dividir
}

const CalculadoraScreen = () => {

    const {numero, numeroAnterior, limpiar, positivoNegativo, btnDelete, btnDividir, armarNumero, btnMultiplicar, btnRestar, btnSumar, calcular} = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {(numeroAnterior !=='0' && numeroAnterior !== 'Error') && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)}
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            {/*Fila de botones*/}
                <View style={styles.fila}>
                    <Button text = 'C' color='#9B9B9B' accion={limpiar}/>
                    <Button text = '+/-' color='#9B9B9B' accion={positivoNegativo}/>
                    <Button text = 'del' color='#9B9B9B' accion={btnDelete}/>
                    <Button text = '÷' color='#FF9427' accion={btnDividir}/>
                </View>
                <View style={styles.fila}>
                    <Button text = '7' accion={armarNumero}/>
                    <Button text = '8' accion={armarNumero}/>
                    <Button text = '9' accion={armarNumero}/>
                    <Button text = 'x' color='#FF9427' accion={btnMultiplicar}/>
                </View>
                <View style={styles.fila}>
                    <Button text = '4' accion={armarNumero}/>
                    <Button text = '5' accion={armarNumero}/>
                    <Button text = '6' accion={armarNumero}/>
                    <Button text = '-' color='#FF9427' accion={btnRestar}/>
                </View>
                <View style={styles.fila}>
                    <Button text = '1' accion={armarNumero}/>
                    <Button text = '2' accion={armarNumero}/>
                    <Button text = '3' accion={armarNumero}/>
                    <Button text = '+' color='#FF9427' accion={btnSumar}/>
                </View>
                <View style={styles.fila}>
                    <Button text = '0' ancho accion={armarNumero}/>
                    <Button text = '.' accion={armarNumero}/>
                    <Button text = '=' color='#FF9427' accion={calcular}/>
                </View>
            </View>
    )
}

export default CalculadoraScreen