'use strict'

var React = require('react');
var TextInput = require('./TextInput.react');

var Subject = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="twelve columns">
          <TextInput label="Subject line" id="subjectline" value={this.props.value} />
        </div>
      </div>
    )
  }

});

module.exports = Subject;
