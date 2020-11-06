import React from "react"
import Layout from "../components/layout"
import BookImage from "../assets/books/book_cover.png"

const Books = () => (
  <Layout>
  	<section className="page-wrapper">
		
		<div className="section-grid">
			<div className="grid-child" id="book-wrapper-content">
				<img src={BookImage} alt="book"/>
			</div>		

			<div className="grid-child" id="book-contents">

				<h1>Books</h1>
				<p>
					<span className="">Project Me</span> is an interactive workbook specifically targeted to teenage 
					to teenage girls. This books allows the reader to delve deeper into 
					"what makes them tick". Once you again a greater understanding of self 
					the sky really is the limit. Taking a holistic approach will definitely 
					be game changing, we cover topic such as:
					<span className="block-elem">Self talk</span>
					<span className="block-elem">Who's in your Tribe?</span>
					<span className="block-elem">Numerology</span>
					<span className="block-elem">Mindfulness</span>
					<span className="block-elem">Balance</span>
					<span className="block-elem">Unique differences and much much more</span>
				</p>

				<div className="snipcart-button-container">
                    <button
                        className="snipcart-add-item"
                        data-item-id="all-that-is"
                        data-item-price="13.50"
                        data-item-url="/"
                        data-item-image={BookImage}
                        data-item-description="Project Me is an interactive workbook specifically targeted to teenage to teenage girls."
                        data-item-name="Project Me">
                        Add to cart
                    </button>
                </div>

			</div>
		</div>
  	</section>
  </Layout>
)

export default Books
	