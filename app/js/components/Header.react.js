'use strict'

var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="twelve columns" style={{"fontSize": "2em"}}>
                <a href="#" onClick={this.props.handleHomeClick} className="darkIcon"><i className="fa fa-paperclip"></i></a>
                <div className="u-pull-right">
                  <a href="#" onClick={this.props.handleSettingsClick} className="darkIcon"><i className="fa fa-cog"></i></a>&nbsp;
                  <a href="#" onClick={this.props.handleProfileClick} className="darkIcon"><i className="fa fa-user"></i></a>&nbsp;
                  <a href="#" onClick={this.props.handleLogoutClick} className="darkIcon"><i className="fa fa-sign-out"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contextual">
          <div className="container">
            <div className="row">
              <div className="twelve columns" style={{"fontSize": "1.1em"}}>
                <a href="#" className="lightLink"><i className="fa fa-cogs"></i>&nbsp;Customize</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Header;
