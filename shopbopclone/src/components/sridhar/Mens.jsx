// import React,{useState,useEffect}  from 'react';
import {Product,Main,Inner} from './Men.styled.js';
import {mendata} from './MenData.js';

export const Mens = () => {




  return (
    <>

    <img style={{width: '100%',}}
    src="https://www.linkpicture.com/q/image_2022-05-04_16-23-46.png" alt=""/>

    <h3>FIND SOME INSPIRATION</h3>
    <h2>Your Wardrobe Starts Here</h2>

    <div style={{display:"flex",margin:"auto",height:400,width:"80%",gap:8}}>
      <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_04/sbm_20220401_hp_card_visnav_casuals._QL90_UX452_.jpg" alt=""/>
      <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_04/sbm_20220401_hp_card_visnav_sneakers._QL90_UX452_.jpg" alt=""/>
      <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_04/sbm_20220401_hp_card_visnav_tees._QL90_UX452_.jpg" alt=""/>
      <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_04/sbm_20220401_hp_card_visnav_denim._QL90_UX452_.jpg" alt=""/>
    </div>

    <div>
      <h4 style={{textAlign:"left",margin:50}}>SEE THE LATEST</h4>
      <h2 style={{textAlign:"left",margin:50}}>What's New</h2>
      <p style={{textAlign:"right",marginRight:60,color:"red",textDecoration: "underline"}}>Shop All</p>
    </div>
<Main>
    <Product>
      {mendata.map((item)=>(
        <Inner key={item.id}>
          <img src={item.imgURL} alt=""/>
          <h3>{item.title}</h3>
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
        </Inner>
))}
    </Product>
</Main>


    <img style={{width: '100%',marginTop:10}}
    src="https://www.linkpicture.com/q/image_2022-05-05_11-30-22.png" alt=""/>
    </>
  )
}
