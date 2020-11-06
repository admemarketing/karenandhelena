import React from "react"
import Layout from "../components/layout"
 
import Twitter from "../assets/brand-logo/twitter.png"
import Insta from "../assets/brand-logo/instagram.png"
import Linkedin from "../assets/brand-logo/linkedin.png"
import SM from "../components/social-media"
import HelenaAuthor from "../assets/img/author_helena.jpg"
import KarenAuthor from "../assets/img/author_karen.jpg"
import ContactForm from "../components/form/contact"

const Contact = () => (
  <Layout>
  	<section className="page-wrapper">
		<h1> Contact </h1>
		<div className="section-grid">
			<div className="grid-child" id="book-wrapper">

				<div className="section-author-contact">
					<img src={KarenAuthor} alt="author" />
					<img src={HelenaAuthor} alt="author" />
				</div>
				<div className="wrapper-ft">
					<p className="bolder">Karen Hodder</p>
					<p>Health and Intuitive Mindfulness Coach</p>
					<p>Email : <a href="">exuberantlife71@gmail.com</a></p>
				</div>

				<div className="wrapper-ft">
					<p className="bolder">Helena Lancaster</p>
					<p>Spiritual Healer</p>
					<p>Medical Intuitive</p>
					<p>Past Life Regression Practitioner</p>
					<p>Email : <a href="">helena@abudanthealingwisdom.com</a></p>
				</div>

				<div className="wrapper-ft">
					<p className="bolder">Project Me</p>
					<p>Facebook : <a href="">www.facebook.com/projectme</a></p>
					<p>Email : <a href="">helena@abudanthealingwisdom.com</a></p>
				</div>
			</div>

			<div className="grid-child" id="contact-form">
				<ContactForm />
				<SM/>
			</div>
		</div>

  	</section>
  </Layout> 
)

export default Contact
	