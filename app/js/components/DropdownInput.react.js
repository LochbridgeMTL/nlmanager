'use strict'

var React = require('react');
var $ = require('jquery');

var DropdownInput = React.createClass({

  authorList: [],
  authors: [],

  getInitialState: function() {
    return {loaded: false}
  },

  componentDidMount: function() {

    var _this = this;
    $.ajax({
      url: 'collaborators.json',
      type: 'GET',
      dataType: 'json',
    }).complete(function(data){
      _this.authors = [];
      _this.authors.push(<option key={'none-' + _this.props.id}>Select an author</option>);
      data.responseJSON.sort(_this.compare);
      _this.authorList = data.responseJSON;
      for(var i in data.responseJSON) {
        var fullname = data.responseJSON[i].lastname + ", " + data.responseJSON[i].firstname;
        _this.authors.push(<option value={i} key={_this.props.id + '-' + i}>{fullname}</option>);
      }
      _this.setState({loaded: true});
    });

  },

  compare: function(a, b) {
    if (a.lastname < b.lastname) {
      return -1;
    } else if (a.lastname > b.lastname){
      return 1;
    } else {
      return 0;
    }
  },

  handleOptionSelect: function() {
    var index = $('#' + this.props.id).val();
    console.log("Option in " + this.props.id + " selected ... " + this.authorList[index].img);
    this.setState({currentImage: this.authorList[index].img});
  },

  render: function() {
    if(this.state.loaded) {
      console.log(this.props.selected);
      var img = 'http://cdn.theladders.net/static/images/emails/wednesday_newsletter/' + this.state.currentImage;
      var display = (this.state.currentImage == null) ? 'none' : 'inline';
      var style = {"marginLeft":"18px", "borderRadius":"50%", "display":display};
      return (
        <div>
          <label htmlFor={this.props.id}>Author</label>
          <select id={this.props.id} onChange={this.handleOptionSelect}>
            {this.authors}
          </select>
          <img src={img} width="90" height="90" style={style} />
        </div>
      )
    } else {
      return null;
    }
  }

});

module.exports = DropdownInput;
