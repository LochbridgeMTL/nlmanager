'use strict'

var React = require('react');
var Dates = require('./Dates.react');
var Buttons = require('./Buttons.react');
var Subject = require('./Subject.react');
var Article = require('./Article.react');

var Content = React.createClass({

  getInitialState: function() {
    this.articleComponents = [];
    this.articleData = [];
    this.subjectline = "";
    return null;
  },

  handleOnSaveClick: function() {
    this.props.onSaveClick(this.subjectline, this.articleData);
  },

  handleOnTestClick: function() {
    this.props.onTestClick();
  },

  handleArticleChange: function(data) {
    this.articleData[parseInt(data.index) - 1] = data;
  },

  handleSubjectChange: function(data) {
    this.subjectline = data;
  },

  componentDidMount: function() {
    this.subjectline = this.props.subject;
  },

  render: function() {

    for(var i in this.props.articles) {
      var index = parseInt(i) + 1;
      this.articleComponents.push(
        <Article
          index={index}
          key={index}
          title={this.props.articles[i].title}
          description={this.props.articles[i].description}
          link={this.props.articles[i].link}
          author={this.props.articles[i].author}
          onArticleChange={this.handleArticleChange}
        />);
      this.articleData.push({
        title: this.props.articles[i].title,
        description: this.props.articles[i].description,
        link: this.props.articles[i].link,
        author: this.props.articles[i].author
      });
    }

    return (
      <div id="main-layout">
        <div className="container">
          <Dates />
          <Buttons onSaveClick={this.handleOnSaveClick} onTestClick={this.handleOnTestClick} />
          <Subject onSubjectChange={this.handleSubjectChange} value={this.props.subject} />
          {this.articleComponents}
        </div>
      </div>
    )

  }

});

module.exports = Content;
