import React, { Component } from 'react'
import NamesList from './NamesList'

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			names: [
				"Arthur Dent",
				"Trillion",
				"Zaphod Beeblebrox",
				"Jean-Luc Picard",
				"Jean-Luc Pikachu",
				"Janeway",
				"Mal",
				"Wash",
				"Inara"
			]
		}
	}

	render() {

		return (
			<main>
				<NamesList list={this.state.names} />
			</main>
		);
	}
}

export default App;
