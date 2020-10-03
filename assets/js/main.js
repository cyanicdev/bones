let mode = window.matchMedia('(prefers-color-scheme: dark)');
let stored_theme = localStorage.getItem('theme');

let indicator = document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src;

if (!(stored_theme == '' || stored_theme == undefined)) {
    if (stored_theme == 'dark') {
        document.body.classList.add('dark');
    }
    else {
        document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src = indicator.replace("light", "dark");
    }
}
else if (mode.matches) {
    document.body.classList.add('dark');
    document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src = indicator.replace("dark", "light");
}
else { document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src = indicator.replace("light", "dark"); }


function toggleDarkMode() {
    indicator = document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src;

    document.body.classList.toggle('dark');

    if (indicator.includes("dark")) {
        document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src = indicator.replace("dark", "light");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.getElementsByClassName("dark-mode-toggle")[0].children[0].src = indicator.replace("light", "dark");
        localStorage.setItem("theme", "light");
    }
}

document.body.getElementsByClassName("dark-mode-toggle")[0].addEventListener('click', toggleDarkMode);