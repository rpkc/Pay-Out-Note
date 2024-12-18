import { useEffect, useState,useRef } from 'react'
import './App.css'
import axios from "axios";


function App() {
  const [notes,setNotes]=useState([]);
  const [total,setTotal]=useState(0);
  const [hit,setHit]=useState(false);
  // var dataSetIntoTable=[]
  
  const topic=useRef(null);
  const amount=useRef(null);
  const note=useRef(null);


const addValue=()=>{
  axios.post("http://localhost:5000/",{
    topic:topic.current.value,
    amount:amount.current.value,
    note:note.current.value}).then((data)=>{
      setHit(!hit);
      topic.current.value="";
      amount.current.value='';
      note.current.value="";




    }).catch((err)=>{
      console.error(err.message);
    })
}




  useEffect(()=>{
    axios.get('http://localhost:5000/').then((data)=>{
      setNotes(data.data.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[hit])

  useEffect(()=>{
    axios.get('http://localhost:5000/sum').then((data)=>{
      setTotal(data.data.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[hit])


  return (
    <>
      <div>
        <h1>Pay Out Note</h1>
        <table>
          <tr>
            <th>Topic</th>
            <th>Amount</th>
            <th>Notes</th>
            <th>Controles</th>
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
                <td></td>
              </tr>)
            })
          }
          <tr>
            <td><input type='text' placeholder='Topic' ref={topic}/></td>
            <td><input type='number' placeholder='Amount' ref={amount}/></td>
            <td><input type='text' placeholder='Note' ref={note}/></td>
            <td><button onClick={addValue}>Add</button></td>
          </tr>

          <tr>
            <td></td>
            <td><h3>₹ {total}</h3></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
