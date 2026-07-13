import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card';
import Navbar from './Components/Navbar';

const App = () => {

const [userData, setUserData] = useState([]);
const [index, setIndex] = useState(1);

const getData = async ()=>{
  const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
  setUserData(response.data);

}

useEffect(function(){
  getData();

},[index]);

let printUserData = (
  <div className="col-span-full flex justify-center items-center py-20">
    <h3 className="text-2xl font-semibold text-gray-400 animate-pulse">
      Loading Images...
    </h3>
  </div>
);

if(userData.length>0){
  printUserData = userData.map(function(elem,idx){

    return (
      <div key={idx}>
        <Card elem={elem}/>
      </div>
    );

    
  })
}


  return (
  <div className="min-h-screen bg-[#050505]">

    <div className="max-w-7xl mx-auto p-6">

      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">

        {printUserData}

      </div>

      <div className="flex justify-center items-center gap-6 py-12">

        <button
          disabled={index === 1}
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
          className="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-600 px-5 py-2 rounded-lg transition text-white"
        >
          Prev
        </button>

        <span className="text-lg font-semibold text-white">
          Page {index}
        </span>

        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-600 hover:bg-amber-700 px-5 py-2 rounded-lg transition text-white"
        >
          Next
        </button>

      </div>

    </div>

  </div>
);
}

export default App
