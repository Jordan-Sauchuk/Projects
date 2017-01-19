function Application(props) {
  return (
 <div className="application">
    <div className="header">
    <h1> {props.title}</h1>
   
    </div>
    
    <div className="players">
    <div className="player">
   <div className="player-name"> Jordan
    </div>
   
    <div className="player-score">
    <div className="counter">
    <button className="counter-action-decrement"> - </button>
    <div classname="counter-score"> 3 </div>
    <button className="counter-action-increment"> + </button>
    </div>
    </div>
    </div>
    </div>
  );
}


Application.propTypes = {
  title: React.PropTypes.string, // .isRequired, to require it
};

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('container'));