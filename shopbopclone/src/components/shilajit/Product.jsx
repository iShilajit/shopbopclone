import React from 'react'
import { useNavigate } from 'react-router-dom';
import './css/Product.css';
import { itemsData2 } from './data/indexdata';

export const Product = () => {

    const navigate=useNavigate()
    const handleClick=(e)=>{
localStorage.setItem("productdes",JSON.stringify(e));
navigate("/productDescription")
    }
    return (
        <>
            <div className="prodSiteContainer">
                <div className="pageHeading-span">
                    <span>WHAT'S NEW</span>
                </div>
                <div className="page-container">
                    <div className="left-nav-list">
                        <ul className="ul-left-nav-list">
                            <li className="nav-list1 sameLiDesign">Shop All</li>
                            <li className="nav-list2 sameLiDesign">New Today</li>
                            <li className="nav-list3 sameLiDesign">Clothing</li>
                            <li className="nav-list4 sameLiDesign">Shoes</li>
                            <li className="nav-list5 sameLiDesign">Bags</li>
                            <li className="nav-list6 sameLiDesign">Jewelry & Accessories</li>
                            <li className="nav-list7 sameLiDesign">Designer Boutique</li>
                            <li className="nav-list8 sameLiDesign">Men</li>
                        </ul>
                    </div>
                    <div className="mainProdDataApeend">
                        <div className="headingimg">
                            <img
                                src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/desktop/mastheads/2022/2022_05/sb_20220506_desktop_WNMH_mother_1-2.jpg"
                                id="ProdheadImg" alt="" />
                        </div>
                        <div className="itemsViewCount">
                            <div className="countItems">20 items</div>
                            <div className="viewText">View</div>
                            <button id="view20items" >20</button>
                            <button id="view45items" >45</button>
                        </div>

                        <div className=" whatnew">
                            {itemsData2.map((i) => {
                                return (
                                    <div key={i.sid}  >
                                       
                                        <div  onClick={()=>handleClick(i)}>
                                            <img src={i.itemImg} alt="" />
                                            <p>{i.title}</p>
                                            <p>{i.type}</p>
                                            <p>{i.price}</p>
                                        </div>
                                        
                                       
                                       
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
