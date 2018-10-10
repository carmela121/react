import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    cards:[
      { name: "Yehuda Katz",
        company: "Tilde, Inc.",
        avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4"
      },
      { name: "Chris Wanstrath",
        company: "@github",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
      },
      { name: "Evan Phoenix",
        company: "@hashicorp",
        avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4"
      },
      { name: "Tom ten Thij",
        company: "Freelance",
        avatar_url: "https://avatars2.githubusercontent.com/u/31?v=4"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <a className="link" href="google.com"> <h1  className="App-title">Carmen Carmona</h1></a>

        </header>
        <div className="data-block">
          <Form/>
          <CardList cards={this.state.cards}/>
        </div>

        <p className="App-intro">
      Lorem ipsu m blal rlaknr lankkr lalnr
        </p>
        <img className="living-room" src="./living-room.jpeg"></img>
      </div>
    );
  }
}

const Card = (props) => {
	return (
  
  	<div className="main-container">
  	  <img className="profile-picture" 	src={props.avatar_url} />
      <div className="details">
        <div className="info">{props.name}</div>
        <div>{props.company}</div>
      </div>
  	</div>

	);
};

const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card {...card}/>)}
  	</div>
  );
};

class Form extends React.Component {
  state = { userName: ''}
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName)
    axios.get('https://api.github.com/users/${this.state.userName}')
    .then(resp => {
      console.log(resp)
    });
  }
	render() {
  	return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" 
        placeholder="github name" required
        value={this.state.userName }
        onChange={(event) => this.setState({ userName: event.target.value })}
        />
      <button type="submit">Add card</button>
    </form>
    )
  }
}

export default App;
