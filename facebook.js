let hat=document.getElementById("dates")
for(let i=1;i<=31;i++){
    hat.innerHTML+=`<option value=${i}>${i}</option>`;
}
let date=document.getElementById("datec")
for(let i=1908;i<=2025;i++){
    date.innerHTML+=`<option value=${i}>${i}</option>`;
}

let dot=document.getElementById("dated");
let months=["january","february","march","april","may","june","juLY","august","september","october","november","december"]
for(i=0;i<months.length;i++){
    dot.innerHTML+=`<option value=${months[i]}>${months[i]}</option>`
}

let divy=document.getElementById("divy")
divy.innerText+="suri"
document.write("surendra<br>")
document.write("<h1>divya</h1>")

//document.getElementById("divy").innerText="susi"//