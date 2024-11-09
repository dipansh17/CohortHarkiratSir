import { useState } from "react";
import "./App.css";
import { OtpBox } from "./components/OtpBox";

function Screen() {
  const [birthDate, setBirthDate] = useState("");
  const handleBirthDate = (e) => {
    setBirthDate(e.target.value);
  };
  return (
    <div className="bg-blue-800 h-screen w-screen">
      <div>
        <div className=" p-10 flex justify-center">
          <p className="text-xl text-green-400 font-bold">Webinar</p>
          <p className="font-bold text-xl text-white">.gg</p>
        </div>
        <div className="flex justify-center">
          <div className="text-xl font-bold text-white">Verify Your Age</div>
        </div>
        <div className="flex justify-center p-10 text-gray-400">
          <p>Please confirm your birth year.This date will not be saved</p>
        </div>
        <div className="flex justify-center">
          <input
            onInput={function () {
              setBirthDate(true);
            }}
            type="date"
            className="w-[25%] h-10 bg-slate-400 rounded-lg "
            placeholder="Your Birth Year"
          ></input>
        </div>

        <div className="flex justify-center ">
          <button
            className={`p-2 m-10  w-[25%] rounded-xl h-10 content-center text-white font-semibold ${
              birthDate ? "bg-green-400" : "bg-gray-400"
            } `}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
function EmailScreen() {
  const [emailId, setEmailId] = useState("");
  const handleEmailId = (e) => {
    setEmailId(e.target.value);
  };
  return (
    <div className="bg-blue-800 h-screen w-screen">
      <div>
        <div className=" p-10 flex justify-center">
          <p className="text-xl text-green-400 font-bold">Webinar</p>
          <p className="font-bold text-xl text-white">.gg</p>
        </div>
        <div className="flex justify-center">
          <div className="text-xl font-bold text-white">Let's Get Started</div>
        </div>
        <div className="flex justify-center">
          <input
            onInput={handleEmailId}
            type="email"
            className="w-[25%] h-10 bg-slate-400 rounded-lg "
            placeholder="Email Id"
          ></input>
        </div>

        <div className="flex justify-center ">
          <button
            className={`p-2 m-10  w-[25%] rounded-xl h-10 content-center text-white font-semibold ${
              emailId ? "bg-green-400" : "bg-gray-400"
            } `}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
function App() {
  // return (
  //   <>
  //     <div className="bg-gray-700 w-screen h-screen">
  //       <div className="text-3xl font-bold underline text-cyan-500 p-5 m-1">
  //         {" "}
  //         Tailwind
  //       </div>
  //       <div className="flex justify-around">
  //         <div className="text-orange-400">Dipansh Here!</div>
  //         <div className="text-white ">Dipansh Here too..</div>
  //         <div className="text-red-400 ">Dipansh is also here..</div>
  //       </div>
  //       <div className="grid grid-cols-12 px-10 mx-10">
  //         <div className="text-orange-400 col-span-4 ">Dipansh Here!</div>
  //         <div className="text-white col-span-4">Dipansh Here too..</div>
  //         <div className="text-red-400 col-span-4 ">Dipansh is also here..</div>
  //       </div>
  //       {/* unprexied hmesha ayega prexied jab aayega jab size ho */}
  //       <div className="sm:bg-green-400 md:bg-yellow-400 bg-red-500 ">
  //         <p>What color is is?</p>
  //       </div>
  //       {/* assisgnment-1 */}
  //       <div className="sm:flex justify-around">
  //         <div className="text-orange-400  text-xs bg-indigo-200 rounded-xl">
  //           Dipansh Here!
  //         </div>
  //         <div className="text-white text-sm bg-indigo-400 rounded-full">
  //           Dipansh Here too..
  //         </div>
  //         <div className="text-red-400 text-lg rounded-md">
  //           Dipansh is also here..
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <div>
      {/* <EmailScreen /> */}
      <OtpBox length={4} />
    </div>
  );
}

export default App;
