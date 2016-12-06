import React from 'react';
import $ from 'jquery';

var Artists = React.createClass({
	getInitialState: function(){
		return{artists: []}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/artists',
			type: 'GET'
		})
		.done((data) =>{
			this.setState({artists: data})
		})
	},
	render: function () {
		return (
			<div>
				<h2>Artists:</h2>

				<ol>
					{this.state.artists.length === 0  ? null : this.state.artists.map((val, idx) => {
						return <li key={idx}> {val.name} </li>
					})}
				</ol>
			</div>
		)
	}
})

export default Artists;