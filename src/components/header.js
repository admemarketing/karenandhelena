import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
    }}
  >

    <Helmet>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="NDQxOTA5OGUtZGZkYi00YjRjLTg3YWMtODg0NGRjNWZlNmZiNjM3Mzg0Nzg5MjEyMDgzNjQ3" />
    </Helmet>


    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1% 0`,
        textAlign : `center`
      }}
    >
      <h1 style={{ marginTop: '7%' }}>
        <Link
          to="/"
          style={{
            color: `#000`,
            textDecoration: `none`,
            fontFamily: "Channel Slanted",
            fontSize : "3rem"
          }} 
        >
          Project Me
        </Link>

        <p className="__private_subheading" >
          If it's to be, it's 
          to start with me.
        </p>  
        
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
