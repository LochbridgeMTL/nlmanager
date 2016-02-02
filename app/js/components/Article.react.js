'use strict'

var React = require('react');
var TextInput = require('./TextInput.react');
var DropdownInput = require('./DropdownInput.react');

var Article = React.createClass({

  render: function() {
    var ddownId = "author-" + this.props.index;
    return (
      <div className="articleContainer">
        <h5>Article {this.props.index}</h5>
        <DropdownInput id={ddownId} />
        <TextInput label="Title" id="title" />
        <TextInput label="Description" id="desc" />
        <TextInput label="Link" id="link" />
      </div>
    )
  }

});

module.exports = Article;
