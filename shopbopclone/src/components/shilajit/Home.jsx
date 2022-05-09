import React from 'react'
import HeadImg from '../shilajit/Assets/images/head.png';
import Midd from '../shilajit/Assets/images/midd.png';
import './css/home.css';
import { itemsData } from "../shilajit/data/indexdata";
import MultipleItemsTwo from './Carousal/Slider';
import Example from './ImageShow';
import Top from './Top';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
   
      <div>
        <div className="startHeadingDiv">
          <div className="startimg">
            <img src={HeadImg} alt="" />
          </div>
         <div style={{marginTop:"50px"}}>
         <Top />
         </div>
          <div className="after-start-Img-Div">
            <div className='headinh'>
              <h2>
                GET SOME INSPIRATION
              </h2>
              <h1>
                What <span>&nbsp;&nbsp;</span> Are<span>&nbsp;&nbsp;</span> You<span>&nbsp;&nbsp;</span> Looking <span>&nbsp;&nbsp;</span>For<span>&nbsp;&nbsp;</span>?
              </h1>

            </div>
            <ul className="ul-after-start-img">
              <li className="li-afterImg1">
                <img
                  src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_vacation._QL90_UX452_.jpg"
                  alt="" id="afterimgid1" />
                <div className="blackSameDesign">
                  <p className="textSame">Vacation Wardrobe</p>
                </div>
              </li>
              <li className="li-afterImg2">
                <img
                  src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_dressshop._QL90_UX452_.jpg"
                  alt="" id="afterimg2" />
                <div className="blackSameDesign">
                  <p className="textSame">The Dress Shop</p>
                </div>
              </li>

              <li className="li-afterImg3">
                <img
                  src=" https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_bestdressed._QL90_UX452_.jpg"
                  alt="" id="afterimg3" />
                <div className="blackSameDesign">
                  <p className="textSame">Best-Dressed Guest</p>
                </div>
              </li>
              <li className="li-afterImg3">
                <img
                  src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_daytime._QL90_UX452_.jpg"
                  alt="" id="afterimg3" />
                <div className="blackSameDesign">
                  <p className="textSame">Daytime Drama</p>
                </div>
              </li>
              <li className="li-afterImg3">
                <img
                  src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_9to5._QL90_UX452_.jpg"
                  alt="" id="afterimg3" />
                <div className="blackSameDesign">
                  <p className="textSame">New 9-To-5</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div className="items-container">
          <div className="itemshead">
            <div className="itemsTexts">
              <h3 className="title1">SEE THE LATEST</h3>
              <div className="shopAlllink">
                <h1 className="title2">What's New</h1>
                <h3 className="shopAll linkfontstyle" >Shop All</h3>
              </div>
              <div >
            <MultipleItemsTwo/>
            </div>
            </div>
           
          </div>
          

        </div>
        <Example/>
        <div className="startimg">
          <img src={Midd} alt="" />
        </div>
        <div className="visualNav">
          <div className="visualNavText">
            <p className="visualheading1">SPOTLIGHT ON</p>
            <p className="visualheading2">Black-Led Brands</p>
          </div>
          <ul className="visualImages">
          <Link to={"/productPage"}>
            <li>
              <img className="visImgText"
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/gamer/gamer30447174cb/gamer30447174cb_1646242381307_2-0._QL90_UX346_.jpg"
                alt="There must be a problem with the server image not
                     being automatically uploaded" />
              <div className="textVisual1 desVidiv">
                <p className="img1-text designtxt">Good American</p>
              </div>
            </li>
            </Link>

            <Link to={"/fav"}>
            <li>
              <img className="visImgText"
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/elexi/elexi3000211576/elexi3000211576_1646951004978_2-0._QL90_UX346_.jpg"
                alt="There must be a problem with the server image not
                     being automatically uploaded" />
              <div className="textVisual2 desVidiv">
                <p className="img2-text designtxt">Elexiary</p>
              </div>
            </li>
            </Link>
            <li>
              <img className="visImgText"
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mchat/mchat3004913034/mchat3004913034_1643319932963_2-0._QL90_UX346_.jpg"
                alt="There must be a problem with the server image not
                     being automatically uploaded" />
              <div className="textVisual3 desVidiv">
                <p className="img3-text designtxt">Maison Chateau Rouge</p>
              </div>
            </li>
            <li>
              <img className="visImgText"
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mchat/mchat3004613034/mchat3004613034_1643319922485_2-0._QL90_UX346_.jpg"
                alt="There must be a problem with the server image not
                     being automatically uploaded" />
              <div className="textVisual4 desVidiv">
                <p className="img4-text designtxt">Maison Chateau Rouge</p>
              </div>
            </li>
            <li>
              <img className="visImgText"
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/stdon/stdon300041ba03/stdon300041ba03_1646430701657_2-0._QL90_UX346_.jpg"
                alt="There must be a problem with the server image not
                     being automatically uploaded" />
              <div className="textVisual5 desVidiv">
                <p className="img5-text designtxt">Studio 189</p>
              </div>
            </li>
          </ul>
        </div>



      </div>
    </>
  )
}
export default Home
