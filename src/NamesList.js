import React, { Component } from 'react'
import NameCard from './NameCard'

class NamesList extends Component {
	render(){
		let { list } = this.props

		let names = list.map(item => {
			return <NameCard name={item} />
		}


		return (
			<ul>
				{names}
			</ul>
		)
	}

}

export default NamesList
