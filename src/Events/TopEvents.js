import React from 'react';


const TopEvents = () => {
	
	const handleFooter = (value) => {
		
		alert(value);


		
	}
	return(
		<a href="./index.html" onClick={()=>handleFooter("Back To Home")}>Back To Home</a>
		);

}
export default TopEvents;