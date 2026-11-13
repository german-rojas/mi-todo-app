function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    // Si la tarea está completada, le agregamos una clase extra para tacharla en el CSS
    <li className={`task-item ${task.completed ? 'completada' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span className="task-text">{task.text}</span>
      <button className="btn-eliminar" onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;