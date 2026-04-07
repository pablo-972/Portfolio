import { motion } from "framer-motion"
import articles from '../../public/articles.json'
import Card from "../components/Card"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Projects() {
  return (

    <div>
        <Navbar/>
        <div className="container mx-auto px-6 py-30 max-w-4xl">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6"> 
                    My <span className="text-pink-500"> Blog </span>
                </h1>
                <p className="text-xl text-center max-w-2xl mx-auto"> 
                    Sharing my knowledge and insights on cybersecurity.
                </p>
            </motion.div>


            {/* LIST */}
            <div className="space-y-12">
                {articles.map((articles) => (
                <Card key={articles.id} data={articles} />
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  );
}