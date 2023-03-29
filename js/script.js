const cancel = document.querySelector("#cancel");
const nav = document.querySelector(".navbar");
const open = document.querySelector("#i");
const header = document.querySelector(".header");

cancel.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    nav.classList.add("hidden");
    open.style.display = "block";
    cancel.style.display = "none";
    header.style.display = "none";
})

open.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.remove("hidden");
    open.style.display = "none";
    cancel.style.display = "block";
    header.style.display = "flex";
}
