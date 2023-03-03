import React, { useState } from 'react'
import { Container,TextField } from '@mui/material'
import axios from 'axios'
import {API_URL} from './URL'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Create = () => {
const navigate=useNavigate()
 const[name,setName]=useState('')
const[age,setAge]=useState('')
const[address,setAddress]=useState('')
const[sal,setSal]=useState('')
const[pno,setPno]=useState('')
const limitChar = 10;
const postData=async()=>{
    await axios.post(API_URL,{name,age,address,sal,pno},
        navigate('/'));
}
const handleChange = (e) => {
   (e.target.value.toString().length <= limitChar) ?  setPno(e.target.value) 
   :   alert("Enter Valid Phone Number");
};


  return (
    <div className='create'>
    <Container
    sx={{
      '& > :not(style)': { m: 3, width: '35ch' },
    }}
   
  >
    <TextField type="text" color='warning' label="Name"  variant="outlined"  onChange={(e)=>setName(e.target.value)} />
    <TextField type="number" color='warning' label="Age" variant="outlined"  onChange={(e)=>setAge(e.target.value)}/>
    <TextField type="number" color='warning' label="Phone No"  variant="outlined"    onChange={handleChange}/>
    <TextField type="text" color='warning' label="Address" variant="outlined"  onChange={(e)=>setAddress(e.target.value)}/>
    <TextField type="number" color='warning' label="Salary" variant="outlined"  onChange={(e)=>setSal(e.target.value)}/>
    <button className='btn1' onClick={postData}>ADD Employee</button>
 <ToastContainer />
  </Container>
 
  </div>
  )
}

export default Create