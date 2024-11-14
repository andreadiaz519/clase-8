//Crear un formuliario con un input y renderizar el valor

import { useState } from "react"


export const Ejercicio = () => {
    const [password, setPassword] = useState("");
    const[show, setShow] = useState(false)
    const handlepass = (e)=>{
    setPassword(e.target.value)
    }
    // console.log(password)


  return (
    <>
    <div>
    Ejercicio 1-2
    </div>
    <form onSubmit={(e)=> {
        e.preventDefault()
        console.log({"Tu contraseña es:": {password}})
    }}>
        <label htmlFor="password">Password</label>
        <input type={show? "Text":"password"}
         id="password" 
        name="password" 
        autoComplete="off" 
        value={password}
        onChange={handlepass}
        placeholder="Ingrese su contraseña"
        />
        {/* <button type="submit">Enviar</button> */}
        <button onClick={()=> {setShow(!show);
        console.log(show)
        }} 
        type="button">
            {show ? "Ocultar Contraseña":"Mostrar Contraseña"} </button>
    </form>
    </>
  )
}

export default Ejercicio
