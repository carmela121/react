import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {
  state = {
    cards:[]
  };
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <a className="link" href="google.com"> <h1  className="App-title">Carmen Carmona</h1></a>

        </header>
        <div className="data-block">
          <Form onSubmit={this.addNewCard} />
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
  	  {props.cards.map(card => <Card key={card.id} {...card}/>)}
  	</div>
  );
};

class Form extends React.Component {
  state = { userName: ''}
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName)
    //axios is a method to access api data. Install with npm as a package and import it at the top of your files as above
    axios.get('https://api.github.com/users/'+ this.state.userName)
    .then(resp => {
      this.props.onSubmit(resp.data);
      this.setState({ userName: ''})
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
