
import axios, { Axios } from "axios"
import { useEffect, useState } from "react";
async function getDetails(){
  // right way
  const response = await axios.get("http://localhost:3000/api/v1/user/details") //backend is coming from file
  return response.data;
}
export default async  function Home() {
  //bad practice
  
  // const [loading,setLoading]=useState(true);
  // const [data,setData]=useState({});
  // useEffect( ()=>{
  //     axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then(response=>{
  //     setData(response.data);
  //     setLoading(false);
  //   });

  // },[])
  const data=await getDetails();
  // if(loading){
  //   return(
  //     <div>Loading.......</div>
  //   )
  // }
  return (

    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                
                {data?.email}
            </div>
        </div>
    </div>
  );
  
}
