import React from 'react';
import HomeTeam from './homeTeam';
import AwayTeam from './awayTeam';

function TopRow(props) {
  let seconds = 0;
  let minutes = 15;

  let timer = () => {
    if(seconds === 0) {
      minutes -= 1;
      seconds = 59;
    } 
    seconds--;
    if(minutes === 0 && seconds === 0) {
      clearInterval(timer); 
    }
    console.log(`${minutes}:${seconds}`);
    return `${minutes}:${seconds}` 
  }
  


  return (
    <div className="topRow">
          <HomeTeam score={props.score} />
  <div className="timer">{setInterval(timer, 1000)}</div>
          <AwayTeam awayScore={props.awayScore} />
        </div>
  )
}

export default TopRow;