function TaskFilter({ filter, setFilter }) {
  return (
    <div className="filtros">
      <button 
        className={filter === 'all' ? 'activo' : ''} 
        onClick={() => setFilter('all')}
      >
        Todas
      </button>
      <button 
        className={filter === 'active' ? 'activo' : ''} 
        onClick={() => setFilter('active')}
      >
        Pendientes
      </button>
      <button 
        className={filter === 'completed' ? 'activo' : ''} 
        onClick={() => setFilter('completed')}
      >
        Completadas
      </button>
    </div>
  );
}

export default TaskFilter;