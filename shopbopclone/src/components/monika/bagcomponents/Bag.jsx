// import React, { useState ,useEffect} from 'react'
import {Good,Divi,Main}from "./Bag.styled.js";
import { BagData } from './BagData.js';
import './Bag.css'
const Bag = () => {
  //console.log(BagData);
  // const[data,setData]=useState([]);

  // useEffect(()=>{
  //   const getData=async()=>{
  //     try{
  //       let response=await fetch("http://localhost:2030/bags/");
  //       let data=await response.json();
  //       console.log(data);
  //       setData(data);
  //     }catch(err){
  //       console.log("err:",err)
  //     }
  //   }
  //   getData();
  // },[])
  
  return (
    <>
    <div>
    <img style={{height:"50px",marginLeft:"45%"}}src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png" alt="img"/>
    </div>
    <h1 style={{fontStyle:"Helvetica-Neue,sans-serif",fontSize:"20px"}}>POPULAR PICKS FOR YOU</h1>
    
      
        <Divi>
            <Good>

            {BagData.map((i)=>{
              return (
                <div key={i.id}>
                    <img src={i.imgURL} alt="img"/>
                    <p style={{fontStyle:"sans-serif",fontWeight:"bold",fontSize:"15px"}}>{i.title}</p>
                    <p style={{fontStyle:"sans-serif",fontSize:"16px"}}>{i.name}</p>
                    <p style={{fontWeight:"bold"}}>{i.price}</p>

                </div>
              )
            })}
            
            </Good>
        </Divi>
       
      
    </>
  )
}

export default Bag;