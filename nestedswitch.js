/*let day=prompt("enter day")
 switch(day){
    default:
        console.log("noday");
        break;
        
    case "tuesday":
    console.log("today is tuesday");
    break;
    case "monday":
    console.log("today is monday");
    break; 
    case "wednesday":
    console.log("today is wednesday");       
 }*/


let cricketers=prompt(("enter your favourite cricketers"));
let skills=prompt("enter skills of cricketer");

switch(cricketers){
    case "virat kohli":
        console.log("cricketer:virat kohli");
     
        switch(skills){
            case "batting":
            console.log("he has batting skills");
            break;
            case "fielding":
            console.log("he has fielding skills");
            break;
            default:
                console.log("no skills found");                              
     } 
     break;
        case "MS dhoni":
            console.log("cricketer:ms dhoni");
                switch(skills){
                    case "batting":
                        console.log("batting skills");
                        break;
                        case "keeping":
                            console.log("keeping skills");
                            break;
                            default:
                                console.log("no skills found");      
                
            }
            break;
            default:
                console.log("no cricketer found");
                

}

