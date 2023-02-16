const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Jane",
      breed: "Golden Retriever",
    }),

    React.createElement(Pet, {
      animal: "Bird",
      name: "pepper",
      breed: "cocktail",
    }),
    React.createElement(Pet, {
      animal: "cat",
      name: "doink",
      breed: "mixed",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
