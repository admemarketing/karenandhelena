import React from "react"
import {Link} from "gatsby"
import Twitter from "../assets/brand-logo/twitter.png"
import Insta from "../assets/brand-logo/instagram.png"
import Linkedin from "../assets/brand-logo/linkedin.png"


const SM = ()=>{
	return(
		<>	
			<nav className="sm-nav">
				<li><a href=""><img src={Insta}/></a></li>
				<li><a href=""><img src={Twitter}/></a></li>
				<li><a href=""><img src={Linkedin}/></a></li>

				<p> 
					<a target="_blank" href="https://www.linkedin.com/in/brother-david-b1647a189/">
						Facebook: www.facebook.com/projectme
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/brother-david-b1647a189/">
						Facebook: www.facebook.com/silverlininglife
					</a>
				</p>

				<p> 
					<a target="_blank" href="https://www.linkedin.com/in/brother-david-b1647a189/">
						Instagram: projectmeonline
					</a>
				</p>

			</nav>
		</>
	)
}

export default SM;