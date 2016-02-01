'use strict'

var React = require('react');

var Subject = React.createClass({

  render: function(){
    return (
      <div className="row">
        <div className="twelve columns">
          <label htmlFor="subjectLine">Subject line : </label>
          <input className="u-full-width" type="text" placeholder="Subject line" id="subjectLine"/>
        </div>
      </div>
    )
  }

});

module.exports = Subject;
