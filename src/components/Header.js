import React from 'react'
import { Link } from 'react-router-dom';

// icons import 
import { AiOutlineRight, AiOutlineLeft, AiOutlineDown, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle, MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsCart3} from 'react-icons/bs';
import LogoImg from "../images/logo/logo.png";


const Header = () => {
  return (
    // https://www.barnesandnoble.com/
    <header>
      <div className="container h-container">
          <div className="offers-carousal">
            <div className="carousal-wrapper max-width">
              <div className="move-btns">
                <div className='move-btn move-right-btn'><AiOutlineLeft/></div>
                <div className='move-btn move-left-btn'><AiOutlineRight/></div>
              </div>
              <div className="carousal-elem">
                <Link to={""} className='offer-txt'>EXPLORE ALL KIDS' SPECIAL OFFERS</Link>
              </div>
              <div className="carousal-elem">
                <Link to={""} className='offer-txt'>JOIN B&N PREMIUM MEMBERSHIP TODAY</Link>
              </div>
              <div className="carousal-elem">
                <Link to={""} className='offer-txt'>SHOP GIFT IDEAS FOR EVERY GRAD</Link>
              </div>
            </div>
          </div>
          <div className="main-header max-width">
                <ul className="grid-elem links navlinks">
                  <li><Link className='link'>Blog & podcast</Link></li>
                  <li><Link className='link'>membership</Link></li>
                  <li><Link className='link'>Coupons</Link></li>
                  <li><Link className='link'>Bestsellers</Link></li>
                  <li><Link className='link'>gift cards</Link></li>
                </ul>
                <ul className='grid-elem links action-links'>
                  <li><Link className='link action-link'><MdOutlineAccountCircle className='link-icon-bfr'/> account <AiOutlineDown className='link-icon-aftr'/></Link></li>
                  <li><Link className='link action-link'><MdOutlineFavoriteBorder className='link-icon-bfr'/> wishlist</Link></li>
                </ul>
                <div className="grid-elem logo">
                  <div className="logo-wrapper">
                    <img className='logo-img' src={LogoImg} alt="" />
                  </div>
                </div>
                <div className="grid-elem search-field">
                  
                  <form className='search-form' action="">
                    <input className='field-input search-input' type="text" name="search-items" id="" placeholder='Search by Name, Category, Author...' />
                    <button className='field-input search-submit' type="submit"><AiOutlineSearch/></button>
                  </form>
                </div>
                <div className="grid-elem cart">
                  <div className='cart-drop-down'>
                    <button className='drp-dwn-btn'> 
                      <BsCart3 className='icon'/>
                      <div className="infos">
                        <p>3</p>
                        <p>129 $</p>
                      </div>
                    </button>
                  </div>
                </div>
                <ul className="grid-elem links collection-links">
                  {/* <li className='title'>Categories :</li> */}
                  <li><Link className='link'>Books</Link></li>
                  <div className="separator"></div>
                  <li><Link className='link'>Audiobooks</Link></li>
                  <div className="separator"></div>
                  <li><Link className='link'>ebooks</Link></li>
                  <div className="separator"></div>
                  <li><Link className='link'>fiction</Link></li>
                  <div className="separator"></div>
                  <li><Link className='link'>kids</Link></li>
                  <div className="separator"></div>
                  <li><Link className='link'>Western</Link></li>
                  <div className="separator"></div>
                  <li><Link className='link'>Romance</Link></li>
                  <div className="separator"></div>
                  <li><Link className='link'>Mystery</Link></li>
                  <div className="separator"></div> 
                  <li><Link className='link'>Historical</Link></li>
                  <div className="separator"></div> 
                  <li><Link className='link'>horror</Link></li>
                  <div className="separator"></div> 
                  
                </ul>
          </div>
      </div> 
    </header>
  )
}

export default Header