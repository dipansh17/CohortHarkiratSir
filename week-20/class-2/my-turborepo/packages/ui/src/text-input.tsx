"use client"
interface TextInputProps {
    placeholder: string;
    size:"big"|"small";
    onChange?: (e:any) => void;

}
export function TextInput({placeholder,size,onChange}: TextInputProps) {
  return (
    <input onChange={onChange}
    style={{
        padding:size=="big" ? "20px":"10px",
        margin:size=="big"? "20px":"10px",
        borderRadius:"10px",
        border:"none",
        boxShadow:"0px 0px 10px 0px black",

    }}
      placeholder={placeholder}
    />
  );
}