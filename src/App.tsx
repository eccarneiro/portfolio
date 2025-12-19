import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen px-6 py-12 md:px-20 max-w-7xl mx-auto selection:bg-neon selection:text-white">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="space-y-12 md:space-y-32">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
