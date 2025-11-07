import React, { useEffect, useState } from "react";
import axios from "axios";
import { LogIn } from "lucide-react";

const App = () => {
  const [Data, setData] = useState([]);
  const [index , setIndex]=useState(1) 
  function prev(){
    if(index>1){ setIndex(index-1)}
    setData([])
  
  }
  function Next(){
    setIndex(index+1)
       setData([])
  }
  async function GetData() {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setData(responce.data);
    console.log(responce.data)
  }
 
  let userData =<h3 className="text-sm text-gray-500 absolute top-1/2 right-1/2" >Loading... </h3> ;
  if (Data.length > 0) {
    userData = Data.map((elem, index) => {
      return (
   <div className="">
    <a href={elem.url} target="_blank">
           <div className="w-54 h-40  overflow-hidden rounded-2xl bg-white">
          <img className="h-full w-full cursor-pointer object-cover " src={elem.download_url} alt="" />
        </div>
        <h2 className="text-white font-bold text-lg">
          {elem.author}
        </h2>
    </a>
   </div>
      );
    });
  }
  useEffect(function(){GetData()},[index])

  return (
    <div className="w-full h-screen overflow-auto  bg-black">
      {/* <h1  className=" text-white bg-red-600 fixed" >{index}</h1> */}
      <div className=" text-white rounded-2xl w-full h-[90] px-5 py-3 flex flex-wrap gap-6">
        {userData}
              </div>
        <div className="flex justify-center items-center gap-2.5 mb-4" >
          <button onClick={()=>{
            prev()
          }} className="bg-yellow-500 cursor-pointer active:scale-95 text-black text-2xl px-4 py-2 rounded ">Prev</button>
          <h3 className="text-white text-xl font-bold " >Page {index}</h3>
          <button onClick={()=>{
            Next()
          }} className="bg-yellow-500 cursor-pointer act ive:scale-95 text-black text-2xl px-4 py-2 rounded "> Next </button>
        </div>

    </div>
  );
};

export default App;
