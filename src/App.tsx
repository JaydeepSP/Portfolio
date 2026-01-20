import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Profile } from "@/components/Profile";
import { Navbar, type Tab } from "@/components/Navbar";
import { Ventures } from "@/components/tabs/Ventures";
import { Services } from "@/components/tabs/Services";
import { Clients } from "@/components/tabs/Clients";
import { TechStack } from "@/components/tabs/TechStack";
import { Connect } from "@/components/tabs/Connect";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Ventures");

  return (
    <Layout>
      <Profile activeTab={activeTab} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Desktop Tabbed View */}
      <div className="hidden md:block">
        <AnimatePresence mode="wait">
          {activeTab === "Ventures" && <Ventures key="Ventures" />}
          {activeTab === "Services" && <Services key="Services" />}
          {activeTab === "Clients" && <Clients key="Clients" />}
          {activeTab === "Tech Stack" && <TechStack key="Tech Stack" />}
          {activeTab === "Connect" && <Connect key="Connect" />}
        </AnimatePresence>
      </div>

      {/* Mobile Vertical View */}
      <div className="md:hidden space-y-24">
        <section id="ventures">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">Ventures</h2>
          <Ventures />
        </section>
        <section id="services">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">Services</h2>
          <Services />
        </section>
        <section id="clients">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">Clients</h2>
          <Clients />
        </section>
        <section id="tech-stack">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">Tech Stack</h2>
          <TechStack />
        </section>
        <section id="connect">
          <h2 className="text-xl font-bold mb-8 dark:text-white uppercase tracking-wider text-gray-400">Connect</h2>
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
