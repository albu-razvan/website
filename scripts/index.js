import { registerHoverListeners } from "./hover.js";

window.addEventListener("load", () => {
  registerHoverListeners(document.getElementsByClassName("container"));
  window.removeEventListener("load", this);
});

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    document.body.style.display = "unset";

    document.removeEventListener("readystatechange", this);
  }
});
