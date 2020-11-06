import React from "react"
import { Link } from "gatsby"

const Nav = ()=>{

    const pages = [
            'Home',
            'Author',
            'Books',
            'Blog',
            'Order',
            'Contact'
    ]

    let Listed = pages.map((e) =>{
            
        var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
        let filterUrl = (newUrl === 'home') ? '/' : `/${newUrl}`;

        return (
            <li>
                <Link 
                    to={filterUrl}>
                    {e.replace(/[-/]/g," ").trim()}
                </Link>	
            </li>
        )
    })


    return(
        <>
            <nav className="main-navigation">
                <ul>
                    {Listed}
                </ul>
            </nav>
        </>         
    )
}

export default Nav;