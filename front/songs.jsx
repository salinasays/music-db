import React from 'react';
import $ from 'jquery';

var Songs = React.createClass({
	getInitialState: function(){
		return {songs: []}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/songs',
			type: 'GET'
		})
		.done((data) => {
			this.setState({songs: data})
			console.log(data)
		})
	},
	render: function () {

		// console.log(this.state.songs[0].artistId)
		return (
			<div>
				<h2>Songs:</h2>

				<ol>
					{this.state.songs.length === 0 ? null : this.state.songs.map((val, idx) => {

						let songTitle = (val.title)
						let artist = (val.artist) ? val.artist.name : 'N/A'

						return( 
						<li key={idx}>{songTitle}
							<ul>
								<li key={idx}>{'Artist: ' + artist}</li>
							</ul>
						</li>
					)})}
				</ol>
			</div>
		)
	}
})

export default Songs;