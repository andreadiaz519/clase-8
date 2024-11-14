import { useState } from "react"

export const FormControlado = () => {
    const [color, setColor] = useState("")

    return (
    <div>
        <h3>Form Controlado</h3>
    <form onSubmit={(e) => { 
        e.preventDefault()
        setColor(color)
        console.log(color)
        console.log(e.target.nombre.value) 
        }}>
        <label htmlFor="color">Color</label>
        <input id="color" type="text" name="color" autoComplete="off" value={color}
        onChange= {(e)=>{setColor(e.target.value)}}/>
        <button type="submit">Enviar</button>

</form>
<h5>El color es: {color} </h5>
    </div>
    )
}
  
export default FormControlado
  