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
              ? 'bg-blue-50 text-blue-600 font-semibold'
              : 'font-medium text-gray-600 hover:bg-gray-100'}`
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
      <aside className="hidden md:block w-64 border-r bg-white">
        <div className="flex flex-col py-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:hidden">
            TaskFlow
          </h2>
          {/* Menu Items */}
          <MenuItems />
        </div>
        {/* Settings */}
        <a
          href="#"
          className="rounded-lg px-4 text-sm font-medium text-gray-600 hover:bg-gray-100"
        >
          Settings
        </a>
      </aside>
      {/* Mobile Sidebar */}
      {
        isOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* OverLay */}
              <div
                onClick={onClose}
                className="absolute inset-0 bg-black/40"
              />
              <aside className="relative h-full w-64 bg-white shadow-2xl">
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-2xl font-bold text-gray-900 md:hidden">
                    TaskFlow
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-xl text-white bg-red-600 px-3 py-1 rounded-lg"
                  >
                    x
                  </button>
                </div>
                <div>
                  {/* Menu Items */}
                  <MenuItems
                    onMenuClick={onClose}
                  />
                  {/* Settings */}
                  {/* <a
                    href="#"
                    className="rounded-lg px-4 y-3 text-sm font-meduum text-gray-600 hover:bg-gray-100"
                  >
                    Settings
                  </a> */}
                </div>
              </aside>
            </div>
        )
      }
    </>
  )
}

export default Sidebar;