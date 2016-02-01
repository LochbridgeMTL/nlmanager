'use strict'

var React = require('react');
var Dates = require('./Dates.react');
var Buttons = require('./Buttons.react');
var Subject = require('./Subject.react');

var Content = React.createClass({

  render: function() {
    return (
      <div id="main-layout">
        <div className="container">
          <Dates />
          <Buttons />
          <Subject />
        </div>
      </div>
    )
  }

});

module.exports = Content;
