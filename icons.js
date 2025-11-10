         function rate(value){
             for(let i=1;i<=5;i++){
            document.getElementById("star"+i).style.color="rgb(104, 102, 102)";
            }

            for(let i=1; i<=value; i++){
               document.getElementById("star"+i).style.color="gold";
            }
       
 

            document.getElementById("rating").innerText=`${value}/5`
            document.getElementById("time").innerText=`
            ${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getHours()}   ${new Date().getHours()}/${new Date().getMinutes()}/${new Date().getHours()}`;
        }
        