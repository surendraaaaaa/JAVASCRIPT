let gog=document.getElementById("gog")

let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
for(let i=0;i<5;i++){
    gog.innerHTML+=`<li>${products[i]}</li>`
}

  let prices = [1000, 2000, 3000, 1500];
    let table = document.getElementById("tab");

    for(let i = 0; i < prices.length; i++){
      let discountPrice = prices[i] - (prices[i] * 0.10);
      let row = "<tr><td>" + prices[i] + "</td><td>" + discountPrice + "</td></tr>";
      table.innerHTML += row;
    }