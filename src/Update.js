import React, { useEffect, useState } from 'react'
import { Container,TextField} from '@mui/material'
import axios from 'axios'
import {API_URL} from './URL'
import { useNavigate } from 'react-router-dom'

const Update = () => {
const navigate=useNavigate()
 const[name,setName]=useState('')
const[age,setAge]=useState('')
const[address,setAddress]=useState('')
const[sal,setSal]=useState('')
const[pno,setPno]=useState('')
const[id,setId]=useState('')
const limitChar = 10;

const handleChange = (e) => {
  (e.target.value.toString().length <= limitChar) ?  setPno(e.target.value) :  alert('Enter Valid Phone Number')  
};

const postData=async()=>{
    await axios.put(API_URL + id,{name,age,address,sal,pno},
        navigate('/'));
}

useEffect(()=>{
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setAge(localStorage.getItem('age'))
    setAddress(localStorage.getItem('address'))
    setPno(localStorage.getItem('pno'))
    setSal(localStorage.getItem('sal'))
},[])


  return (
    <div className='create'>
    <Container
    sx={{
      '& > :not(style)': { m: 3, width: '35ch' },
    }}
   
  >
    <TextField type="text" color='warning' label="Name"  value={name} variant="outlined"  onChange={(e)=>setName(e.target.value)}/>
    <TextField type="text" color='warning' label="Age"  value={age} variant="outlined"  onChange={(e)=>setAge(e.target.value)}/>
    <TextField type="number" color='warning' label="Phone No"   value={pno} variant="outlined"  onChange={handleChange}/>
    <TextField type="text" color='warning' label="Address" value={address} variant="outlined"  onChange={(e)=>setAddress(e.target.value)}/>
    <TextField type="number" color='warning' label="Salary" value={sal} variant="outlined"  onChange={(e)=>setSal(e.target.value)}/>
    <button className='btn1' onClick={postData}>Update Employee</button>
  </Container>
 
  </div>
  )
}

export default Update