//2 sum
function twoSum(a:number,b:number):number{
    return a+b;
}
//hello world in type script
function isEven(a:number):boolean{
    if(a&1)return false;
    return true;
}
function printArr(a:number):number[]{
let ans:number[]=[];
for(let i=0;i<a;i++){
    ans.push(i);
}
return ans;
}
//for complex object use interfaces
interface User{
name:string,
age:number,
address?:{
    city?:string,
    pincode?:number
}
}
let user:User={
name:"dipansh",
age:22,
address:{
    city:"delhi",
}
}
interface People{
    name:string,
    age:number,
    greet?:()=>string
}
let user2:People={
    name:"dipansh",
    age:22,
    greet:()=>{
        return "hi"
    }

}
class Manager implements People{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.age=age;
        this.name=name;
    }
    isLeg():boolean{
        return this.age>18;
    }
}
class highManager extends Manager{
    
    constructor(public name:string,public age:number){
        super(name,age);
    }

}
let result:number=twoSum(4,4);
console.log("The result is: "+result);
let isEvenResult:boolean=isEven(4);
console.log(isEvenResult);
console.log(printArr(3));

if(user.age>=18 && user.address?.city=="bfibidbv"){
    console.log("You are legal");
}
else{
    console.log("You are not Allowed")
}
// console.log(user2.greet());
const m= new Manager("dipansh",100);
console.log(m.isLeg());
/*
- What to use Abstract Classes vs Interfaces
   - It depends
   - If we don’t have any logic and just wanted to set a structure then go with interfaces.
   - In contrast, if we have some logic, some algorithm, some method with few lines of code and we wanted to share that code amongst subclass then we can’t use interfaces.
 */
//interfaces and types
//create 2 types called user and admin
// create function that takes either user or an admin as in input and returns a string saing "welcome"

interface Admin{
    name:string;
    permission:string
}
interface User{
    name:string;
    age:number;
}
type UserOrAdmin=User | Admin;
function greet(user:UserOrAdmin){
    console.log(user.name);
}

//find max in arr
function getMax(nums:number[]):number{
    let maxValue:number=-10000000000;
    for(let i=0;i<nums.length;i++){
        maxValue=Math.max(nums[i],maxValue);
    }
    return maxValue;
}

let nums:number[]=[1,2,3,4];
let maxValue:number=getMax(nums);
console.log(maxValue);


interface UserOf{
    firstName:string,
    lastName:string,
    age:number
}
function filterUser(users:UserOf[]){
    let ans:number[]=[];

    return ans;
}