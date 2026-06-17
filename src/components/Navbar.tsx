import { useState, useEffect } from "react";
import { Menu, Moon, X } from "lucide-react";
import { Link, useLocation  } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);


  return (
    <nav className={`fixed top-0 w-full z-50 ${ scrolled ? "backdrop-blur-md border-b border-gray-800" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold tracking-wide">
                localhost
            </a>
          </div>


          {/* Desktop nav */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex space-x-10">
            {navItems.map(item => (
                <Link key={item.name} to={item.path} className="relative hover:text-pink-500 px-1 py-2 text-sm font-medium">
                    <span className={`${location.pathname === item.path ? "font-bold" : ""}`}> {item.name}</span>
                    {location.pathname === item.path && (
                    <span className="absolute left-0 -bottom-1 h-[2px] bg-pink-500 w-full rounded"/>
                    )}
                </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="ml-auto hidden h-10 w-10 items-center justify-center rounded-md cursor-pointer hover:text-pink-500 focus:outline-none md:inline-flex"
            aria-label="Toggle dark mode"
            aria-pressed={darkMode}
          >
            <Moon size={22} />
          </button>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-pink-500 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md cursor-pointer hover:text-pink-500 focus:outline-none"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
            >
              <Moon size={22} />
            </button>
          </div>
        </div>
      </div>


      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100 border-b backdrop-blur-md" : "max-h-0 opacity-0"} `}>
        <div className="flex flex-col px-6 pt-4 pb-6 space-y-3">
          {navItems.map(item => (
            <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)} className="block hover:text-pink-500 px-3 py-2 rounded-md">
              <span className={`${location.pathname === item.path ? "font-bold" : ""}`}> {item.name}</span>
              <div className={`h-[2px] bg-pink-500 mt-1 transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0"}`}/>
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
