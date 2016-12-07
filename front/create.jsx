import React from 'react';
import $ from 'jquery';

var Create = React.createClass({
	getInitialState: function(){
		return {playlists: null}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/playlists',
			type: 'POST'
		})
		.done((data) => {
			this.setState({playlists: data})
		})
	},
	render: function () {
		return (
			<div>
				<h2>Create Your Own Playlist: </h2>

				<form>
				<label>Playlist Title:</label> <br />
				<input type= "text" />


				<button type="submit">Create</button>
				</form>
			</div>
		)
	}
})

export default Create;