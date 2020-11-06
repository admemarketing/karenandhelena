import React from "react"
import Layout from "../components/layout"
import HelenaAuthor from "../assets/img/author_helena.jpg"
import KarenAuthor from "../assets/img/author_karen.jpg"

const Author = () => (
  <Layout>
  	<section className="page-wrapper">
		
		<div className="section-grid">
			<div className="grid-child" id="book-wrapper">

				<div className="section-author">
					<img src={KarenAuthor} alt="img-book" />
				</div>
			</div>

			<div className="grid-child" id="book-contents">

				<h1>Author</h1>
				<p>
					<span className="emphasize">Karen Hodder</span> is a Spiritual Healer, Medical Intuitive and Past Life Regression
					Practioner. In the course of her spritual work and through raising a teenage daughter, not to 
					mention her own life experiences she has gleaned valuable insights into the limitless opportunities for personal 
					growth that accompany for experiences in life. With these lessons come the skills required for independence. 
					EVERYTHING happens for a reason.

					<div className="button-wrapper-btn">
						<button>
							<a href="">Order Now</a>
						</button>
					</div>
				</p>
			</div>
		</div>

		<div className="section-grid">
			<div className="grid-child" id="book-wrapper">
				<div className="section-author">
					<img src={HelenaAuthor} alt="img-book" />
				</div>
			</div>

			<div className="grid-child" id="book-contents">
				<p>
					<span className="emphasize">Helena Lancaster</span> is an Entreprenuer, Educator, Health and Intuitive Mindfulness Coach,
					and a mother to 2 teenagers. Struggle during her schooling years left Karen feeling isolated,
					unworthy and unintelligent. This experience was followed by years of drug addiction, food addiction,
					alchol addiction, divorce and top it off becoming financially broken. However this experience taught her the importance
					of fostering an unshakeable sense of self love, self-worth and courage and most importantly to go within to search for 
					the light again.

					<div className="button-wrapper-btn">
						<button>
							<a href="">See My Book</a>
						</button>
					</div>
				</p>
			</div>	
		</div>

  	</section>
  </Layout> 
)

export default Author
	