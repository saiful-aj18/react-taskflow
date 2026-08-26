import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      {/* Sidebar */}
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Dashboard */}
        <Dashboard />
      </div>
    </div>
  )
}

export default App;