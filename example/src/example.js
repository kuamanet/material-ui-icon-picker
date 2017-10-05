var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUiIconPicker = require('react-material-ui-icon-picker');

var App = React.createClass({
	
	state: {pickedIcon: null},
	showPickedIcon(icon) {
		console.info('you picked', icon);
	},

	render () {
		return (
			<div>
				<pre>{`<MaterialUiIconPicker onPick={this.showPickedIcon} />`}</pre>

				<MaterialUiIconPicker onPick={this.showPickedIcon}/>
				<pre>{`<MaterialUiIconPicker onPick={this.showPickedIcon} label="With custom label" pickLabel="Pick IT!!!!" />`}</pre>

				<MaterialUiIconPicker onPick={this.showPickedIcon} label="With custom label" pickLabel="Pick IT!!!!"/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
