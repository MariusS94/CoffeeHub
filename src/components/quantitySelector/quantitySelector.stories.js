import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";
import { useEffect } from "@storybook/client-api";

export default { title: "Quantity Selector" };

export const basic = () => {
  useEffect(() => {
    const minusButton = document.querySelector(".btn_one");
    const plusButton = document.querySelector(".btn_two");
    const resultElement = document.querySelector(".result_field");

    minusButton.addEventListener("click", () => {
      const oldResult = Number(resultElement.innerHTML);
      if (oldResult === 2) {
        minusButton.disabled = true;
      }
      resultElement.innerHTML = oldResult - 1;
    });
    plusButton.addEventListener("click", () => {
      const oldResult = Number(resultElement.innerHTML);
      if (oldResult === 1) {
        minusButton.disabled = false;
      }
      resultElement.innerHTML = oldResult + 1;
    });
  });

  return quantitySelector;
};
