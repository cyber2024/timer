//var React = require('react');

var Timer = React.createClass({
  getInitalState: function(){
    //when object is created, elapsed time is 0;
    //this.setState({elapsedTime: 0});
    return {elapsed: 0};
  },
  componentDidMount: function(){
    this.timer = setInterval(this.tick, 50);
  },
  componenetWillUnmount: function(){
    clearInterval(this.timer);
  },
  tick: function(){
    this.setState({elapsed: new Date() - this.props.start});
  },

  render: function(){

    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed/10).toFixed(1);

    return <p>This timer was started <b>{seconds} seconds</b> ago</p>;
  }
});

React.render(
  <Timer start={Date.now()} />, 
  document.body
  );
