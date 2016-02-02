'use strict'

var React = require('react');

var TextInput = React.createClass({

  render: function() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label} : </label>
        <input className="u-full-width" type="text" placeholder={this.props.label} id={this.props.id}/>
      </div>
    )
  }

});

module.exports = TextInput;
