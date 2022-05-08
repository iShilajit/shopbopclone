import React from 'react'
import './css/Signup.css'
export const Signup = () => {
  return (
   <>
   <div className="register-container">
   <div className="head-logo">
           <img id="logo-img" src='https://images-na.ssl-images-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/AUI_desktop_SB_rebrand_1-0.png._CB485948808_.png'/>
        </div>
        <div class="register-form-section">
            <div class="register-in-form">
                <h1 id="hRegisterName">Create account</h1>
                <div class="input-UserName">
                    <label for="UserName" class="label-style">Your name</label>
                    <input type="text" id="UserName" />
                </div>
                <div class="input-email">
                    <label for="Email" class="label-style">Email</label>
                    <input type="text" id="Email" />
                </div>
                <div class="input-pass">
                    <div class="passDiv">
                        <label for="Password" class="label-style">Password</label>
                        <input type="password" id="Password" placeholder="At least 6 characters" />
                        <span class="passChar"><span>
                                        <img class="I-icon-img" style={{width:"15px"}} src="http://pngimg.com/uploads/letter_i/letter_i_PNG88.png" alt="" />
                                        </span>Passwords must be at least 6
                            characters.</span>
                    </div>

                    <div class="re-input-pass">
                     <br/>
                        <label for="rePass" class="label-style">Re-enter password</label>
                        <input type="password" id="rePass" />
                    </div>
                    <button onclick="registerBtn()" id="regBtn">Create Account</button>

                    <div class="term-condition">
                        <div class="termDiv">By creating an account, you agree to our <span class="linkfontstyle">
                                Privacy Notice</span>
                            and
                            <span class="linkfontstyle"> Conditions of Use. </span>
                        </div>
                    </div>
                    <div class="moreOp-AmazomSign">
                        <div class="otherRegOp">
                            <h5 class="signOpText moreS-newSo">Other register options</h5>
                            <div class="amazonLogOp">
                              
                                        <img id="amaz-img" src="https://images-na.ssl-images-amazon.com/images/G/01/Shopbop/media/images/authportal/lwa_209x48._CB485945402_.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="alreadyAccunt">
                        <div class="alreadySignin">Already have an account? <span class="linkfontstyle"
                                onclick="signInpage()"> Sign In </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        <div class="contactUs"><span class="linkfontstyle">Contact Us</span></div>
        <div class="copyR-terms">&copy; 1999-2020 BOP LLC. All Rights Reserved. <span class="linkfontstyle">Privacy
                Notice</span><span class="linkfontstyle"> Conditions of Use</span></div>


   </div>
   
   </>
  )
}
