'use strict'

var React = require('react');
var $ = require('jquery');
var Header = require('./Header.react');
var Content = require('./Content.react');
var Footer = require('./Footer.react');

var Application = React.createClass({

  render: function () {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }

});

module.exports = Application;
