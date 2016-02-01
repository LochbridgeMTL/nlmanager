'use strict'

var React = require('react');
var DateFormat = require('dateformat');

var Dates = React.createClass({

  dayMappings: {0: 3, 1: 2, 2: 1, 3: 7, 4: 6, 5: 5, 6: 4},

  getCurrentNewsletterDate: function() {
    var now = new Date();
    return DateFormat(this.addDays(now, this.dayMappings[now.getDay()]), "mm / dd / yyyy");
  },

  addDays: function(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  render: function() {
    var currentDate = "Current newsletter : " + this.getCurrentNewsletterDate();
    return(
      <div className="row">
        <div className="twelve columns">
          <span>{currentDate}</span>
        </div>
      </div>
    )
  }

});

module.exports = Dates;
