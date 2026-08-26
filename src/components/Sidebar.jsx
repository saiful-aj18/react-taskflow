const menuItems = [
  {
    id: crypto.randomUUID(),
    label: 'Dashboard',
    active: true
  },
  {
    id: crypto.randomUUID(),
    label: 'Tasks',
    active: false
  },
  {
    id: crypto.randomUUID(),
    label: 'Project',
    active: false
  },
  {
    id: crypto.randomUUID(),
    label: 'Team',
    active: false
  },
]

const MenuItems = ({ onMenuClick }) => {
  return (
    <nav className="flex flex-col gap-2">
      {
        menuItems.map(item =>
          <a
            key={item.id}
            href="#"
            onClick={onMenuClick}
            className={
              `rounded-lg px-4 py-3 text-sm ${item.active
              ? 'bg-gray-800 text-cyan-600 font-semibold'
              : 'font-medium text-gray-300 hover:bg-gray-800'}`
            }
          >
            {item.label}
          </a>
        )
      }
    </nav>
  )
}

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 border-r bg-slate-950 p-4">
        <div className="flex flex-col py-4">
          <h2 className="mb-8 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent md:hidden">
            TaskFlow
          </h2>
          {/* Menu Items */}
          <MenuItems />
        </div>
        {/* Settings */}
        <a
          href="#"
          className="rounded-lg px-4 text-sm font-medium text-cyan-600 hover:text-cyan-700 py-3"
        >
          Settings
        </a>
      </aside>

      {
        isOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/40"
              />
              <aside className="relative h-full w-64 bg-slate-900 shadow-2xl">
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent md:hidden">
                    TaskFlow
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-xl text-white bg-red-600 hover:bg-red-400 px-3 py-1 rounded-lg"
                  >
                    x
                  </button>
                </div>
                <div>
                  <MenuItems
                    onMenuClick={onClose}
                  />
                   <a
                    href="#"
                    className="rounded-lg px-4 py-3 text-sm font-medium text-cyan-600 hover:text-cyan-700"
                  >
                    Settings
                  </a> 
                  
                </div>
              </aside>
            </div>
        )
      }
    </>
  )
}

export default Sidebar;