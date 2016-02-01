'use strict'

var React = require('react');
var $ = require('jquery');
var LoginForm = require('./LoginForm.react');
var Header = require('./Header.react');
var Content = require('./Content.react');
var Footer = require('./Footer.react');

var Application = React.createClass({

  credentials: {username: null, password: null},
  user: {},

  getInitialState: function() {
    return {loggedIn: false}
  },

  handleLogin: function(username, password) {

    this.credentials.username = username;
    this.credentials.password = password;
    this.handleGetRequest('http://127.0.0.1:8084/session', this.handleLoginResponse);

  },

  handleLoginResponse: function (data) {
    if(data.statusText == "error") {
      console.log("ERROR");
    } else {
      console.log(JSON.parse(data.responseText).payload);
      this.setState({loggedIn: true, page: "home"});
    }
  },

  encodeBasicToken: function() {
    return btoa(this.credentials.username + ":" + this.credentials.password);
  },

  handleHomeClick: function() {
    console.log("Home");
    this.setState({page: "home"});
  },

  handleSettingsClick: function() {
    console.log("Settings");
    this.setState({page: "settings"});
  },

  handleProfileClick: function() {
    console.log("Profile");
    this.setState({page: "profile"});
  },

  handleLogoutClick: function() {
    console.log("Logout");
    this.credentials = {};
    this.setState({loggedIn: false});
  },

  handleGetRequest: function(uri, complete) {
    var authToken = this.encodeBasicToken();
    $.ajax({
      url: uri,
      type: 'GET',
      dataType: 'json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization','Basic ' + authToken);
      }
    }).complete(complete);
  },

  render: function () {
    return (
      <div>
        <Header handleHomeClick={this.handleHomeClick} handleSettingsClick={this.handleSettingsClick} handleProfileClick={this.handleProfileClick} handleLogoutClick={this.handleLogoutClick} />
        <Content page={this.state.page} />
        <Footer />
      </div>
    )
  }

});

module.exports = Application;
