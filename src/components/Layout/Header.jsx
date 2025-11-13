
import { Bell, ChevronDown, Filter, Menu, Moon, Plus, Search, Settings, Sun } from "lucide-react"
import { useState, useEffect } from "react"

const Header = ({ sideBarCollapsed, onToggleSideBar }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className=" bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl  px-6 py-2">
      <div className="flex items-center justify-between">
        {/* left section  */}
        <div className="flex items-center space-x-4">
          <button
            className="p-1 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onToggleSideBar}
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">Dashboard</h1>
            <p className="text-xs text-slate-800 dark:text-white"> Wekcome back, Alex, here's what's happening today</p>
          </div>
        </div>
        {/* Center */}
        <div className="flex max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search anything"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800  border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button className=" absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <Filter />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3">
          {/* Quick Action */}
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="relative w-5 h-5">
              <Sun
                className={`w-5 h-5 absolute transition-all duration-300 ${
                  isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <Moon
                className={`w-5 h-5 absolute transition-all duration-300 ${
                  isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 w-5 h-5  bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          {/* Setting */}
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          {/* Users */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-l-slate-700">
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2"
              alt="User"
              className="w-8 h-8 rounded-full ring-2 ring-blue-500"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Waeez Ali</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 ">Administrator</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
