'use strict'

var React = require('react');
var Home = require('./Home/Home.react');

var Content = React.createClass({

  render: function() {
    console.log("Rendering content for " + this.props.page);
    if(this.props.page == "home") {
      return <Home />
    } else {
      return(
        <div id="main-layout">
          <div className="container">
            <h3>{this.props.page}</h3>
          </div>
        </div>
      )
    }
  }

});

module.exports = Content;
