import React, { useEffect, useReducer } from 'react';


interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}
interface LoginPayload {
    username: string,
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type AuthAction = 
 | {type: 'logout'}
 | {type: 'login', payload: LoginPayload};

const authReducer = (state: AuthState, action: AuthAction): AuthState =>{
    switch (action.type) {
        case 'logout':
            return{
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return{
                validando: false,
                token: 'ABCD123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }
        default:
            return state;
    }
}

const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'logout'});
        },1500)
    },[])

    const login = () =>{
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Alejandro',
                username: 'Strider'
            }
        })
    }
    const logout = () =>{
        dispatch({
            type: 'logout'
        })
    }

    if(state.validando){
        return(
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }
    

  return (
    <div>
        &nbsp;
        &nbsp;
        &nbsp;
        <h3>Login</h3>
        {
            state.token 
            ? <div>
                <div className="alert alert-success">Autenticado como {state.nombre}</div>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
              </div>
            : <div> 
                <div className="alert alert-danger">No autenticado</div>
                <button className="btn btn-primary" onClick={login}>Login</button>
              </div>
        }
        
    </div>
  )
}

export default Login