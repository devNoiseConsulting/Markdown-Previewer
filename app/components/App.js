var React = require('react');
var InputText = require('./InputText');
var MarkdownOutput = require('./MarkdownOutput');

var App = React.createClass({
    getInitialState: function() {
        return {text: '# Hello World'};
    },

    changeText: function(newtext) {
        this.setState({text: newtext});
    },

    render: function() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-sm-6">
                        <InputText onChange={this.changeText} text={this.state.text}/>
                    </div>
                    <div className="col-sm-6">
                        <MarkdownOutput name={this.state.text}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;
