import React from "react";
import Header from "./components/Header";
import Inputfield from "./components/Inputfield";

const App = () => {
  return (
    <div className=" bg-white max-w-md mx-auto mt-10 overflow-hidden rounded-lg">
      <div className="bg-indigo-600 ">
        <Header />
      </div>
      <Inputfield />
    </div>
  );
};

export default App;
