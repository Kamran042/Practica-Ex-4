
import React from 'react'
import {Link} from "react-router-dom"
import "./header.scss"

const Header = () => {
    return (
        <div className='headerAdmin'>
            <div className="headerAdmin__left">
                <h1>Logo</h1>
            </div>
            <div className="headerAdmin__right">
                <Link to="">Products</Link>
                <Link to="add">Add Product</Link>
            </div>
        </div>
    )
}

export default Header
                                