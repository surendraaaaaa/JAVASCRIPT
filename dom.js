/*document.getElementById("fat").style.color="pink"
document.getElementsByClassName("hat[0]").style.color="red"
let classa=document.getElementsByClassName("hat")
classa[1].style.color="red"

for(let i=0;i<classa.length;i++){
    classa[i].style.color="yellow"
}*/
document.getElementsByTagName("h2")[0].style.color="blue"

document.querySelector("#fat").style.color="green"
document.querySelector(".hat").style.color="green"

let input=document.createElement("h1")
input.innerText="firstname"
document.body.appendChild(input)

let gone=document.getElementById("fat")
gone.remove()

document.querySelector("h1").innerText="surendradivyasruthi"

let jet=document.getElementById("jet")
let newpara=document.createElement("p")
newpara.innerText="surendra loves divya"
jet.replaceWith(newpara)

input.replaceWith("<h1>surendra</h1>")

let kitty=document.getElementById("kitty")
console.log(kitty.getAttribute("class"));
kitty.setAttribute("class","rifile")
console.log(kitty.getAttribute("class"));
kitty.setAttribute("src","viratkohliadda")
console.log(kitty.getAttribute("src"));

