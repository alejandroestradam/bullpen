import Contador from "./typescript/Contador";
import ContadorConHook from "./typescript/ContadorConHook";
import Funciones from "./typescript/Funciones";
import Login from "./typescript/Login";
import TiposBasicos from "./typescript/TiposBasicos";
import TIposLiterales from "./typescript/TIposLiterales";
import Usuarios from "./typescript/Usuarios";


const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TypeScript</h1>
      <hr/>
      <TiposBasicos/>
      <TIposLiterales/>
      <Funciones/>
      <Contador/>
      <ContadorConHook/>
      <Login/>
      <Usuarios/>
    </div>
  )
}

export default App;
