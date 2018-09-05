import React, { Component } from 'react'

class NameCard extends Component {
	render(){
		return (
			<li style={{listStyle: 'none',}}>
				<a href={"/"+this.props.name}
				<h3>{this.props.name}</h3>
				<p>Lorem ipsum set dolor met....</p>
				</a>
			</li>
		)
	}
}

export default NameCard
