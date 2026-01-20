import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Profile } from "@/components/Profile";
import { Navbar, type Tab } from "@/components/Navbar";
import { Projects } from "@/components/tabs/Projects";
import { Experience } from "@/components/tabs/Experience";
import { Education } from "@/components/tabs/Education";
import { TechStack } from "@/components/tabs/TechStack";
import { Connect } from "@/components/tabs/Connect";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Projects");

  return (
    <Layout>
      <Profile activeTab={activeTab} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Desktop Tabbed View */}
      <div className="hidden md:block">
        <AnimatePresence mode="wait">
          {activeTab === "Projects" && <Projects key="Projects" />}
          {activeTab === "Experience" && <Experience key="Experience" />}
          {activeTab === "Education" && <Education key="Education" />}
          {activeTab === "Tech Stack" && <TechStack key="Tech Stack" />}
          {activeTab === "Connect" && <Connect key="Connect" />}
        </AnimatePresence>
      </div>

      {/* Mobile Vertical View */}
      <div className="md:hidden space-y-24">
        <section id="projects">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">
            Projects
          </h2>
          <Projects />
        </section>
        <section id="experience">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">
            Experience
          </h2>
          <Experience />
        </section>
        <section id="education">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">
            Education
          </h2>
          <Education />
        </section>
        <section id="tech-stack">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">
            Tech Stack
          </h2>
          <TechStack />
        </section>
        <section id="connect">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">
            Connect
          </h2>
          <Connect />
        </section>
      </div>

      <footer className="py-8 text-center text-sm text-text-secondary border-t border-gray-300 dark:border-gray-100/50 mt-12">
        <p>
          &copy; {new Date().getFullYear()} Jaydeep Prajapati. All rights
          reserved.
        </p>
      </footer>
    </Layout>
  );
}

export default App;
