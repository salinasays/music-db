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
		return (
			<div>
				<h2>Songs:</h2>

				<ol>
					{this.state.songs.length === 0 ? null : this.state.songs.map((val, idx) => {

						let songTitle = val.title
						let artist = (val.artist) ? val.artist.name : 'N/A'
						let youtube_url = (val.youtube_url) ? val.youtube_url : "Unavailable"

						return ( 
						<li key={idx}>{songTitle}
							<ul>
								<li key={idx}>{'Artist: ' + artist}</li>
								
								<iframe id="ytplayer" type="text/html" width="640" height="360"
								src={`${youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:8888.com`}></iframe>
							</ul>
						</li>
						)
					})}
				</ol>
			</div>
		)
	}
})

export default Songs;