// app/page.js
'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import Footer from '../components/Footer';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.getElementById('body')?.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.getElementById('body')?.classList.toggle('dark-mode');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark-mode' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <HowItWorks darkMode={darkMode} />
      <WhyChooseUs darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <ChatWidget darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
