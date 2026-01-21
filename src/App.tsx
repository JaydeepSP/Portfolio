import { Layout } from "@/components/Layout";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/tabs/Projects";
import { Experience } from "@/components/tabs/Experience";
import { Education } from "@/components/tabs/Education";
import { TechStack } from "@/components/tabs/TechStack";
import { Connect } from "@/components/tabs/Connect";
import String from "@/components/ui/String";
import { SectionHeading } from "./components/ui/SectionHeading";

function App() {
  // const [activeTab, setActiveTab] = useState<Tab>("Projects");

  return (
    <Layout>
      <Profile />
      {/* <Navbar activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {/* Desktop Tabbed View */}
      {/* <div className="hidden md:block">
        <AnimatePresence mode="wait">
          {activeTab === "Projects" && <Projects key="Projects" />}
          {activeTab === "Experience" && <Experience key="Experience" />}
          {activeTab === "Education" && <Education key="Education" />}
          {activeTab === "Tech Stack" && <TechStack key="Tech Stack" />}
          {activeTab === "Connect" && <Connect key="Connect" />}
        </AnimatePresence>
      </div> */}

      {/* Mobile Vertical View */}
      <div className="space-y-24">
        <section id="projects">
          <SectionHeading title="Projects" />
          <Projects />
        </section>
        <section id="experience">
          <SectionHeading title="Experience" />
          <Experience />
        </section>
        <section id="education">
          <SectionHeading title="Education" />
          <Education />
        </section>
        <section id="tech-stack">
          <SectionHeading title="Tech Stack" />
          <TechStack />
        </section>
        <section id="connect">
          <SectionHeading title="Connect" />
          <Connect />
        </section>
      </div>

      <footer className="py-8 text-center text-sm text-text-secondary mt-12 relative">
        <String />
        <p>
          &copy; {new Date().getFullYear()} Jaydeep Prajapati. All rights
          reserved.
        </p>
      </footer>
    </Layout>
  );
}

export default App;
