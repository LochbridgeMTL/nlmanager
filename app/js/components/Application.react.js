'use strict'

var React = require('react');
var $ = require('jquery');
var Header = require('./Header.react');
var Content = require('./Content.react');
var Footer = require('./Footer.react');
var IdInput = require('./IdInput.react');

var Application = React.createClass({

  getInitialState: function() {
    this.newsletter = {};
    return({loaded: false, modal: false})
  },

  componentDidMount: function() {
    var _this = this;
    $.ajax({
      url: 'http://127.0.0.1:8080/getwnl',
      type: 'GET',
      dataType: 'json',
    }).complete(function(data){
      _this.newsletter.subject = data.responseJSON.subject;
      _this.newsletter.articles = [];
      var rawArticles = data.responseJSON.content.split('\n');
      for(var n in rawArticles) {
        if(rawArticles[n] != "") {
          var fields = rawArticles[n].split("|");
          _this.newsletter.articles.push({
            title: fields[0],
            author: fields[1],
            description: fields[2],
            link: fields[3]
          });
        }
      }
      _this.setState({loaded: true});
    });
  },

  handleOnTestClick: function() {
    console.log("On test click in application ... ");
    this.setState({modal: true});
  },

  handleCancelClick: function() {
    this.setState({modal: false});
  },

  handleTestClick: function(data) {
    console.log("Test id sent ... " + data);
    this.setState({modal: false});
  },

  render: function () {
    if(!this.state.loaded) {
      return (<h3>Loading ... </h3>)
    } else {
      if(this.state.modal) {
        return (<IdInput onCancel={this.handleCancelClick} onTest={this.handleTestClick} />)
      } else {
        return (
          <div>
            <Header />
            <Content onTestClick={this.handleOnTestClick} subject={this.newsletter.subject} articles={this.newsletter.articles} />
            <Footer />
          </div>
        )
      }
    }
  }

});

module.exports = Application;
