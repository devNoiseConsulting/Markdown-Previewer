var React = require('react');
var marked = require('marked');

var MarkdownOutput = React.createClass({
    render: function() {
        var markdown = marked(this.props.name);
        return (
            <div dangerouslySetInnerHTML={{
                __html: markdown
            }}></div>
        );
    }
});

module.exports = MarkdownOutput;
