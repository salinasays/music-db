import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

var Playlists = React.createClass({
	getInitialState: function(){
		return {playlists: []}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/playlists',
			type: 'GET'
		})
		.done((data) => {
			console.log(data)
			this.setState({playlists: data})
		})
	},
	render: function () {
		return (
			<div>
				<h2>Playlists:</h2>

				<ol>
					{this.state.playlists.length === 0 ? "There are no playlists. Go create one!" : this.state.playlists.map((val) => {
						return( 
						<li key={val.id}> 
						<Link to={'/playlists/' + val.id}>{val.title}</Link>
						</li>
					)})}
				</ol>
			</div>
		)
	}
})

export default Playlists;