'use strict'

var React = require('react');
var $ = require('jquery');

var TextInput = React.createClass({

  onChange: function() {
    this.props.onInputChange({id: this.props.id, value: $("#" + this.props.id).val()});
  },

  render: function() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label} : </label>
        <input
          className="u-full-width"
          defaultValue={this.props.value}
          type="text"
          placeholder={this.props.label}
          id={this.props.id}
          onChange={this.onChange}
        />
      </div>
    )
  }

});

module.exports = TextInput;
