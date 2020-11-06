import React from 'react'
import Layout from "../components/layout";
import { Link } from "gatsby"

const Blog = (props) =>{


    return(
        <>
            <Layout>
          
                <section className="section-single-blog-post">
                	<div className="container">

                        <div className="two-blog-grid">

                            <div className="single-post-thumbnail">
                                <img src={''} alt="thumbnail"/>
                            </div>

                            <div className="single-post-meta">
                                <span className="author-name-single-post">
                                    <Link to="/author">David John Black </Link>
                                </span>

                               <span className="single-post-date">
                                Published On: {props.data.markdownRemark.frontmatter.date}
                               </span>
                            </div>

                        </div>

                    	<h1 className="single-heading-title-post">
                    		{props.data.markdownRemark.frontmatter.title}
                    	</h1>

    

                        <div className="single-post-content">
                             <div 
                                dangerouslySetInnerHTML={{__html: `${props.data.markdownRemark.html}`}}
                              />
                        </div>

                
                	</div>
                </section>
            </Layout>
        </>
    )
}



export const query = graphql`
    query($slug:String!){
        markdownRemark(fields : {slug: {eq : $slug}}){
            frontmatter{
                title
                date
            }
            html
        }
    }
`


export default Blog