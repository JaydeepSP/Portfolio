import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { Navbar, type Tab } from "./components/Navbar";
import { Ventures } from "./components/tabs/Ventures";
import { Services } from "./components/tabs/Services";
import { Clients } from "./components/tabs/Clients";
import { TechStack } from "./components/tabs/TechStack";
import { Connect } from "./components/tabs/Connect";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Ventures");

  return (
    <Layout>
      <Profile />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "Ventures" && <Ventures key="Ventures" />}
          {activeTab === "Services" && <Services key="Services" />}
          {activeTab === "Clients" && <Clients key="Clients" />}
          {activeTab === "Tech Stack" && <TechStack key="Tech Stack" />}
          {activeTab === "Connect" && <Connect key="Connect" />}
        </AnimatePresence>
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
