import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation  } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${ scrolled ? "backdrop-blur-md border-b border-gray-800" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold tracking-wide">
                Sulkaz
            </a>
          </div>


          {/* Desktop nav */}
          <div className="hidden md:flex space-x-10">
            {navItems.map(item => (
                <Link key={item.name} to={item.path} className="relative hover:text-pink-500 px-1 py-2 text-sm font-medium transition-colors">
                    <span className={`${location.pathname === item.path ? "font-bold" : ""}`}> {item.name}</span>
                    {location.pathname === item.path && (
                    <motion.span
                      layoutId="underline" 
                      className="absolute left-0 -bottom-1 h-[2px] bg-pink-500 w-full rounded"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }} 
                    />
                    )}
                </Link>
            ))}
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100 border-b backdrop-blur-md" : "max-h-0 opacity-0"} `}>
        <div className="flex flex-col px-6 pt-4 pb-6 space-y-3">
          {navItems.map(item => (
            <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)} className="block hover:text-pink-500 px-3 py-2 rounded-md transition">
              <span className={`${location.pathname === item.path ? "font-bold" : ""}`}> {item.name}</span>
              <div className={`h-[2px] bg-pink-500 mt-1 transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0"}`}/>
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
