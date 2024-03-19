import React from "react";
import "./index.css";
import FormVendor from "./components/FormVendor";
import Header from "./components/Header";
import Announcement from "./components/Announcement";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Announcement />
        </div>
        <div>
          <Header />
        </div>
        <FormVendor />
      </div>
    </>
  );
}

export default App;
