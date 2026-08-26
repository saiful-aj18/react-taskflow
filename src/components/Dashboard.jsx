import { useState } from "react";
import StatCard from "./StatCard.jsx";
import TaskItem from "./TaskItem.jsx";


const tasks = [
  {
    id: crypto.randomUUID(),
    title: 'Build Landing Page',
    description: 'Website Redesign',
    category: "Marketing",
    priority: 'High',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Fix Authentication',
    description: 'backend API',
    category: "Development",
    priority: 'Medium',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Build Landing Page',
    description: 'UI Design',
    category: "Design",
    priority: 'Low',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Build PHP Website',
    description: 'Backend Development',
    category: "Development",
    priority: 'Low',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Build React App',
    description: 'Frontend Development',
    category: "Development",
    priority: 'High',
    completed: true
  }
]

const Dashboard = () => {
const [tasksList, setTasksList] = useState(tasks);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [showModal, setShowModal] = useState(false);
const [newTask, setNewTask] = useState({
  title: "",
  description: "",
  category: "Development",
  priority: "Medium",
});
const addTask = (e) => {
  e.preventDefault();
  if (!newTask.title.trim() || !newTask.description.trim()) {
  return;
} 
  
const task = {
  id: crypto.randomUUID(),
  title: newTask.title,
  description: newTask.description,
  category: newTask.category,
  priority: newTask.priority,
  completed: false,
};

setTasksList((prevTasks) => [
      ...prevTasks,
      task,
]);

setNewTask({
  title: "",
  description: "",
  category: "Development",
  priority: "Medium",
});
setShowModal(false); 
};
const toggleTask = (id) => {
    setTasksList((prevTasks) =>
     prevTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};
const deleteTask = (id) => {
  setTasksList((prevTasks) =>
    prevTasks.filter((task) => task.id !== id)
  );
};
const totalTasks = tasksList.length;
const completedTasks = tasksList.filter(
  (task) => task.completed
).length;

const pendingTasks = totalTasks - completedTasks;
const filteredTasks = tasksList.filter((task) => {
  
  const matchesSearch = task.title
    .toLowerCase()
    .includes(search.toLowerCase());
  const matchesCategory = category === "All" || task.category === category;
   return matchesSearch && matchesCategory;
});
  return (
    <main className="min-h-screen flex-1 bg-slate-950 p-4 text-slate-100 md:p-6">
      <section>
        <p className="text-sm font-medium text-cyan-400">
          Welcome Back
        </p>
        <h1 className="mt-2 text-2xl font-bold text-gray-100 md:text-3xl">
          Good Morning, Learners
        </h1>
        <p className="mt-2 text-sm text-slate-400 md:text-base">
          Here's  what's happening with your tasks today
        </p>
      </section>

      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title='Total Tasks'
          value={totalTasks}
        />
        <StatCard
          title='Pending Tasks'
          value={pendingTasks}
        />
        <StatCard
          title='Completed Tasks'
          value={completedTasks}
        />
      </section>
      {/* Tasks */}
      <section className="mt-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold text-gray-100 sm:text-2xl">
            My Tasks
          </h2>
          <input
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-500 sm:w-auto"
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
          <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 outline-none focus:border-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            </select>
          <button 
          onClick={() => setShowModal(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            + Add Task
          </button>
          
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
          {
            filteredTasks.map(task =>
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            )
          }
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <h3 className="text-lg font-bold text-slate-200 mb-4">
              Add Task
            </h3>
            <form onSubmit={addTask}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Task Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-blue-500"
                  placeholder="Enter task name"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-blue-500"
                  placeholder="Enter task description"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Category
                </label>
                <select
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-blue-500"
                  value={newTask.category}
                  onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                >
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Priority
                </label>
                <select
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-blue-500"
                  value={newTask.priority}
                  onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-cyan-600 hover:bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
      }

export default Dashboard;