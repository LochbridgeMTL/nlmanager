'use strict'

var React = require('react');
var TextInput = require('./TextInput.react');

var IdInput = React.createClass({

  getInitialState: function() {
    this.jobseekerId = "";
    return {hasError: false};
  },

  handleInputChange: function(data) {
    this.jobseekerId = data.value;
  },

  handleCancelClick: function() {
    this.props.onCancel();
  },

  handleTestClick: function() {
    if(this.jobseekerId == "") {
      alert("Please enter a JobseekerId");
    } else {
      this.props.onTest(this.jobseekerId);
    }
  },

  render: function() {
    return (
      <div className="container articleContainer" style={{"marginTop":"25%"}}>
        <div className="row">
          <div className="twelve columns">
            <h5>Wednesday newsletter test</h5>
            <TextInput label="JobseekerId" value="" id="Jobseekerid" onInputChange={this.handleInputChange} />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <div className="u-pull-right" style={{"marginLeft":"12px"}}>
              <a onClick={this.handleTestClick} className="button button-primary" href="#">Test</a>
            </div>
            <div className="u-pull-right">
              <a onClick={this.handleCancelClick} className="button button-primary" href="#">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = IdInput;
