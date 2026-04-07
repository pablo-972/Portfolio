import { FaGithub, FaXTwitter, FaLinkedinIn  } from "react-icons/fa6"


export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-sm"> © {new Date().getFullYear()} Pablo/Sulkaz. All rights reserved.</p>
            <p className="text-sm italic"> 
                Based on the original portfolio by Smukx@Whitecat18 
            </p>
          </div>


          {/* Social links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/pablo-972"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>


            <a
              href="https://x.com/sulkaz00"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>


            <a
              href="https://linkedin.com/in/pablo-aguilar-897407334"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Medium"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>


          </div>
        </div>
      </div>
    </footer>
  );
}