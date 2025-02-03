import { home } from "./js/home.js";
import { bride } from "./js/bride.js";
import { time } from "./js/time.js";
import { gallery } from "./js/gallery.js";
import { wishes } from "./js/wishes.js";
import { navbar } from "./js/navbar.js";
import { welcome } from "./js/welcome.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    const volumeDowm = () => {
        var audio = document.getElementById("audio");
        audio.volume = 0.1;
    };
    volumeDowm();
    welcome();
    navbar();
    home();
    bride()
    time();
    gallery();
    wishes();

});