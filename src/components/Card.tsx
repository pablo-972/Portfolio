import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare  } from "react-icons/fa6"

interface Data {
  id: number;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  github: string;
}

export default function Card({ data }: { data: Data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="scroll-mt-20"
    >
      <div className="border border-black rounded-xl p-6 shadow-lg transition-all">
        
        {/* HEADER */}
        <h2 className="text-2xl font-bold mb-1">
          <a href={data.github} target="_blank" className="hover:text-pink-400 flex items-center gap-2">
            {data.title}
            <FaArrowUpRightFromSquare className="h-4 w-4" />
          </a>
        </h2>

        <p className="mb-5 text-gray-600 italic">
          {data.summary}
        </p>


        {/* CONTENT */}
        <p className="mb-4 whitespace-pre-wrap">
          {data.description}
        </p>


        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map(tag => (
            <span key={tag} className="border border-black px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>


        {/* FOOTER */}
        <div className="flex justify-end items-center">
          <a href={data.github} target="_blank" className="flex items-center gap-2 border px-3 py-1 rounded hover:bg-pink-400 border border-black">
            <FaGithub className="h-4 w-4" />
            View Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
}