import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../API/reqRes";
import { ReqResListado, Usuario } from "../Interfaces/ReqResInterface";

export const useUsuarios = () =>{
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1);

    useEffect(()=>{
        //API CALL
        cargarUsuarios(); 
    },[]);

    const cargarUsuarios = async(movement? : boolean) =>{

        if(paginaRef.current === 0){
            paginaRef.current ++;
        }
        if(movement){
            paginaRef.current ++;
        }else if(movement === false){
            paginaRef.current --;
        }

        console.log(paginaRef.current)

        const resp = await reqResApi.get<ReqResListado>('/users',{
            params:{
                page: paginaRef.current
            } 
        });


        if(resp.data.data.length > 0 ){
            setUsuarios(resp.data.data);
        }else{
            alert('No hay más registros');
            paginaRef.current --;
        }
        
        /*
        if(resp.data.data.length > 0 ){
            setUsuarios(resp.data.data);
            paginaRef.current ++;
        }else{
            alert('No hay más registros');
        }*/
    }
    return{
        usuarios, cargarUsuarios
    }
}