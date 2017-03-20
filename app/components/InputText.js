var React = require('react');

var InputText = React.createClass({
  handleChange: function(e) {
    var text = e.target.value;
    this.props.onChange(text);
  },

  render: function() {
    return (
      <textarea
        className="form-control"
        rows="15"
        onChange={this.handleChange} />
    );
  }
});

module.exports = InputText;
