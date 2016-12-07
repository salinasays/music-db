import React from 'react';
import $ from 'jquery';
import Songs from './songs.jsx';

const PlaylistTracks = React.createClass({
	getInitialState: function(){
		return {playlists: null}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/playlists/' + this.props.params.id,
			type: 'GET'
		})
		.done((data) => {
			this.setState({playlists: data})
		})
	},
	render: function(){
		return (
			<div>
				<h1>{(this.state.playlists) ? this.state.playlists.title : null}</h1>

				<ol>
					{(this.state.playlists) ? this.state.playlists.songs.map((val, idx) => {

						let youtube_url = (val.youtube_url) ? val.youtube_url : "Unavailable"

						return (
							<li key={idx}>
							{val.title} by {val.artist.name}
								<ul>
									<li>Genre(s): {val.songs.genres.title}</li>
									<li>Created at: {val.createdAt}</li>

									<iframe id="ytplayer" type="text/html" width="640" height="360"
									src={`${youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:8888.com`}></iframe>
								</ul>
							</li>
						)
					}) : null}
				</ol>

			</div>
		)
	}
})

export default PlaylistTracks;

// {this.state.playlists.data.title}