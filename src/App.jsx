import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import TaskStats from './TaskStats';
import './App.css';

function App() {
  // Intentamos cargar las tareas guardadas en el navegador, si no hay, iniciamos un arreglo vacío
  const tareasGuardadas = JSON.parse(localStorage.getItem('tasks')) || [];

  // 1. Estado principal de tareas
  const [tasks, setTasks] = useState(tareasGuardadas);
  
  // Estado para saber qué filtro estamos usando ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all');

  // Cada vez que 'tasks' cambie, lo guardamos en el localStorage automáticamente
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // 2. Función para añadir una nueva tarea
  const addTask = (text) => {
    // Creamos el objeto con el id único usando Date.now()
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    // Copiamos las tareas anteriores y agregamos la nueva al final
    setTasks([...tasks, newTask]);
  };

  // 3. Función para tachar/destachar una tarea
  const toggleTask = (id) => {
    const tareasActualizadas = tasks.map((task) => {
      // Si encontramos el id que nos pasaron, invertimos su estado (true a false o viceversa)
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task; // Si no es el id, dejamos la tarea como estaba
    });
    setTasks(tareasActualizadas);
  };

  // 4. Función para eliminar una tarea
  const deleteTask = (id) => {
    // Filtramos el arreglo quedándonos solo con las tareas que NO tengan ese id
    const tareasRestantes = tasks.filter((task) => task.id !== id);
    setTasks(tareasRestantes);
  };

  // 5. Variable derivada para filtrar qué tareas se van a mostrar a los usuarios
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // Si el filtro es 'all', mostramos todas
  });

  return (
  <div className="contenedor-principal">
    <h1>Mini To-Do App</h1>

    <TaskForm addTask={addTask} />
    <TaskFilter filter={filter} setFilter={setFilter} />
    <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    <TaskStats tasks={tasks} />

  </div>
);
}

export default App;