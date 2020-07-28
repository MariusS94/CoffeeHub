export function createButton(buttonText) {
  const button = document.createElement("button");
  button.classList = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);
  return button;
}
