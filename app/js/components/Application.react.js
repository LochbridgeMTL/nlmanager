'use strict'

var React = require('react');
var $ = require('jquery');
var Header = require('./Header.react');
var Content = require('./Content.react');
var Footer = require('./Footer.react');

var Application = React.createClass({

  newsletter: {},

  getInitialState: function() {
    return({loaded: false})
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

  render: function () {
    if(!this.state.loaded) {
      return (<h3>Loading ... </h3>)
    } else {
      return (
        <div>
          <Header />
          <Content subject={this.newsletter.subject} articles={this.newsletter.articles} />
          <Footer />
        </div>
      )
    }
  }

});

module.exports = Application;
