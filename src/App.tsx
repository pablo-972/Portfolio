import { Code, Shield, Terminal, Laptop } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import projects from '../public/projects.json' 
import articles from '../public/articles.json'


function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar/>

      {/* HERO */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hey, I'm <span className="text-pink-500"> Pablo. </span>
            </h1>
          </motion.div>
          

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-xl md:text-2xl font-mono mb-10">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
              >
                <Terminal className="h-5 w-5 text-red-500" />
                <span>AI Security Tools Developer</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <Shield className="h-5 w-5 text-purple-500" />
                <span>Purple Team</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <Code className="h-5 w-5 text-blue-500" />
                <span>Software Engineer</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <Laptop className="h-5 w-5 text-green-500" />
                <span>Master’s in Cybersecurity</span>
              </motion.div>
            </div>
        

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6 text-lg md:text-2xl max-w-4xl mx-auto mb-10 ">
              Appasionate about cybersecurity and AI.
              Developing AI-powered tools for malware analysis and red teaming operations. 
              Not only tech, but curious.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 text-lg">
            <button onClick={() => navigate("/projects")} className="border border-black bg-pink-500 px-6 py-2 rounded-lg hover:bg-pink-400 transition">
              View My Projects →
            </button>
            <button onClick={() => navigate("/blog")} className="border border-black px-6 py-2 rounded-lg hover:bg-pink-400 transition">
              Read My Blog →
            </button>
          </motion.div>

        </section>
      </div>


      {/* PROJECTS */}
      <section className="px-6 md:px-40 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-3">Featured Projects</h2>
          <p className=" text-xl text-center max-w-2xl mx-auto mb-6">
            A selection of my most significant work in cybersecurity and software development
          </p>

          <div className="grid max-w-5xl mx-auto md:grid-cols-3 gap-6">
            {projects.map((projects) => (
              <div key={projects.title} className="main-card p-6 rounded-xl border border-black hover:border-pink-500 transition transform hover:-translate-y-1 shadow-lg">
                <a href={projects.github}>
                  <h3 className="font-semibold mb-2">{projects.title}</h3>
                  <p className="text-sm"> {projects.summary}</p>
                </a>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <button onClick={() => navigate("/projects")} className="border border-black px-6 py-2 rounded-lg hover:bg-pink-400 transition">
              View all projects →
            </button>
          </div>
          
        </motion.div>
      </section>


      {/* BLOG */}
      <section className="px-6 md:px-40 py-80 pb-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-3"> Latest Articles</h2>
          <p className=" text-xl text-center max-w-2xl mx-auto mb-6">
            Insights and tutorials on cybersecurity, malware analysis, hardware hacking, red teaming, and software development
          </p>
          
          <div className="grid max-w-4xl mx-auto md:grid-cols-2 gap-6">
              {articles.map((articles) => (
                <div key={articles.title} className="main-card p-6 rounded-xl border border-black hover:border-pink-500 transition transform hover:-translate-y-1 shadow-lg">
                  <h3 className="font-semibold mb-2">{articles.title}</h3>
                  <p className="text-sm"> {articles.summary}</p>
                </div>
              ))}
            </div>

          <div className="flex justify-center mt-10">
            <button onClick={() => navigate("/blog")} className="border border-black px-6 py-2 rounded-lg hover:bg-pink-400 transition">
              View all articles →
            </button>
          </div>

        </motion.div>
      </section>


      <Footer/>
    </div>
  );
}

export default App;
