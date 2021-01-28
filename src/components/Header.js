import React from 'react'
import "../css/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className= "header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>

            <div className= "header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className= "header__nav">
            <div className= "header__navOption">
                <span className="header__navOptionLineOne">Hello Guest</span>
                <span className="header__navOptionLineTwo">Sign In</span>
            </div>
            <div className= "header__navOption">
                <span className="header__navOptionLineOne">Returns &</span>
                <span className="header__navOptionLineTwo">Orders</span>
            </div>
            <div className= "header__navOption">
                <span className="header__navOptionLineOne">Your</span>
                <span className="header__navOptionLineTwo">Prime</span>
            </div>

            <div className="header__navOptionBasket" >
                <ShoppingCartIcon />
                <span className="header__navOptionLineTwo header__basketCount" >0</span>
            </div>
            </div>
        </div>


    )
}

export default Header;
