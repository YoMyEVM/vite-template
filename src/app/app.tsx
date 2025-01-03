import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import ChartComponent from "../components/ChartComponent";
import TradingComponent from "../components/TradingComponent";
import StatsComponent from "../components/StatsComponent";


const App: React.FC = () => {
  const [selectedTokenSymbol, setSelectedTokenSymbol] = useState<string | null>(null); // Hold the token name
  const [currentPrice, setCurrentPrice] = useState<number | null>(null); // Hold the token price
  const [currentView, setCurrentView] = useState<"OBuyer" | "OSeller">("OBuyer");

  // Function to handle token selection and set its symbol and price
  const handleSelectToken = (symbol: string, price: number) => {
    setSelectedTokenSymbol(symbol); // Set the token name
    setCurrentPrice(price); // Set the token price
  };

  return (
    <div style={styles.appContainer}>
      {/* Navbar with view switcher */}
      <Navbar setView={setCurrentView} />

      <div style={styles.contentContainer}>
        {/* Sidebar */}
        <Sidebar onSelectToken={handleSelectToken} />

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Chart Component */}
          <div style={styles.chart}>
            <ChartComponent
              selectedTokenSymbol={selectedTokenSymbol}
              currentPrice={currentPrice}
              currentView={currentView}
            />
          </div>

          {/* Bottom Row */}
          <div style={styles.bottomRow}>
            <TradingComponent />
            <StatsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: "flex",
    flexDirection: "column", // Column layout to include Navbar
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    backgroundColor: "#0c0c0c", // Black background
  },
  contentContainer: {
    display: "flex",
    flex: 1, // Takes up all remaining space below Navbar
  },
  mainContent: {
    flex: 1, // Takes the remaining space next to Sidebar
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  chart: {
    flex: 2, // Larger top component
    display: "flex",
    marginBottom: "15px", // Adds margin below the chart
  },
  bottomRow: {
    flex: 1, // Bottom row with equal spacing
    display: "flex",
    flexDirection: "row",
  },
};

export default App;