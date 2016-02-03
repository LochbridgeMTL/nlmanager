'use strict'

var React = require('react');
var Dates = require('./Dates.react');
var Buttons = require('./Buttons.react');
var Subject = require('./Subject.react');
var Article = require('./Article.react');

var Content = React.createClass({

  articles: [],

  render: function() {

    this.articles = [];
    for(var i in this.props.articles) {
      var index = parseInt(i) + 1;
      this.articles.push(
        <Article
          index={index}
          key={index}
          title={this.props.articles[i].title}
          description={this.props.articles[i].description}
          link={this.props.articles[i].link}
          author={this.props.articles[i].author}
        />);
    }

    return (
      <div id="main-layout">
        <div className="container">
          <Dates />
          <Buttons />
          <Subject value={this.props.subject} />
          {this.articles}
        </div>
      </div>
    )

  }

});

module.exports = Content;
