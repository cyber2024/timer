var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
});

React.render(<Main text="Suck a dick, it's alive!"/>, document.getElementById('app'));
