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
    this.setState({currentImage: this.authorList[index].img});
    this.props.onInputChange({id: this.props.id, value: this.authorList[index].firstname + " " + this.authorList[index].lastname});
  },

  getDefaultValue: function() {

    for(var i in this.authors) {
      var toCompare = this.authors[i].props.children.split(", ")[1] + " " + this.authors[i].props.children.split(", ")[0];
      if(toCompare == this.props.selected) {
        return (this.authors[i].props.value);
      }
    }
    console.error("No match for " + this.props.selected);
    return 0;

  },

  render: function() {
    if(this.state.loaded) {

      var defaultValue = this.getDefaultValue();
      var img = "";
      if(this.state.currentImage == undefined) {
        img = 'http://cdn.theladders.net/static/images/emails/wednesday_newsletter/' + this.authorList[defaultValue].img;
      } else {
        img = 'http://cdn.theladders.net/static/images/emails/wednesday_newsletter/' + this.state.currentImage;
      }

      return (
        <div>
          <label htmlFor={this.props.id}>Author</label>
          <select id={this.props.id} onChange={this.handleOptionSelect} defaultValue={defaultValue}>
            {this.authors}
          </select>
          <img src={img} width="90" height="90" style={{"marginLeft":"18px", "borderRadius":"50%"}} />
        </div>
      )
    } else {
      return null;
    }
  }

});

module.exports = DropdownInput;
