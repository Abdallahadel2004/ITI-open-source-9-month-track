import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from '../components/ui/animated-shader-hero'
import '../src/index.css'

const HeroWrapper = () => {
  const handlePrimaryClick = () => {
    document.querySelector('.controls-card')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryClick = () => {
    document.querySelector('.visualizer-card')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Hero
      trustBadge={{
        text: "Elite Sorting Visualizer Architecture",
        icons: ["✨"]
      }}
      headline={{
        line1: "Visualize the",
        line2: "Matrix of Sorting"
      }}
      subtitle="Experience high-performance algorithm visualization with real-time shader-backed analytics. Built for precision, performance, and pure aesthetics."
      buttons={{
        primary: {
          text: "Explore Algorithms",
          onClick: handlePrimaryClick
        },
        secondary: {
          text: "Start Sorting Now", 
          onClick: handleSecondaryClick
        }
      }}
    />
  )
}

const rootElement = document.getElementById('hero-root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HeroWrapper />
    </React.StrictMode>,
  )
}
