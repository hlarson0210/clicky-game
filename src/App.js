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
    start: "click any image to start",
    textClass: "",
    shuffle: [],
    guessed: new Set(),
  }

  componentDidMount() {
    this.shuffleMeTimbers();
    this.setState({ start: "click any image to start" })
  }

  shuffleArray = arr => {
    return arr.sort(() => Math.random() - 0.5);
  }

  shuffleMeTimbers = () => {
    this.setState({ shuffle: this.shuffleArray(this.state.friends) });
  }



  incorrect() {
    this.setState({ score: 0, start: "you guessed incorrectly" });
  }

  correct() {
    let score = this.state.score + 1;

    if (score > this.state.topScore) {
      this.setState({ score: score, topScore: score, start: "you guessed correctly" });
    } else {
      this.setState({ score: score, start: "you guessed correctly" });
    }
  }

  checkGuess = (friendID) => {
    this.shuffleMeTimbers();
    if (this.state.guessed.has(friendID)) {
      this.setState({ guessed: new Set() }, () => {
        this.incorrect();
      });

      return
    }
    this.state.guessed.add(friendID);

    this.correct();
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          textClass={this.state.textClass}>{this.state.start}</Navbar>
        <div className="container">
          <div className="jumbotron-fluid pt-5 mt-5">
            <h1 className="title">clicky game</h1>
            <h5 className="title">click on an image to earn points...but don't click on the same one twice</h5>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.friends.map(friend =>
              <FriendCard
                shuffleArr={this.shuffleMeTimbers}
                onCorrect={() => { this.correct() }}
                onIncorrect={() => { this.incorrect() }}
                checkGuess={this.checkGuess}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
              />)}
          </div>
        </div>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
