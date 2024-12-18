import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";


function App() {
  const [count, setCount] = useState(0);
  // const [notes,setNotes]=useState([]);
  



  useEffect(()=>{
    axios.get('http://localhost:5000/').then((data)=>{
      // setNotes(data.data.data);
      console.log(data.data.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])


  return (
    <>
      <div>
        <table>
          <th>
            <td>Topic</td>
            <td>Amount</td>
            <td>Notes</td>
          </th>
        </table>
      </div>
    </>
  )
}

export default App
