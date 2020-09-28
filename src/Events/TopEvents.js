import React from 'react';


const TopEvents = () => {
	
	const handleFooter = (value) => {
		
		alert(value);


		
	}
	return(
		<a href="/" onClick={()=>handleFooter("Back To Home")}>Back To Home</a>
		);

}
export default TopEvents;