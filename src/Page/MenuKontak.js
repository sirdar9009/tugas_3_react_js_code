import React, {Component} from 'react';

class MenuKontak extends Component{
	constructor (props){
		super (props);
		this.state={
			 alamat:"Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
			 noTelpn: "0813 1234 5678"
		}
		
	}

	render(){
		return(
			<div>
			<center>
				<h3>{this.state.alamat}</h3>	
				<h3>Kontak Kami: {this.state.noTelpn}</h3>
			</center>
			</div>
			)
	}


}
export default MenuKontak;