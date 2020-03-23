import React from 'react';
import SearchBar from './SearchBar';
import api from '../api/api';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyBFtcWhvF3nQdU4xu-QejGxzjBTvJ0kABg';

class App extends React.Component {

	state = {
		videos: [],
		selectedVideo: ''
	};



	onTermSubmit =  async term => {
		const response = await api.get('/search',{
			params: {
				part: 'snippet',
				maxResults: 5,
				key: KEY,
				q: term
			}
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
		console.log(this.state.videos);
	};

	onVideoSelect = (video) => {
		this.setState({selectedVideo: video});
	}

	componentDidMount() {
		this.onTermSubmit('buildings');
	}


	render() {
		return(
			<div className = "ui container shadow-4">
				<SearchBar onTermSubmit = {this.onTermSubmit} />
				<div className="ui grid">
					<div className ="ui row">
						<div className ="eleven wide column">
							<VideoDetail  selectedVideo = {this.state.selectedVideo} />
						</div>
						<div className ="five wide column">
							<VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}   />
						</div>
					</div>
				</div>
			</div>
		);
	}
} 



export default App;