import "./button.css";
import { createButton } from "./button";

export default { title: "Button" };

export const addToCart = () => {
  let button = createButton("Add to cart");

  button.addEventListener("click", () => {
    alert("Hello");
  });

  return button;
};
