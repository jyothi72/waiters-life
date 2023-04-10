import React,{useState} from 'react';
import Waiterform from './components/waiterform';
import Orders from './components/orders';

function App() {
  const [dis,setdis]=useState([])
 const displayhandler=(order)=>{
  
    setdis((prev)=>{
      return[...prev,order]
    })
  
 }
  return (
    <div>
    <Waiterform onorder={displayhandler}/>
    <Orders valu={dis}/>
    </div>
  );
}

export default App;
