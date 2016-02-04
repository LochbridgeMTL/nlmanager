'use strict'

var React = require('react');
var TextInput = require('./TextInput.react');

var Subject = React.createClass({

  getInitialState: function() {
    this.subjectline = "";
    return null;
  },

  handleInputChange: function(data) {
    this.subjectline = data.value;
    this.props.onSubjectChange(this.subjectline);
  },

  componentDidMount: function() {
    this.subjectline = this.props.value;
  },

  render: function() {
    return (
      <div className="row">
        <div className="twelve columns">
          <TextInput onInputChange={this.handleInputChange} label="Subject line" id="subjectline" value={this.props.value} />
        </div>
      </div>
    )
  }

});

module.exports = Subject;
