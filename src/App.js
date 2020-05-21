//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import Buttons from './Buttons'
import "./App.css";
import TopRow from "./TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const scoreHandler = (name, points) => {
    name.toLowerCase() === 'lions' ? setScore(score + points) : setAwayScore(awayScore + points);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow score={score} awayScore={awayScore} />
        <BottomRow />
      </section>
      <Buttons scoreHandler={scoreHandler} />
    </div>
  );
}

export default App;
