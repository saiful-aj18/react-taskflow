const Navbar = ({ isSidebarOpen, onMenuClick }) => {
  return (
    <header className="h-16 border-b bg-white">
      <div className="max-w-300 mx-auto flex flex-row-reverse h-full items-center justify-between px-4">
        {/* Logo */}
        <h1 className={`text-3xl font-bold text-gray-900 ${isSidebarOpen && 'invisible md:visible'}`}>
          Taskflow
        </h1>

        {/* Hamburger Icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="text-2xl md:hidden"
          >
            ≡
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar;