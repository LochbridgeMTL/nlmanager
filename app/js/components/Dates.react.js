'use strict'

var React = require('react');
var DateFormat = require('dateformat');

var Dates = React.createClass({

  dayMappings: {0: 3, 1: 2, 2: 1, 3: 7, 4: 6, 5: 5, 6: 4},

  getInitialState: function() {
    return {
      currentDate: "Current newsletter : " + DateFormat(this.getCurrentNewsletterDate(), "mm / dd / yyyy"),
      currentDeadline: this.getFormattedDeadline()
    }
  },

  pad: function(n) {
    return (n < 10) ? ("0" + n) : ("" + n);
  },

  getCurrentNewsletterDate: function() {
    var now = new Date();
    var newsletterDate = this.addDays(now, this.dayMappings[now.getDay()]);
    newsletterDate.setHours(0);
    newsletterDate.setMinutes(0);
    newsletterDate.setSeconds(0);
    newsletterDate.setMilliseconds(0);
    return newsletterDate;
  },

  getDeadline: function() {
    var current = this.getCurrentNewsletterDate().getTime();
    var now = new Date().getTime();
    var milliseconds = current - now;
    var remaining = {
      milliseconds: milliseconds,
      seconds: parseInt((milliseconds / 1000) % 60),
      minutes: parseInt((milliseconds / (1000*60)) % 60),
      hours: parseInt((milliseconds / (1000*60*60)) % 24)
    };
    return remaining;
  },

  getFormattedDeadline: function() {
    var remaining = this.getDeadline();
    remaining.seconds = this.pad(remaining.seconds);
    remaining.minutes = this.pad(remaining.minutes);
    remaining.hours = this.pad(remaining.hours);
    return "Remaining : " + remaining.hours + " h " + remaining.minutes + " min " + remaining.seconds + " sec"
  },

  addDays: function(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  componentDidMount: function() {
    var _this = this;
    setInterval(function(){
      _this.setState(
        {currentDeadline: _this.getFormattedDeadline()}
      )
    }, 1000);
  },

  render: function() {
    return(
      <div className="row">
        <div className="twelve columns">
          <h5 style={{"marginBottom":"0px", "marginTop": "12px"}}>{this.state.currentDate}</h5>
          <span>{this.state.currentDeadline}</span>
        </div>
      </div>
    )
  }

});

module.exports = Dates;
