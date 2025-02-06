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
<<<<<<< HEAD
=======
    const volumeDowm = () => {
        var audio = document.getElementById("audio");
        audio.volume = 0.1;
    };
    volumeDowm();
>>>>>>> e2f42c68c81803ad0d0f1aefbe5cf250f9480e68
    welcome();
    navbar();
    home();
    bride()
    time();
    gallery();
    wishes();
<<<<<<< HEAD
=======

>>>>>>> e2f42c68c81803ad0d0f1aefbe5cf250f9480e68
});