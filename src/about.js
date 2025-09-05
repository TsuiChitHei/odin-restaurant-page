import {clearContent} from "./clearContent.js";

export const about = function() {
    const content = document.querySelector("#content");
    clearContent();

    const h1 = document.createElement("h1");
    h1.textContent = "About us";
    content.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "We are a restaurant that serves delicious food. We have a variety of dishes to choose from. We are located in the heart of the city.";
    content.appendChild(p);
}

