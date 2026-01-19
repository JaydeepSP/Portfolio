import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Mail, Github } from "lucide-react";

const links = [
  {
    name: "Twitter (X)",
    username: "@JaydeepPra58111",
    url: "https://x.com/JaydeepPra58111",
    icon: <Twitter size={24} />,
    color: "hover:!text-blue-400",
  },
  {
    name: "Instagram",
    username: "@___j._.d___",
    url: "https://www.instagram.com/___j._.d___/",
    icon: <Instagram size={24} />,
    color: "hover:!text-pink-500",
  },
  //   {
  //     name: "YouTube",
  //     username: "@JaydeepPrajapati-bj8xg",
  //     url: "https://www.youtube.com/@JaydeepPrajapati-bj8xg",
  //     icon: <Youtube size={24} />,
  //     color: "hover:!text-red-500",
  //   },
  {
    name: "LinkedIn",
    username: "/in/jaydeep-prajapati-614688214",
    url: "https://www.linkedin.com/in/jaydeep-prajapati-614688214/",
    icon: <Linkedin size={24} />,
    color: "hover:!text-blue-700",
  },
  {
    name: "GitHub",
    username: "@JaydeepSP",
    url: "httpls://github.com/JaydeepSP",
    icon: <Github size={24} />,
    color: "hover:!text-gray-800",
  },
  {
    name: "Email",
    username: "jaydeepprajapati456@gmail.com",
    url: "mailto:jaydeepprajapati456@gmail.com",
    icon: <Mail size={24} />,
    color: "hover:!text-orange-500",
  },
];

export function Connect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4"
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className="flex items-center gap-6 p-4 bg-white dark:bg-card-bg-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group"
        >
          <div
            className={`p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl text-text-primary-light dark:text-text-primary-dark ${link.color} transition-colors`}
          >
            {link.icon}
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
              {link.name}
            </span>
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              {link.username}
            </span>
          </div>
        </a>
      ))}
    </motion.div>
  );
}
