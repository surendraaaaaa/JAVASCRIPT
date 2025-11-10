    var count=0;
    function increment(){
        count+=1;
        let increment=document.getElementById("count").innerText=`${count}`;
    }

    function decrement(){
        count-=1;
        let increment=document.getElementById("count").innerText=`${count}`;
    }

     function reset(){
        count=0;
        let increment=document.getElementById("count").innerText=`${count}`;
    }
