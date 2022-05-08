import React from 'react'
import './css/Product.css';
import { itemsData2 } from './data/indexdata';
export const Product = () => {
    return (
        <>
            <div class="prodSiteContainer">
                <div class="pageHeading-span">
                    <span>WHAT'S NEW</span>
                </div>
                <div class="page-container">
                    <div class="left-nav-list">
                        <ul class="ul-left-nav-list">
                            <li class="nav-list1 sameLiDesign">Shop All</li>
                            <li class="nav-list2 sameLiDesign">New Today</li>
                            <li class="nav-list3 sameLiDesign">Clothing</li>
                            <li class="nav-list4 sameLiDesign">Shoes</li>
                            <li class="nav-list5 sameLiDesign">Bags</li>
                            <li class="nav-list6 sameLiDesign">Jewelry & Accessories</li>
                            <li class="nav-list7 sameLiDesign">Designer Boutique</li>
                            <li class="nav-list8 sameLiDesign">Men</li>
                        </ul>
                    </div>
                    <div class="mainProdDataApeend">
                        <div class="headingimg">
                            <img
                                src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/desktop/mastheads/2022/2022_05/sb_20220506_desktop_WNMH_mother_1-2.jpg"
                                id="ProdheadImg" alt="" />
                        </div>
                        <div class="itemsViewCount">
                            <div class="countItems">20 items</div>
                            <div class="viewText">View</div>
                            <button id="view20items" >20</button>
                            <button id="view45items" >45</button>
                        </div>

                        <div class="productItemsMain-div">
                            {itemsData2.map((i) => {
                                return (
                                    <div key={i.sid} className="whatnew" >
                                       
                                        <div >
                                            <img src={i.itemImg} alt="" />
                                            <p>{i.title}</p>
                                            <p>{i.type}</p>
                                            <p>{i.price}</p>
                                        </div>
                                        {/* <div> <p>{i.title}</p></div>
                                        <div> <p>{i.type}</p></div>
                                        <div> <p>{i.price}</p></div> */}
                                       
                                       
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
