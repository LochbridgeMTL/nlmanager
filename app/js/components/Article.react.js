'use strict'

var React = require('react');
var TextInput = require('./TextInput.react');
var DropdownInput = require('./DropdownInput.react');

var Article = React.createClass({

  render: function() {
    return (
      <div className="articleContainer">
        <h5>Article {this.props.index}</h5>
        <DropdownInput id={'author-' + this.props.index} selected={this.props.author} />
        <TextInput label="Title" id={'title-' + this.props.index} value={this.props.title} />
        <TextInput label="Description" id={'desc-'  + this.props.index} value={this.props.description} />
        <TextInput label="Link" id={'link-' + this.props.index} value={this.props.link} />
      </div>
    )
  }

});

module.exports = Article;
