'use strict'

var React = require('react');
var $ = require('jquery');

var TextInput = React.createClass({

  getInitialState: function() {
    return {inError: false}
  },

  onChange: function() {
    var value = $("#" + this.props.id).val();
    if(value == "") {
      this.setState({inError: true});
    } else {
      this.props.onInputChange({id: this.props.id, value: value});
      this.setState({inError: false});
    }
  },

  render: function() {
    var style = {};
    if(this.state.inError) {
      style = {"backgroundColor":"Red"};
    }
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
          style={style}
        />
      </div>
    )
  }

});

module.exports = TextInput;
