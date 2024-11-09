let x: number=1;
let y=2; //working because of type inferecing
console.log("value of x:"+x);
function greet(name:string){
let firstName: String=name
console.log("hello.."+firstName);
}
function twoSum(a:number,b:number){
    
    let result: number= a+b;
    console.log("Answer is:"+result);
}
function isLegal(age:number){
if(age>18){
    console.log("legal h");
    return true;
}
else{
    console.log("Illegal h");
    return false;
}
}
//write a function that takes another fuction 
function delayedCall(fn:()=>void){
    setTimeout(fn,1000);

}
delayedCall(function(){
    console.log("hello");
})
greet("Dipansh");
//sum of 2 function
twoSum(2,3);
let legality:boolean=isLegal(100);
console.log(legality);


function delayed(anotherFn: (a: string) => void) {
    setTimeout(() => anotherFn("dipansh"), 1000); // Pass argument when calling `anotherFn`
}

function greet2(name: string) {
    let firstName: string = name; // Use lowercase 'string' type
    console.log("hello.." + firstName);
}

delayed(greet2);