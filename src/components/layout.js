/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types" 
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../assets/css/layout.css"
import "../assets/css/main.css"
    
import Navigation from "./navigation"
import Nav from "./navigation"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>  
      <Header siteTitle={data.site.siteMetadata?.title || `All That Is`} />
      <Navigation />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1250,
          padding: `0px 0.7rem 1.45rem`,
        }}
      >
        <main>{children}</main>

      </div>

      <div className="footer-name-auth">
          <h1>
            Karen Hodder and helena lancaster
          </h1>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
