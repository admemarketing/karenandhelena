import React from "react"
import Layout from "../components/layout"
import BookImage from "../assets/books/book_cover.png"


const Order = () =>{
	return(
		<>
		  <Layout>
			  	<section className="page-wrapper">
					<h1>Order</h1>

					<div id="book-order-wrapper">
						<img src={BookImage} alt="book-image"/>
					</div>

					 {
                        /*
                            Order Custom Powered By Snipcart
                        */
                      }
                            
                        <div className="snipcart-button-container">
                            <button
                                className="snipcart-add-item"
                                data-item-id="all-that-is"
                                data-item-price="13.50"
                                data-item-url="/"
                                data-item-image={BookImage}
                                data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                                data-item-name="All That Is">
                                Add to cart
                            </button>
                        </div>
			  	</section>
		  </Layout> 
		</>	
	)	
}

export default Order;