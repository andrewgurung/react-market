var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
*/

var StorePicker = React.createClass({
  render: function() {
    // Normal Comment
    return (
      <form className="store-selector">
        {/* JSX Comment */}
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeID" required/>
        <input type="Submit" />
      </form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
