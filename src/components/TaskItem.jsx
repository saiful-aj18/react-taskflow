const TaskItem = ({ task, onToggle }) => {
  const { id, title, description, priority, completed } = task;

  return (
    <div className="flex items-center gap-4 border-b p-4 last:border-b-0">
      <div
        onClick={() => onToggle(id)}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${completed ? 'border-green-500 bg-green-500 text-xs text-white' : 'border-gray-300'}`}
      >
        {completed && '✓'}
      </div>
      <div className="flex-1">
        <h3
          className={`truncate text-sm font-semibold ${
            completed
            ? 'text-gray-400 line-through'
            : 'text-gray-800'
          }`}
        >
          {title}
        </h3>
        <p className={`mt-1 truncate text-xl ${
            completed
            ? 'text-gray-400 line-through'
            : 'text-gray-800'}`}>
          {description}
        </p>
      </div>
      <span
        className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
          priority.toLowerCase() === 'high'
          ? 'bg-red-50 text-red-600'
          : priority.toLowerCase() === 'medium'
            ? 'bg-yellow-50 text-yellow-500'
            : 'bg-green-50 text-green-500'
        }`}
      >
        {priority}
      </span>
    </div>
  )
}

export default TaskItem;