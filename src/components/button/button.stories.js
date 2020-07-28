import "./button.css";
/* import button from "./button.html"; */

export default { title: "Button" };

function createButton(buttonText) {
  const button = document.createElement("button");
  button.classList = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);
  return button;
}

export const addToCart = () => {
  let button = createButton("Add to cart");

  button.addEventListener("click", () => alert("Hello"));

  return button;
};
