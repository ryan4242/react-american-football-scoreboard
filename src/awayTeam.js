import React from 'react';

function AwayTeam(props) {
  return(
    <div className="away">
      <h2 className="away__name">Tigers</h2>
      <div className="away__score">{props.awayScore}</div>
    </div>
  )
}

export default AwayTeam;