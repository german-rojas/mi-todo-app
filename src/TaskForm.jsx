import { useState } from 'react';

function TaskForm({ addTask }) {
  // Estado local para guardar lo que el usuario escribe en el input
  const [texto, setTexto] = useState('');

  // Función que se ejecutará al darle clic al botón o presionar Enter
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evitará que la página web se recargue al enviar el formulario
    
    // Validamos que no envíen tareas vacías
    if (texto.trim() !== '') {
      addTask(texto);
      setTexto('');   // Vaciamos el input para escribir otra tarea
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="task-form">
      <input 
        type="text" 
        placeholder="Añadir una nueva tarea..." 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;