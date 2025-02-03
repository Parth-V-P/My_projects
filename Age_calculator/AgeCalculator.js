//import { useState } from 'react';
import React, {useState}from 'react';
const AgeCalculator = () => {

  const[date,setDate]=useState('please select a date');
  const[age,setAge]=useState(0);
  const[name,setName]=useState('parth');
  console.log(date,'date')
 
  const calculateAge=()=>{

var dob = date;
console.log(dob)
var year = Number(dob.substr(0, 4));
console.log(year)
var month = Number(dob.substr(4, 2)) - 1;
console.log(month)
var day = Number(dob.substr(6, 2));
console.log(day)
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
setAge(age)
    
  }

  const reset=()=>{
    console.log('pawar')
  }

 const selectDate=(e)=>{
  setDate(e.target.value)
  console.log('event',e.target.value)
 }

 const selectName=(e)=>{
  setName(e.target.value)
 }

  return (
    <><div>AgeCalculator</div>

   <div className='container'>
      <input type='date' onChange={selectDate}></input>
      <button onClick={calculateAge}>calculate</button>
      <button onClick={reset}>reset</button>
      <div>
        <p>
          date: {date}
        </p>
        <p>
          age:{age}
        </p>
      </div>
      <div>
        <input type='text' onChange={selectName}></input>
        <p>
          name:{name}
        </p>
      </div>
    </div></>
 
  );
}
export default AgeCalculator