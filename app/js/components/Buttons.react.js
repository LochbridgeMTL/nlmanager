'use strict'

var React = require('react');

var Buttons = React.createClass({

  render: function() {
    return(
      <div className="row">
        <div className="six columns">&nbsp;</div>
        <div className="six columns">
          <a className="button button-primary" href="#">Test</a>&nbsp;
          <a className="button button-primary" href="#">Save</a>
        </div>
      </div>
    )
  }

});

module.exports = Buttons;
