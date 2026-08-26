import { useState } from "react";
import StatCard from "./StatCard.jsx";
import TaskItem from "./TaskItem.jsx";


const tasks = [
  {
    id: crypto.randomUUID(),
    title: 'Build Landing Page',
    description: 'Website Redesign',
    priority: 'High',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Fix Authentication',
    description: 'backend API',
    priority: 'Medium',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Build Landing Page',
    description: 'UI Design',
    priority: 'Low',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Build PHP Website',
    description: 'Backend Development',
    priority: 'Low',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Build React App',
    description: 'Frontend Development',
    priority: 'High',
    completed: true
  }
]

const Dashboard = () => {
const [tasksList, setTasksList] = useState(tasks);
const [search, setSearch] = useState("");
const toggleTask = (id) => {
    setTasksList((prevTasks) =>
     prevTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};
const totalTasks = tasksList.length;
const completedTasks = tasksList.filter(
  (task) => task.completed
).length;

const pendingTasks = totalTasks - completedTasks;
const filteredTasks = tasksList.filter((task) =>
  task.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <main className="flex-1 p-4 md:p-6">
      {/* Welcome */}
      <section>
        <p className="text-sm font-medium text-blue-600">
          Welcome Back
        </p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
          Good Morning, Learners
        </h1>
        <p className="mt-2 text-sm text-gray-500 md:text-base">
          Here's  what's happening with your tasks today
        </p>
      </section>
      {/* Stats */}
      {/* <select>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
      </select> */}
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
          <h2 className="text-xl font-bold text-gray-900">
            My Tasks
          </h2>
          <input
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 sm:w-auto"
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
          <button className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition">
            + Add Task
          </button>
          

        </div>
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          {
            filteredTasks.map(task =>
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTask(task.id)}
              />
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Dashboard;