        let greet = "surendra"
        includingTax = 0;
        //let greet = prompt("Enter Name: ");
        document.getElementById("greet").innerText = `Welcome ${greet}`;

        function totalBill(quantity, tax = 0.02) {
            let arr = [
                { name: "Biriyani", price: 150 },
                { name: "Mandi", price: 250 },
                { name: "IceCream", price: 50 }
            ];

            let item = document.getElementById("table");
            for (i = 0; i < arr.length; i++) {

                let total = arr[i].price * quantity;
                let totaltax = total * tax;
                includingTax += (totaltax + total);

                item.innerHTML += `
    <tr>
        <td>${arr[i].name}</td>
       <td>${arr[i].price}</td>
        <td>${quantity}</td>
        <td>${total}</td>
        <td>${total + totaltax}</td>
    </tr>`
            }

            item.innerHTML += `
    <tr>
        <td columnspan="1"></td>
       <td></td>
        <td></td>
        <td><h4>You have to Pay:</h4></td>
        <td> <h4>Rs.${includingTax}/-</h4></td>
     </tr>`
        }