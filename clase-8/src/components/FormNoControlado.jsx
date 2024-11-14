export const FormNoControlado = () => {

  return (
    <div>
      <h3>Form No Controlado</h3>
      <form onSubmit={(e) => { 
        e.preventDefault()
        console.log(e.target.nombre.value) 
        }}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" name="nombre" autoComplete="off" />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>




      </form>
    </div>
  )
}

export default FormNoControlado
