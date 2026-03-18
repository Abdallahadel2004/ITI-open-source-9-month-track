import Hero from "./animated-shader-hero";

// Demo Component showing how to use the Hero for the Sorting Lab
const HeroDemo: React.FC = () => {
  const handlePrimaryClick = () => {
    console.log('Explore Algorithms clicked!');
    // Add navigation or scroll logic here
  };

  const handleSecondaryClick = () => {
    console.log('Start Sorting clicked!');
    // Add navigation or scroll logic here
  };

  return (
    <div className="w-full">
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
      
      {/* Implementation Guide */}
      <div className="bg-zinc-900 text-zinc-300 p-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Sorting Lab Core Integration
          </h2>
          <div className="bg-black/50 p-6 rounded-xl border border-zinc-800 backdrop-blur-sm">
            <h3 className="text-orange-400 font-semibold mb-2">Usage Instructions:</h3>
            <pre className="text-sm text-zinc-400 overflow-x-auto">
{`<Hero
  trustBadge={{
    text: "Elite Sorting Visualizer",
    icons: ["⚡", "✨"]
  }}
  headline={{
    line1: "Algorithm",
    line2: "Visualization"
  }}
  subtitle="Hyper-fast sorting visualizer..."
  buttons={{
    primary: { text: "Visualize", onClick: handleSort },
    secondary: { text: "Reset", onClick: handleReset }
  }}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;
