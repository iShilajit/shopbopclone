import React from 'react'
import "./Footer.css";
import {Divi,Image,Last,Same} from "./footer.styled.js";

const Footer = () => {
  return (
      <>
        <img style={{}}src='https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_03/sb_20220309_desktop_M1_evergreen._FMwebp_UX992_.jpg' alt="img"/>

        <Divi>
            <Image src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_04/sb_20220405_hp_card_visnav_evergreen_01row._QL90_UX373_.jpg"alt='img1'/>
            <Image src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_03/sb_20220309_hp_card_visnav_evergreen_02app._CB1647958748_._QL90_UX373_.jpg" alt="img2"/>
            <Image src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_03/sb_20220309_hp_card_visnav_evergreen_03nonloyalty._QL90_UX373_.jpg"alt="img3"/>
        </Divi>
        <Last>
            <Same>
                <h3>SERVICES</h3>
                <p>Customer Service</p>
                <p>Gift Certificates</p>
                <p>Give Us Your Feedback</p>
            </Same>
            <Same>
                <h3>INFORMATION</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Affiliate Program</p>
            </Same>
            <Same>
                <h3>PERSONALIZE</h3>
                <p>Account</p>
                <p>My Loyalty</p>
                <p>My love</p>
                <p>My Wish List</p>
                <p>My Designers</p>
                <p>My Reviews</p>
            </Same>
            <Same>
                <h3>CONNECT</h3>
                <p>Mobile</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Pinterest</p>
                <p>Weibo</p>
                <p>Sign up for Shopbop Emails</p>
            </Same>
            <Same>
                <h3>LOCATION</h3>
               <p>India</p>
               <p>Free express international</p>
               <p>Delivery</p>
               <p>+easy returns</p>
            </Same>
        </Last>
        <p style={{fontWeight:"bold",textAlign:"center"}}>@ 1999-2022 BOP LLC.All Rights Reserved.Privacy Notice Condition Of Use.</p>
        <img style={{height:"30px"}}src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png"alt="shopbop"/>
      </>
    
  )
}
export default Footer;
