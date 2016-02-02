'use strict'

var React = require('react');
var Dates = require('./Dates.react');
var Buttons = require('./Buttons.react');
var Subject = require('./Subject.react');
var Article = require('./Article.react');

var Content = React.createClass({

  articles: [],

  componentWillMount: function() {
    this.articles.push(<Article index="1" key="1" />);
    this.articles.push(<Article index="2" key="2" />);
    this.articles.push(<Article index="3" key="3" />);
    this.articles.push(<Article index="4" key="4" />);
  },

  render: function() {
    return (
      <div id="main-layout">
        <div className="container">
          <Dates />
          <Buttons />
          <Subject />
          {this.articles}
        </div>
      </div>
    )
  }

});

module.exports = Content;
