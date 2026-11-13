import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, deleteTask }) {
  
  // Si no hay tareas, mostramos un mensaje amigable
  if (tasks.length === 0) {
    return <p className="mensaje-vacio">No hay tareas para mostrar.</p>;
  }

  return (
    <ul className="task-list">
      {/* Recorremos el arreglo de tareas y por cada una dibujamos un TaskItem */}
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
}

export default TaskList;