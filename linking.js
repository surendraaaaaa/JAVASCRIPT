let day = document.getElementById("day");
for(let i=1;i<=31;i++){
    day.innerHTML += `<option value=${i}>${i}</option`;
}