import { FaGithub, FaXTwitter, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6"
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pfp from "../assets/pfp.png"

function About() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <FaXTwitter className="h-5 w-5" />,
      href: "https://x.com/sulkaz00",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="h-5 w-5" />,
      href: "https://github.com/pablo-972",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="h-5 w-5" />,
      href: "https://linkedin.com/in/pablo-aguilar-897407334",
    },
  ];

  const contactDetails = [
    {
      name: "LinkedIn",
      value: "Pablo",
      href: "https://linkedin.com/in/pablo-aguilar-897407334",
      icon: <FaRegEnvelope className="h-5 w-5 text-pink-500" />,
    },
    {
      name: "Twitter / DM",
      value: "@sulkaz00",
      href: "https://x.com/sulkaz00",
      icon: <FaXTwitter className="h-5 w-5 text-pink-500" />,
    },
    {
      name: "Mail",
      value: "sulkaz@proton.me",
      href: "mailto:sulkaz@proton.me",
      icon: <FaRegEnvelope className="h-5 w-5 text-pink-500" />,
    },
  ];

  return (
    <div>
        <Navbar/>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* HERO */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 -mt-40">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
            >
                <img
                src={pfp}
                alt="profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-black shadow-lg mx-auto"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-2"
            >
                Pablo
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-2xl font-mono mb-5 mt-2"
            >
                Software Engineer & Master's in Cybersecurity
            </motion.p>


            {/* SOCIALS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
            >
                {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="p-3 border border-black rounded-lg hover:text-pink-500 transition-colors transition"
                >
                    {link.icon}
                </a>
                ))}
            </motion.div>
            </section>



            {/* ABOUT */}
            <section className="px-6 py-10 md:px-30 -mt-60 mb-30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="main-card max-w-4xl mx-auto p-8 border-1 border-black rounded-2xl bg-white/5 shadow-lg"
            >
                <h2 className="text-3xl font-semibold text-center mb-4">About Me</h2>
                <p className="text-lg text-center max-w-2xl mx-auto mb-10">
                    Software engineer with a special interest in cybersecurity and artificial intelligence. I am currently pursuing a Master’s degree in
                    Cybersecurity. I am writing my master’s thesis on a malware analysis system based on AI agents. <br/> <br/>

                    I have participated in research on critical vulnerabilities in DRAM memory (as part of my final degree project on Presshammer), developing proactive mitigations using AI, 
                    and I have collaborated with the National Police (cybercrime unit) in identifying and reporting a criptographic critical vulnerability in the Andalusian public transit card.
                </p>

                {/* DIVIDER */}
                <div className="border-t border-black my-10 w-full max-w-xl mx-auto"></div>

                {/* CONTACT */}
                <h3 className="text-2xl font-semibold text-center mb-6">Contact</h3>

                <div className="max-w-md mx-auto space-y-4">
                {contactDetails.map((detail) => (
                    <div key={detail.name} className="flex items-center p-4 rounded-lg border border-black hover:bg-black/5 transition">
                    {detail.icon}

                    <div className="ml-4 flex-1">
                        <p className="text-sm font-semibold">{detail.name}</p>
                        <a href={detail.href} target="_blank" className="text-sm text-gray-600 hover:text-pink-500 transition break-all">
                        {detail.value}
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </motion.div>
            </section>

        </div>
        <Footer/>

    </div>
  );
}

export default About;
