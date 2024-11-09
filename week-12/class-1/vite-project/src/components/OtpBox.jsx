import React, { useEffect, useRef, useState } from "react";

export function OtpBox({ length }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);
  function handleChange(index, e) {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    //allow only 1 input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  }
  function handleClick(index) {}
  function handleKeyDown(index, e) {}
  return (
    <div className=" p-10 flex justify-center">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input) => {
              inputRef.current[index] = input;
            }}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-[40px] h-[40px] p-5 border border-solid content-center font-semibold text-black border-cyan-900"
          />
        );
      })}
    </div>
  );
}
