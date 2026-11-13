function TaskStats({ tasks }) {
  // Filtramos para contar solo las que tienen completed en false
  const tareasPendientes = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-stats">
      <p>Te quedan {tareasPendientes} tareas pendientes.</p>
    </div>
  );
}

export default TaskStats;