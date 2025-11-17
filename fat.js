

    const gate={
        name:"surendra",
        age:20,
        lover:"divya",
        lovers:true
    }
    console.log(gate);

    let array1=[1,2,3,4,5,6,7,8,9]
    console.log(array1);
    let disco=new Array(1,2,3,4,5,6,)
console.log(disco);
let vat={
    name:"surendra",
    age:20,
    lover:true
}
console.log(vat);
let fishco=new Array()
fishco.name="surendra"
fishco.age=20
fishco.lover=true
console.log(fishco);

let date=new Date()
console.log(date.getDay());

let persondetails= new Map([
    ["username","surendra"],
    ["password",1234566],
    ["channelexistence",true],
])
/*console.log(persondetails.get("password"));
persondetails.set("city","hyderabad")
console.log(persondetails);
console.log(persondetails.delete("city"));
console.log(persondetails);
persondetails.clear();
console.log(persondetails);
console.log(persondetails.has("password"));

let kites=new Set([1,2,3,4,5,6,7,8,9])
console.log(kites);
let kitefs=new Set([1,2,1,2,3,4,5,6,7,8,9,56])
console.log(kitefs);
console.log(kitefs.add(5454));
console.log(kitefs.delete(4));
console.log(kitefs.has(5211));
console.log(kitefs.size);
for(item of kites){
console.log(item)
}*/

/*let persoondetails= new Map([
    ["username","surendra"],
    ["password",1234566],
    ["channelexistence",true],])


for([Key,value] of persoondetails){
    console.log(`${key} : ${value}`);  
}*/



let personinformation={
    name:"surendra",
    age:20
}
console.log(personinformation);
personinformation.city="hyderabad"
console.log(personinformation);

let cardetails=new Object()
cardetails.name="audi"
cardetails.price=1000
cardetails.fuelcapacity="2liters"
console.log(cardetails);


let movie={
    name:"bahubali",
    hero:"prabhas",
    heroine:"anushka",
    released:true,
    othercast:["satyaraj","ramyakrishna","nazar"],
    location:{
        primarylocation:"india",
        secondarylocation:"foreign",
        thirdlocation:"newzealand"
    }
}
console.log(movie);




let bahubali=["prabhas","anushka","rana",{
    director:"rajamouli",
    musicdirector:"MMkeeravani",
    dancemaster:"surendra"
}]
console.log(bahubali[3].dancemaster);

let employeedetails={
    name:"surendra",
    rollno:259,
    location:"hyderabad",
    salary:50000,
    details:function(){
        console.log(`here is the details of ${this.name},his id is ${this.rollno},his location is ${this.location},and his monthly package ${this.salary}`);
    }
}

employeedetails.details()




function hat(){
    console.log("surendra");
    console.log("divya");
    console.log("sruthi");   
}
hat()
//regular function//



//function expression//
let suri=function jet(){
    console.log("suri");
    console.log("navya");
    console.log("gopi"); 
}
suri()
//function with parameters//
let haty=function(a,b){
    return a+b;
} 
let fat=haty(5,5)
console.log(fat);
//function with return type//

function hatty(a,h){
    console.log(a+h);
}
hatty(5,3 )

let newfunc=() =>
    console.log("rfkrf");
    console.log("wushwu");
    console.log('wsk');
newfunc()
function greety(name="fish"){
    console.log(`hello ${name}!`);
    
}greety(name="suri")

function wave(a,b){
    return a+b;
}
console.log(wave(4.12,635));

let frnd=function(price1,price2){
    return price1+price2
}
let price=frnd(100,200)
let totalprice=price+200
console.log(totalprice);


    
    (
        function banner(){
            console.log("functiontype");
        }()
    )