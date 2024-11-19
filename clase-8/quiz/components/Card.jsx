import { useState } from "react";
import { questions } from "../dataBase";

export const Card = () => {
  const [optionSelected, setOptionSelected] = useState('');
  const [currentQuestion, setCurrenQuestion] = useState(0); // Inicializa con la primera pregunta
  const { question, answers } = questions[currentQuestion]; // Obtiene la pregunta actual

  // Función para validar la respuesta
  const validateAnswer = (e) => {
    e.preventDefault();

    // Verifica si se ha seleccionado una opción
    if (!optionSelected) {
      alert('Por favor selecciona una respuesta.');
      return;
    }

    // Buscar la respuesta seleccionada usando el ID
    const answer = answers.find((answer) => answer.id === optionSelected);
    console.log(answer); // Verificar qué respuesta se ha seleccionado

    // Si la respuesta es correcta, mostrar un mensaje
    if (answer && answer.correct) {
      alert('¡Correcto!');
      // Avanzar a la siguiente pregunta
      if (currentQuestion < questions.length - 1) {
        setCurrenQuestion((prev) => prev + 1); // Avanzar a la siguiente pregunta
      } else {
        alert('¡Has completado todas las preguntas!');
      }
    } else {
      alert('Incorrecto, intenta de nuevo.');
    }
  };

  return (
    <div>
      <h2>Pregunta {currentQuestion + 1}</h2> {/* Mostrar el número de la pregunta */}
      <p>{question}</p>
      
      <form onSubmit={validateAnswer}> {/* Llamamos a validateAnswer al hacer submit */}
        <select
          onChange={(e) => setOptionSelected(e.target.value)} // Al seleccionar una opción, actualizamos el estado
          value={optionSelected} // El valor seleccionado en el select
        >
          <option value="">Seleccionar</option>
          {answers.map(({ id, text }) => (
            <option value={id} key={id}>
              {text}
            </option>
          ))}
        </select>
          <div style={{backgroundColor:'red'}}><p>Su respuesta es incorrecta... Seleccione otra opcion</p></div>
        <button type="submit">Ok</button>
      </form>
    </div>
  );
};

export default Card;

