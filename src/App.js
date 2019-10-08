import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friendsList: ["john", "jacob", "jingle", "heimer", "schmidt"],
			friend: ""
		};
		this.deleteFriend = this.deleteFriend.bind(this);
		this.addFriend = this.addFriend.bind(this);
	}
	changeHandler(event) {
		this.setState({
			friend: event
		});
	}

	addFriend() {
		const friendListCopy = [...this.state.friendsList];
		friendListCopy.push(this.state.friend);
		this.setState({ friendsList: friendListCopy, friend: "" });
	}

	deleteFriend(index) {
		const friendListCopy = [...this.state.friendsList];
		friendListCopy.splice(index, 1);
		this.setState({ friendsList: friendListCopy });
	}

	render() {
		const mappedFreinds = this.state.friendsList.map((friend, index) => {
			return (
				<div key={index}>
					<span>{friend}</span>
					<button onClick={this.deleteFriend}>Delete</button>
				</div>
			);
		});
		return (
			<div className='App'>
				<div>{mappedFreinds}</div>
				<input
					type='text'
					onChange={e => {
						this.changeHandler(e.target.value);
					}}
					value={this.state.friend}
				/>
				<button onClick={this.addFriend}>Add Friend</button>
			</div>
		);
	}
}

export default App;
