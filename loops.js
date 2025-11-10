/*let purchasedamount=Number(prompt("enter purchased amount"))
if(purchasedamount>=1000 && purchasedamount<=2000){
    console.log("ten percent discount"); 
}else if(purchasedamount>=2000 && purchasedamount<=5000){
    console.log("twenty percent discount");
    
}else if(purchasedamount>5000){
    console.log("thirty percent and free delivery"); 
}
else{
    console.log("no discount");
}*/








/*let ticketprice;
let age=Number(prompt("enter age"))
if(age<5){
    ticketprice=100
console.log("age:"+age+" ticketprice:"+ticketprice);
}else if(age>=12 && age<=60){
    ticketprice=200
    console.log("age:"+age+"ticketprice:"+ticketprice);   
}else{
    ticketprice=160
    console.log("age:"+age+"ticketprice:"+ticketprice);  
}*/








/*let marks=Number(prompt("enter marks"))
if(marks>90 && marks<=100){
    console.log("excellent - grade A");
}else if(marks>=75 && marks<=90){
    console.log("good - grade B");
    
}else if(marks>=50 && marks<=75){
    console.log("Average - grade c");
    
}else{
    console.log("failed-needs improvement");
    
}*/









/*let temperature=Number(prompt("enter temperature degree celsius "))
if(temperature<10){
    console.log("it's freezing cold,wear a jacket");
}else if(temperature>=10 && temperature<=25){
    console.log("cool weather perfect for outdoor activities");
    
}else if(temperature>25 && temperature<=35){
    console.log("warm day,stay hydrated");
    
}else{
    console.log("it's too hot avoiding go out in the afternoon");
    
}*/




/*let monthlyincome=Number(prompt("enter your monthly income"))
if(monthlyincome>=20000 && monthlyincome<=50000){
    console.log("u r eligible for loan");
}else if(monthlyincome>50000){
    console.log("u r eligible for both personal and home loans"); 
}else{
    console.log("u r not eligible for loan");
    
}*/




/*
let order_value=Number(prompt("enter order price"))
let premium_member=prompt("r u a premium member")

if(order_value>=200&&order_value<500){
if(premium_member==="yes"){
 console.log("delivery free for u");  
}else{
    console.log("50/- for delivery charge");
    
}
}else if(order_value>=500&&order_value<1000){
    if(premium_member==="yes"){
        console.log("delivery free for uu");
    }else{
        console.log("25/-rs for delivery fee");
        
    }
}else if(order_value>=1000){
    console.log("free delivery will be apply");
}else if(order_value<200){
    console.log("not avaliable for this order price");
    
}
*/




/*let issue=prompt("enter your emergency type--emergency/normal checkup")
let age=Number((prompt("enter your age")))
if(age<10&&issue==="normal checkup"){
    console.log("go to pediatric section");

}else if(age>=10&&age<=60&&issue=="normal checkup"){
    console.log("go to general section");
    
}else if(age>60&&issue=="normal checkup"){
    console.log("go to senior citizen section");  
}
if(issue==="emergency"){
    console.log("send to emergency immediately");
    
}*/









/*let unitsconsumed=Number(prompt("enter how many units you consumed"))
let charges;
let penalty;
if(unitsconsumed<100){
    charges=350
    console.log("charges:"+charges);
    
    console.log("minimum charge only");
    
}else if(unitsconsumed>=100 && unitsconsumed<=300){
    charges=1000
    console.log("charges:"+charges);
    
    console.log("normal consumption");
    
}else if(unitsconsumed>300 && unitsconsumed<=500){
    charges=1500
    console.log("charges:"+charges);
    
    console.log(" your bill is higher and try to reduce your consumed units by taking necessary actions");
    
}else if(unitsconsumed>500){
    charges=3000
    penalty=200
    console.log("charges:"+charges);
    console.log("for consuming high units we are adding penalty charges:"+penalty);
    console.log("now total payable amount:"+(charges+penalty)); 
}*/



/*
let monthlyusagegb=Number(prompt("enter your monthlyusagegb"))
let amount;

if(monthlyusagegb===0){
    console.log("what you that is not in our plans,please select in what you provide data packs");  
}
else if(monthlyusagegb<5){
amount=200
console.log("basic plan");
console.log("amount:"+amount);
}else if(monthlyusagegb>=5 && monthlyusagegb<20){
    amount=450
    console.log("amount:"+amount); 
    console.log("standard paln");
    
}else if(monthlyusagegb>=20 && monthlyusagegb<=50){
    amount=650
    console.log("amount:"+amount);
    console.log("premium plan");
    
}else if(monthlyusagegb>50 && monthlyusagegb){
    amount=999
    console.log("amount:"+amount);
    console.log("unlimited plan");
} */




/*if(monthlyusagegb===0){
    console.log("what you that is not in our plans,please select in what you provide data packs");
    
}*/



/*
let subject1=Number(prompt("enter subject1 marks"))
let subject2=Number(prompt("enter subject2 marks"))
let subject3=Number(prompt("enter subject3 marks"))

if(subject1>=35&&subject2>=35&&subject3>=35){

    console.log("passed");
    console.log("total marks="+(subject1+subject2+subject3))
}else if(subject1>=35&&subject2<35&&subject3>=35){
    console.log("supplementary");
    console.log("total marks:"+(subject1+subject2+subject3));  
}else if(subject1<35&&subject2<35&&subject3>=35){
    console.log("failed");
    console.log("total marks:"+(subject1+subject2+subject3));
}
 */




 /*let room_type=prompt("enter room type:standard/deluxe/suite")
let no_of_nights=Number(prompt("enter how many nights you want to stay"))
let rating=Number(prompt("enter ratings"))
let cost;
if(room_type==="standard"){
    cost=1000*no_of_nights
    console.log("the room cost is:"+cost);

    
}else if(room_type==="deluxe"){
    cost=2000*no_of_nights
    console.log("the room cost is:"+cost);
    
}else if(room_type==="suite"){
    cost=3000*no_of_nights
    console.log("the cost is:"+cost);
    
}
if(rating<4){
    cost=cost+(cost*10/100)
    console.log("after adding 10% service charges total cost is:"+cost);     
}

if(no_of_nights>5){
    cost=cost-(cost*5/100)
    console.log("after 5% discount the cost is:"+cost); 
}*/
   




/*let employee_rating=(prompt("enter ratings"));
let experience =Number(prompt("enter experience years"));
let department=prompt("enter department");
let bonus;

if(employee_rating==="excellent" && experience>5){
    bonus="20% bonus"
    console.log("bonus is:"+bonus);
     if(department==="sales"){
        console.log("u got 2% incentive bonus");
        
     }else{
        console.log("no incenive bonus");  
     }
    }else if(employee_rating==="good" && experience>3){
    bonus="10%bonus"
    console.log("bonus is:"+bonus); 

    if(department==="sales"){
        console.log("u got 2% incentive bonus");
        
     }else{
        console.log("no incenive bonus");  
     }


}else if(employee_rating==="average"){
    bonus="5%bonus"
    console.log("bonus is:"+bonus);

        if(department==="sales"){
        console.log("u got 2% incentive bonus");
        
     }else{
        console.log("no incenive bonus");  
     }
    
}*/



/*let vehicle_type=prompt("enter vehicle type");
let speed=Number(prompt("enter vehicle speed"))
let road_type=prompt("enter road type")
let fine;

if(road_type==="highway" && speed>60){
    fine=1000
    console.log("fine:"+fine);  
}
else if(road_type==="cityarea"&&vehicle_type==="small"&&speed>60){
    fine=2000
    console.log("fine:"+fine);
    
}
else if(road_type==="cityarea"&&vehicle_type==="big"&&speed>60){
    console.log("fine"+fine);  
}
else if(speed<60){
    console.log("no fine---safe driving");
    
}
   



/*let distance=prompt("enter distance")
let ridetime=Number((prompt("enter time in 24hrs time")))
let promocode=prompt("do u have promo code")
let charge;

if(distance<5){
    charge="minimum fare"
    console.log("cab charges:"+charge);
    
}
else if(distance>=5&&distance<=15){
    charge="mid-tier fare"
}else if(distance>15){
    charge="long-distance fare"
    console.log("cab charges:"+charge);
    
}
if(ridetime>=22||ridetime<=5) {
    console.log("extra 20% percent night charge");   
}

if(promocode==="yes"){
    console.log("u have special discount"); 
}*/
   



/*let cartamount=Number(prompt("enter cart amount"))
let membership=prompt("enter your membership type")
let coupon=prompt("do u have coupons")
let offer;

if(membership==="silver"){
    offer=cartamount-(cartamount*5/100)
    console.log("total amount:"+offer) 
}else if(membership==="gold"){
    offer=cartamount-(cartamount*10/100)
    console.log("total amount:"+offer);
    
}else if(membership==="platinum"){
    offer=cartamount-(cartamount*15/100)
    console.log("total amount:"+offer);
    
}
if(coupon==="yes"){
    offer=offer-(offer*5/100)
    console.log(" u have coupon also so total amount:"+offer);
    
}*/


/*let greet = function(name){
    console.log("hello"+name);
}
greet("surendra")

let greeet = function git(a,b){
    console.log("hello"+a+b) 
}
greeet("divya","sruthi")*/

(function(){
    console.log("surendra loves divya");
})()

function jas(a,b){
    return a+b
}
console.log(jas(5,6));


function gun(a,b,c){
    return a+b+c;
    
}
let fish=gun(12,132,14,)
console.log(fish);

function hat(name){
    console.log("hello "+name);   
}
function lat(callback){
    callback("surendra")
}
lat(hat)

document.write("surendra")