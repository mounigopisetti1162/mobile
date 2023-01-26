import './App.css';
import {useEffect, useState} from 'react'
const API="http://localhost:4001"
function App() {

  return(
    
    <div className='App'>
      helo
      <Phonelist />
    </div>
    
  )
}

function Phonelist()
{

  const [mobile,setmobile]=useState([])
useEffect(()=>{

  fetch(`${API}/mobile`).then((data)=>data.json()).then((mbs)=>setmobile(mbs))
},[])
  return(
<div className='phone-list-container'>
  {mobile.map((data,key) =>
    (
      <Phone key={key} data={data}/>
))}
    </div>
  )
}

  function Phone({data})
    
    {
      return(
    <div className="phone-container">
      <img className="phone-picture" src={data.img} alt={data.model}/>
      <h2 className="phone-name">{data.model}</h2>
      <p className='phone-company'>{data.company}</p>

    </div>
      )
}
  
    


export default App;
