function greetings(user:{
    name:string,
    age:number
}){
    console.log("hello "+user.name);
}
let user={
    name:"Dipansh",
    age:22
}
greetings(user);
