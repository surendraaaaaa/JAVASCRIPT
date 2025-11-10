let gate=["surendra",1,"divya",true]
console.log(gate);
let fish =new Array("surendra",true,1,"divya",232345.25)
console.log(fish);
let heroes=["ram_charan","pawan_kalyan","chiranjeevi","mahesh_babu","vijay_devarakonda"]
console.log(heroes.length);
console.log(heroes.at(-1));
heroes[2]="balayya"
console.log(heroes);
heroes.push("ram","saidharmtej")
console.log(heroes);
heroes.unshift("NTR",'ANR')
console.log(heroes);
heroes.pop();
console.log(heroes);
heroes.shift();
console.log(heroes);
console.log(heroes.includes("ANR"));
console.log(heroes.indexOf("ANR"));
console.log(heroes.lastIndexOf("mahesh_babu"));
console.log(heroes.sort());
console.log(heroes.reverse());

let jet=["rc","aa","pk"]
console.log(jet.reverse());
console.log(jet.sort());
console.log(jet.reverse());
console.log(heroes.slice(0,3))

let heroins=["rc","aa","pk","pb","pspk","chiru"]
console.log(heroins.slice(0,3));
console.log(heroins.slice(-4,-1));

let numbers=[1,2,3,4,5,6,7,8,9,]
/*numbers.splice(2,0,2.1,2.2,2.3,2.4,2.4)
console.log(numbers);*/
numbers.splice(2,2,2.1,2.2,2.3,2.4,2.5)
console.log(numbers);

let villians=["mb","pspk","rc","pb","aa","ntr","nani"]
/*villians.splice(6,1,"vd")
console.log(villians);*/

villians.splice(2,1)
console.log(villians);

/*console.log(villians.slice(0,2));*/






















