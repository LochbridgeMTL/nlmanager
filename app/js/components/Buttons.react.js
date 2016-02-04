'use strict'

var React = require('react');

var Buttons = React.createClass({

  render: function() {
    return(
      <div className="row">
        <div className="six columns">&nbsp;</div>
        <div className="six columns">
          <div className="u-pull-right" style={{"marginLeft":"12px"}}><a onClick={this.props.onTestClick} className="button button-primary" href="#">Test</a></div>
          <div className="u-pull-right"><a onClick={this.props.onSaveClick} className="button button-primary" href="#">Save</a></div>
        </div>
      </div>
    )
  }

});

module.exports = Buttons;
