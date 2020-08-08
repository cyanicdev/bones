
let mode = window.matchMedia('(prefers-color-scheme: dark)');

if (mode.matches) {
    document.body.classList.add('dark');
}


let indicator;

function toggleDarkMode() {
    indicator = document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src;

    document.body.classList.toggle('dark');

    if (indicator.includes("light")) {
        document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src = indicator.replace("light", "dark");
    } else {
        document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src = indicator.replace("dark", "light");
    }
}


document.body.getElementsByClassName("dark-mode-toggle")[0].addEventListener('click', toggleDarkMode);