import restaurantImage from "./assets/restaurant.jpg";
import {clearContent} from "./clearContent.js";

export const home = function() {
    const content = document.querySelector("#content");
    clearContent();
    
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to our restaurant";
    content.appendChild(h1);

    const img = document.createElement("img");
    img.src = restaurantImage;
    content.appendChild(img);

    const p = document.createElement("p");
    p.textContent = "Goated restaurant. Let's goooooooo! I don't know what to write here. Even AI predicted what I was about to write. Holy cow.";
    content.appendChild(p);
}