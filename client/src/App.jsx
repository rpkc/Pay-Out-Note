import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";


function App() {
  const [notes,setNotes]=useState([]);
  // var dataSetIntoTable=[]
  



  useEffect(()=>{
    axios.get('http://localhost:5000/').then((data)=>{
      // setNotes(data.data.data);
      //console.log(data.data.data);
      setNotes(data.data.data);

// const dataSetIntoTable =()=> notes.map((data)=>{
//   return(<tr>
//     <td>{data.topic}</td>
//     <td>{data.amount}</td>
//     <td>{data.note}</td>
//   </tr>)
// })


    }).catch((err)=>{
      console.log(err.message);
    })
  },[])


  return (
    <>
      <div>
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
