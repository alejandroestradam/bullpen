import { useForms } from "../hooks/useForms"

const Formularios = () => {

    const {email, password, onChange} = useForms({
        email: '',
        password: ''
    });

    return (
        <div>
            <h3>Formularios</h3>
            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>onChange(e.target.value, 'email')}/>
            <input type="text" className="form-control mt-2 mb-2" placeholder="Password" value={password}  onChange={(e)=>onChange(e.target.value, 'password')}/> 
            <p>{email}</p>
            <p>{password}</p>  
        </div>
    )
}

export default Formularios