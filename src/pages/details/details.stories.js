import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    /*  alert("BUTTON!!!"); */
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      alert(button.innerHTML);
      button.innerHTML = "hi fische";
    });
  });

  return `<button class="btn">H(a)i Fische</button)`;
};

/* Calls internal alert function */
/* let message = "Hello fishy";
message = "Fish Ahoi"; */

/* const numberOfStudents = 15;
const message = `Hello ${numberOfStudents} fishes`;
alert(message);
 */
