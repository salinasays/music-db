import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import './App.css';
import Home from './home.jsx';
import Artists from './artists.jsx';
import Songs from './songs.jsx';
import Playlists from './playlists.jsx';
import Create from './create.jsx';
import PlaylistTracks from './playlistTracks.jsx';

var App = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Playlist App</h1>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="nav navbar-nav">
							<Link to='/'>Home</Link> 
							<Link to='Artists'>Artists</Link> 
							<Link to='Songs'>Songs</Link> 
							<Link to='Playlists'>Playlists</Link> 
							<Link to='Create'>Create Playlist</Link>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='Artists' component={Artists} />
			<Route path='Songs' component={Songs} />
			<Route path='Playlists' component={Playlists} />
			<Route path='Playlists/:id' component={PlaylistTracks} />
			<Route path='Create' component={Create} />
		</Route>
	</Router>,
	document.getElementById('app'))