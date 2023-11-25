// import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { SiteProvider } from "./contexts/site.jsx";

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
      <SiteProvider>
        <Header />
      </SiteProvider>
      <div></div>
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
