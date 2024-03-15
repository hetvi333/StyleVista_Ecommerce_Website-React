import React from "react";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <AppRoutes />
      <Footer />
      
    </div>
  );
};

export default App;
