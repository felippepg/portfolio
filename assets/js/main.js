
let botao = document.querySelector(".responsive-area");
let menu = document.querySelector(".menu ul");
let menu_open = false;


botao.onclick = () => {
    if(menu_open === false) {
        menu.style.display = "flex";
        menu_open = true;

    }
    else {
        menu.style.display = "none";
        menu_open = false;
    }
}