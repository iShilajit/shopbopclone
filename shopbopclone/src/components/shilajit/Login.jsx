import React from 'react'
import './css/Login.css'
export const Login = () => {
  return (
    <>
      <div class="signIn-container">
        <div className="head-logo">
          <img id="logo-img" src='https://images-na.ssl-images-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/AUI_desktop_SB_rebrand_1-0.png._CB485948808_.png' />
        </div>
        <div class="sign-form-section">
      <div class="sign-in-form">
        <h1 id="hSignName">Sign In</h1>
        <div class="input-email">
          <label for="Email" class="label-style">Email</label>
          <input type="text" id="Email" />
          <div class="errInputEmail">
            <span class="errEmail">! Enter your email </span>
          </div>
        </div>
        <div class="input-pass">
          <div class="labfog">
            <label for="Password" class="label-style">Password</label>
            <span class="forgotpass linkfontstyle">Forgot your password?</span>
          </div>
          <input type="password" id="Password" />
          <div class="errInputPass">
            <span class="errPass">! Enter your password </span>
          </div>
        </div>
        <button onclick="signInBtn()" id="signBtn">Sign In</button>

        <div class="keepSignIn">
          <input type="checkbox" id="keepSignInBox" />
          <label for="keepSignInBox">Keep me signed in.</label>

          <label for="Details" id="details-link">Details</label>
          <select id="Details"></select>
        </div>
        <div class="moreOp-AmazomSign">
          <div class="moreSignOp">
            <h5 class="signOpText moreS-newSo">More sign in options</h5>
            <div class="amazonLogOp">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/Shopbop/media/images/authportal/lwa_209x48._CB485945402_.png"
                id="amaz-img" alt="" />
            </div>
          </div>
        </div>
        <div class="newToShop-createAcc">
          <div class="newto-acc">
            <h5 class="h5-newto-acc moreS-newSo">New to Shopbop?</h5>
            <button id="createAccBtn" onclick="register()">
              Create your Shopdop account
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr class="line" />
    <div class="contactUs"><span class="linkfontstyle">Contact Us</span></div>
    <div class="copyR-terms">
      &copy; 1999-2020 BOP LLC. All Rights Reserved.
      <span class="linkfontstyle">Privacy Notice</span>
      <span class="linkfontstyle">Conditions of Use</span>
    </div>
  </div>
    </>
  )
}
