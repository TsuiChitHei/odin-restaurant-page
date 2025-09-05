import menuImage from "./assets/menu.jpg";
import {clearContent} from "./clearContent.js";

export const menu = function() {
    const content = document.querySelector("#content");
    clearContent();

    const img = document.createElement("img");
    img.src = menuImage;
    content.appendChild(img);

}