'use strict'

var React = require('react');
var TextInput = require('./TextInput.react');
var DropdownInput = require('./DropdownInput.react');

var Article = React.createClass({

  getInitialState: function() {
    this.article = {};
    return {};
  },

  handleTitleChange: function(data) {
    this.article.title = data.value;
    this.props.onArticleChange(this.article);
  },

  handleDescChange: function(data) {
    this.article.description = data.value;
    this.props.onArticleChange(this.article);
  },

  handleLinkChange: function(data) {
    this.article.link = data.value;
    this.props.onArticleChange(this.article);
  },

  handleAuthorChange: function(data) {
    this.article.author = data.value;
    this.props.onArticleChange(this.article);
  },

  componentDidMount: function() {
    this.article.index = this.props.index;
    this.article.title = this.props.title;
    this.article.description = this.props.description;
    this.article.author = this.props.author;
    this.article.link = this.props.link;
  },

  render: function() {
    return (
      <div className="articleContainer">
        <h5>Article {this.props.index}</h5>
        <DropdownInput onInputChange={this.handleAuthorChange} id={'author-' + this.props.index} selected={this.props.author} />
        <TextInput onInputChange={this.handleTitleChange} label="Title" id={'title-' + this.props.index} value={this.props.title} />
        <TextInput onInputChange={this.handleDescChange} label="Description" id={'desc-'  + this.props.index} value={this.props.description} />
        <TextInput onInputChange={this.handleLinkChange} label="Link" id={'link-' + this.props.index} value={this.props.link} />
      </div>
    )
  }

});

module.exports = Article;
