// import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./components/Pet.jsx";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),

//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <Pet name="Patti" animal="Patti" breed="Pattida patti" />
        <Pet name="Thendi Patti" animal="Thendi Patti" breed="Pattida patti" />
        <Pet name="Sori Patti" animal="Sori Patti" breed="Pattida patti" />
      </div>
      <div>Content</div>
      <div>Footer</div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
