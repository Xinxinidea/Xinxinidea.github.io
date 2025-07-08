// Toggle light / dark modes
document.getElementById("toggleLightDark").addEventListener("click", () => {

    document.getElementsByTagName("body")[0].classList.toggle("bodyDark");

    document.getElementById("oval").classList.toggle("ovalDark");

    document.getElementById("nav").classList.toggle("nav-dark");

    let sun = document.getElementById("sun");
    if (sun) {
        if (window.getComputedStyle(sun, null).getPropertyValue("display") == "none") {
            sun.style.display = "block";
        } else {
            sun.style.display = "none";
        }
    }

    let moon = document.getElementById("moon");
    if (moon) {
        if (window.getComputedStyle(moon, null).getPropertyValue("display") == "none") {
            moon.style.display = "block";
        } else {
            moon.style.display = "none";
        }
    }

    let social = document.getElementById("social");
    if (social) {
        if (social.getAttribute("fill") == "#2E2D2D") {
            social.setAttribute("fill", "#D9D9D9");
        } else {
            social.setAttribute("fill", "#2E2D2D");
        }
    }

    let email = document.getElementById("email");
    if (email.getAttribute("fill") == "#2E2D2D") {
        email.setAttribute("fill", "#D9D9D9");
    } else {
        email.setAttribute("fill", "#2E2D2D");
    }

    let github = document.getElementById("github");
    if (github.getAttribute("fill") == "#2E2D2D") {
        github.setAttribute("fill", "#D9D9D9");
    } else {
        github.setAttribute("fill", "#2E2D2D");
    }

    let penguinLight = document.getElementById("penguin-light");
    if (penguinLight) {
        if (window.getComputedStyle(penguinLight, null).getPropertyValue("display") == "none") {
            penguinLight.style.display = "block";
        } else {
            penguinLight.style.display = "none";
        }
    }

    let penguinDark = document.getElementById("penguin-dark");
    if (penguinDark) {
        if (window.getComputedStyle(penguinDark, null).getPropertyValue("display") == "none") {
            penguinDark.style.display = "block";
        } else {
            penguinDark.style.display = "none";
        }
    }

    let titleSectionsLight = document.getElementsByClassName("section-title-container-light");
    if (titleSectionsLight) {
        for (let i = 0; i < titleSectionsLight.length; i++) {
            console.log(window.getComputedStyle(titleSectionsLight.item(i)).getPropertyValue("display"));
            if (window.getComputedStyle(titleSectionsLight.item(i)).getPropertyValue("display") == "none") {
                titleSectionsLight.item(i).style.display = "flex";
            } else {
                titleSectionsLight.item(i).style.display = "none";
            }
        }
    }

    let titleSectionsDark = document.getElementsByClassName("section-title-container-dark");
    if (titleSectionsDark) {
        for (let i = 0; i < titleSectionsDark.length; i++) {
            if (window.getComputedStyle(titleSectionsDark.item(i)).getPropertyValue("display") == "none") {
                titleSectionsDark.item(i).style.display = "flex";
            } else {
                titleSectionsDark.item(i).style.display = "none";
            }
        }
    }

});