import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_URL } from './URL'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const addNotification = () => {
    // use a random type of notification
    toast("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
  };

const Read = () => {
    const[content,setContent]=useState([])
const navigate=useNavigate()
    const callAPI=async()=>{
        const resp= await axios.get(API_URL)
        setContent(resp.data)
    }
const deleteUser=async(id)=>{
    await axios.delete(API_URL + id)
    callAPI()
}


const updateUser=async({id,name,age,pno,address,sal})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('age',age)
    localStorage.setItem('address',address)
    localStorage.setItem('pno',pno)
    localStorage.setItem('sal',sal)
   navigate('/update')
}


useEffect(()=>{
callAPI()
},[])

  return (
    <div>
        <Table style={{width:'150px'}} className='table'>
            <TableHead>
                <TableRow>
                    <TableCell>Employee ID</TableCell>
                    <TableCell>Employee Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone Num</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
            {content.map((data)=>
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.age}</TableCell>
              <TableCell>{data.address}</TableCell>
              <TableCell>{data.pno}</TableCell>
              <TableCell>{data.sal}</TableCell>
              <TableCell><button className='btn' onClick={()=>updateUser(data)}>Update</button></TableCell>
              <TableCell><button className='btn' onClick={()=>deleteUser(data.id)} >Delete</button></TableCell>
            </TableRow>)}
            </TableBody>
        </Table>
        <button onClick={addNotification}>click me</button>
        <ToastContainer />
        </div>
  )
}

export default Read