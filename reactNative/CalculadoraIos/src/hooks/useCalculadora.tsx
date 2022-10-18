import { useRef, useState } from "react";

enum Operadores{
    sumar, restar, multiplicar, dividir
}

const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () =>{
        setNumeroAnterior(numero);
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) =>{
        if(numero === 'Error') return;
        if(numero.includes('.') && numeroTexto === '.') return;
        if(numero[numero.length - 1 ] === '0' && numeroTexto === '0' && numero[0] === '0' && !numero.includes('.')) return;
        if(numero.length === 1 && numero === '0' && numeroTexto !== '.'){
            setNumero(numeroTexto);
        }else{
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () =>{
        if(numero !== '0'){
            if(numero.includes('-')){
                setNumero(numero.replace('-', ''));
            }else{
                setNumero('-' + numero);
            }
        }
    }

    const btnDelete = () =>{
        if(numero.length === 2 && numero.includes('-')){
            setNumero('0');
        }else if(numero.length === 1){
            setNumero('0');
        }else{
            setNumero(numero.replace(/.$/, ''));
        }
    }
    
    const btnDividir = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnRestar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnSumar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () =>{
        const num = Number(numero);
        const numAnterior = Number(numeroAnterior);

        switch(ultimaOperacion.current){
            case Operadores.sumar:
                setNumero(`${num + numAnterior}`);
                console.log(num + numAnterior);
                break;
            case Operadores.restar:
                setNumero(`${numAnterior - num}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num * numAnterior}`);
                break;
            case Operadores.dividir:
                if(num === 0){
                    setNumero('Error')
                    break;
                }
                setNumero(`${numAnterior/num}`);
                break;
        }

    }

    const cambiarNumPorAnterior = () =>{
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    return {numero, numeroAnterior, limpiar, armarNumero, positivoNegativo, 
        btnDelete, btnDividir, btnMultiplicar, btnRestar, btnSumar, calcular}
}

export default useCalculadora;