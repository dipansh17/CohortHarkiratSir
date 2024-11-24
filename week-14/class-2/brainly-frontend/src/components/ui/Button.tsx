type Varients="primary"|"secondary"
 interface ButtonProps{
    varient:Varients;
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:any;
    endIcon?:any;
    onClick:()=>void;
}
const varientStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
}
const defaultStyle="rounded-md flex";
const sizeStyle={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-3 px-6"
}

export const Button=(props:ButtonProps)=>{

return <button className={`${varientStyles[props.varient]} ${defaultStyle} ${sizeStyle}`}>{props.startIcon?<div className="">{props.startIcon}</div>:null}{props.text}{props.endIcon}</button>
}