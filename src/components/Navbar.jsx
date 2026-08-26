const Navbar = ({ isSidebarOpen, onMenuClick }) => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950">
      <div className="max-w-300 mx-auto flex h-full flex-row-reverse items-center justify-between px-4">

        <h1 className={`text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${isSidebarOpen && 'invisible md:visible'}`}>
          Taskflow
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="text-2xl text-slate-300 md:hidden"
          >
            ≡
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar;