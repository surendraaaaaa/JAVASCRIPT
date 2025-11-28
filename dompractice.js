let img=document.getElementById("img")
console.log(img.getAttribute("src"));
img.setAttribute("alt","myphoto")
console.log(img.hasAttribute("id"));

let h1=document.getElementById("h1")
h1.classList.remove("text-red-500")
h1.classList.add("text-blue-500")

function btn(){
    let theme=document.getElementById("theme")
    theme.classList.toggle("bg-white")
     theme.classList.toggle("bg-black")
}

function nbt(){
    let text=document.getElementById("text")
    text.classList.toggle("hidden")
}

let not=document.getElementById("not")
not.classList.add("active")
console.log(not.classList);
