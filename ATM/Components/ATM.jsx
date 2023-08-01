import React from "react";

import { useEffect , useState } from "react";

const Atm = () => {
  const [option,setOption ] = useState("");
  const [value , setValue] = useState("");
  const [balance , setBalance] = useState(300);

  const Atmworks = ()=>{



  }

  return (
    <div>
      <h1>ATM</h1>
      <h2>Balance : {balance}</h2>
      <form onSubmit={Atmworks}>
      <select name="option" id="option" onInput={(e) =>{setOption(e.target.value)}}>
        <option value="select">Select</option>
        <option value="withdraw">Withdraw</option>
        <option value="deposit">Deposit</option>
      </select>
      
      <label htmlFor="requestAmount">Enter the Amount : </label>
      <input type="number" name="requestAmount" id="requestAmount" onChange={(e)=>{setValue(e.target.value)}}/>
    <button>{ option }</button>
      </form>
      


    </div>
  )
}


export default Atm ; 


      {/* <select name="option" id="option" onChange={(e)=>{setOption(e.target.value)}}>
        <option value="select">Select</option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      <input type="number" name="value" id="value" onChange={(e)=>{setValue(e.target.value)}}/>
      <button onClick={()=>{
        if(option==="deposit"){
          setBalance(balance+value)
        }
        else if(option==="withdraw"){
          setBalance(balance-value)
        }
        else{
          alert("Please select an option")
        }
      }}>Submit</button> */}  