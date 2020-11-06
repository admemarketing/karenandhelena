import React from "react"



const Contact = () =>{

	function OnSubmitForm (e) {

	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
       
    }
    
	return(
		<>

			<form 
		        onSubmit={OnSubmitForm}
		        action="https://formspree.io/xvopdpny"
		        method="POST"
		        id="form-custom">

	            <label>
	                <input 
	                    type="text"
	                    placeholder="Name"
	                />
	            </label>

	            <label>
	                <input 
	                    type="Email"
	                    placeholder="Email"
	                />
	            </label>
	            
	            <label> 
	                <textarea type="text" name='message' 
	                    className="textArea"
	                    placeholder='Message'
	                    required />
	            </label>

	            <div className="buttonContainer">
	                <input 
	                    className="abtiaryButton" 
	                    value="Submit"
	                    type="submit" />
	            </div>

	        </form>
		</>
	)
}

export default Contact;