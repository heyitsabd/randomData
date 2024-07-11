import { getPost } from './jsonData';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './card';

function App() {
  const [data,setData]= useState()
  useEffect(()=>{
    getPost().then((posts)=>
      setData(posts.results[0])
    ) 
  },[])
  return (
    <div className="App">
      {
        data ? <Card data={data}/>:<p>No data</p>
      }
      
     {/* {
      data? <div>
        {
          data.map((val,key)=>(
            <Card key={key} name={val.name} address={val.address} />
          ))
        }
      </div> 
      :
       <p>
        No data
      </p>
     } */}
    </div>
  );
}

export default App;
