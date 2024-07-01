import { ref, child, get } from "firebase/database";
import { db } from './Firebase';
import React, { useEffect, useState } from 'react'

function App() {
  const [mal, setMal]=useState(null);
  const dbRef = ref(db);
  useEffect(()=>{
    
      get(child(dbRef, `con`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(Object.values(snapshot.val()));
          setMal(Object.values(snapshot.val()))
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    
  }, [])

  return (
    <div className='bg-gradient-to-br from-black to-blue-500 w-full min-h-[100vh] px-5 py-10 flex flex-col gap-5'>
      {
        mal ? mal.map(a=>{
          return(
            <div className='bg-white flex justify-between px-4 py-1' key={a.tel}>
            <div>
            <p>{a.im}</p>
            <p>{a.tel}</p>
            </div>
            <div>
              <p>{a.rb ? 'Robototexnika' :''}</p>
              <p>{a.it ? 'IT foundation' :''}</p>
              <p>{a.kt ? 'Koreys tili' :''}</p>
              <p>{a.tt ? 'Turk tili' :''}</p>
            </div>
          </div>
          )
        }) :<p className="text-white">Loading...</p>
      }
    </div>
  )
}

export default App
