import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

class App extends React.Component {
  state = {
    friends: friends,
    score: 0,
    topScore: 0,
    start: "",
    keepGuessing: "you guessed correctly",
    shuffle: [],
    clicked: []
  }
  // push the key of the click img to the clicked state

  componentDidMount() {
    this.shuffleMeTimbers();
  }

  shuffleArray = arr => {
    return arr.sort(() => Math.random() - 0.5);
  }

  shuffleMeTimbers = () => {
    this.setState({ shuffle: this.shuffleArray(this.state.friends) });
    this.clicked();
    this.countMyClicks();
  }
  
  clicked() {
    this.setState({clicked: true})
  }
  // removeAThing = id => this.setState({ friends: this.state.friends.filter(item => item.id !== id) });

  countMyClicks = id => this.setState({ clicked: this.state.clicked.filter(item => item.id !== id) })
  

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          textClass={this.state.start}>{this.state.keepGuessing}</Navbar>
        <div className="container">
          <div className="jumbotron-fluid pt-5 mt-5">
            <h1 className="title">clicky game</h1>
            <h5 className="title">click on an image to earn points...but don't click on the same one twice</h5>
          </div>
        </div>
        {this.state.friends.map(friend =>
          <FriendCard
            shuffleArr={this.shuffleMeTimbers}
            clicked={this.countMyClicks}
            id={friend.id}
            {...console.log(friend.id)}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />)}
          {console.log("===================")}
      <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
