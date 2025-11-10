let not=document.getElementById("why")
not.innerText+=" divya"

let whynot=document.getElementById("whynot")
let months=["january","febrauary","march","april","may","june","july","august","september","october","november","december"]
for(let i=0;i<months.length;i++){
    whynot.innerHTML+=`<option value=${months[i]}>${months[i]}</option>`

}