import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";


function App() {
  const [notes,setNotes]=useState([]);
  const [total,setTotal]=useState(0);
  // var dataSetIntoTable=[]
  



  useEffect(()=>{
    axios.get('http://localhost:5000/').then((data)=>{
      setNotes(data.data.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost:5000/sum').then((data)=>{
      setTotal(data.data.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])


  return (
    <>
      <div>
        <h1>{total}</h1>
        <table>
          <tr>
            <th>Topic</th>
            <th>Amount</th>
            <th>Notes</th>
          </tr>
          {
            notes.map((data,i)=>{
              return(<tr key={i}>
                <td>
                  {data.topic}
                </td>
                <td>
                ₹ {data.amount}
                </td>
                <td>
                  {data.note}
                </td>
              </tr>)
            })
          }
        </table>
      </div>
    </>
  )
}

export default App
