'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUiStylesMuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _materialUiStylesMuiThemeProvider2 = _interopRequireDefault(_materialUiStylesMuiThemeProvider);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsStorage = require('./IconsStorage');

var _IconsStorage2 = _interopRequireDefault(_IconsStorage);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var MaterialUiIconPicker = (function (_React$Component) {
	_inherits(MaterialUiIconPicker, _React$Component);

	_createClass(MaterialUiIconPicker, [{
		key: 'getStyles',
		value: function getStyles() {
			var backgroundBox = {
				backgroundColor: 'rgb(224, 224, 224)',
				borderRadius: 2,
				height: 120,
				opacity: 0,
				position: 'absolute',
				top: 0,
				transitionProperty: 'opacity',
				transitionDuration: '200ms',
				transitionTimingFunction: 'ease-out',
				width: 112,
				marginLeft: 'calc(112px / 2)',
				transform: 'translateX(-50%)',
				transitionDelay: 'initial'
			};

			var selectedBackgroundBox = _extends({}, backgroundBox);
			selectedBackgroundBox.opacity = 1;

			return {
				iconsGrid: {
					display: 'flex',
					flexWrap: 'wrap'
				},
				iconsItem: {
					textAlign: 'center',
					width: '25%',
					flexGrow: 1,
					marginBottom: 10,
					position: 'relative',
					height: 120,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					cursor: 'pointer'
				},
				iconsItemCaption: {
					textTransform: 'uppercase',
					fontSize: 10,
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					position: 'relative',
					zIndex: 2,
					maxWidth: 100
				},
				iconsItemIcon: {
					color: 'rgb(117, 117, 117)',
					fontSize: 48,
					width: 48,
					height: 48,
					marginBottom: 10
				},
				backgroundBox: backgroundBox,
				selectedBackgroundBox: selectedBackgroundBox,
				header: {
					wrapper: {
						display: 'flex',
						flexDirection: 'column',
						paddingBottom: 0,
						paddingLeft: 0,
						paddingRight: 0
					},
					input: {
						flex: 1,
						border: 'none',
						padding: 15,
						fontSize: 17,
						margin: '0 40',
						':focus': {
							outline: 'none'
						}
					},
					icons: {},
					title: {
						margin: 0,
						paddingLeft: 24,
						paddingTop: 0,
						paddingRight: 24,
						textTransform: 'uppercase'
					},
					search: {
						boxShadow: 'rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px',
						display: 'flex',
						marginTop: 10,
						position: 'relative',
						zIndex: 4,
						background: '#fff',
						alignItems: 'center',
						paddingLeft: 10,
						paddingRight: 10
					},
					searchIcon: {
						color: '#ddd'
					},
					closeIcon: {
						cursor: 'pointer',
						color: '#555'
					}

				}
			};
		}
	}]);

	function MaterialUiIconPicker(props) {
		_classCallCheck(this, MaterialUiIconPicker);

		_get(Object.getPrototypeOf(MaterialUiIconPicker.prototype), 'constructor', this).call(this, props);

		this.state = {
			pickerDialogOpen: false,
			_icons: [],
			icons: [],
			icon: null
		};

		this.iconsStorage = new _IconsStorage2['default']();
	}

	_createClass(MaterialUiIconPicker, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (!document.querySelector('[href="https://fonts.googleapis.com/icon?family=Material+Icons"]')) {
				var link = document.createElement('link');
				link.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
				link.setAttribute('rel', 'stylesheet');
				document.querySelector('head').appendChild(link);
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			this.iconsPromise = this.iconsStorage.getIcons();
			this.iconsPromise.then(function (icons) {
				return _this.showIcons(icons);
			});
		}
	}, {
		key: 'showIcons',
		value: function showIcons(icons) {
			this.setState({ pickerDialogOpen: this.state.pickerDialogOpen, _icons: icons, icons: icons });
		}
	}, {
		key: 'handleOpen',
		value: function handleOpen() {
			this.setState({
				pickerDialogOpen: true,
				_icons: this.state._icons,
				icons: this.state.icons,
				selected: this.state.selected,
				didSearch: this.state.didSearch
			});
		}
	}, {
		key: 'handleClose',
		value: function handleClose() {
			this.setState({
				pickerDialogOpen: false,
				_icons: this.state._icons,
				icons: this.state._icons,
				selected: this.state.selected,
				didSearch: false
			});
		}
	}, {
		key: 'pickAndClose',
		value: function pickAndClose() {
			this.props.onPick(this.state.selected);
			this.handleClose();
		}
	}, {
		key: 'select',
		value: function select(icon) {
			this.setState({
				pickerDialogOpen: this.state.pickerDialogOpen,
				icons: this.state.icons,
				_icons: this.state._icons,
				selected: icon,
				didSearch: this.state.didSearch
			});
		}
	}, {
		key: 'filterList',
		value: function filterList(event) {

			if (event.target.value.toLowerCase().length === 0) {
				this.clearSearch();
			} else {
				var updatedList = this.state._icons;
				updatedList = updatedList.filter(function (item) {
					var searches = item.name.split('_').map(function (namePiece) {
						return namePiece.search(event.target.value.toLowerCase()) !== -1;
					});
					return searches.indexOf(true) > -1;
				});

				this.setState({
					pickerDialogOpen: this.state.pickerDialogOpen,
					_icons: this.state._icons,
					icons: updatedList,
					selected: this.state.selected,
					didSearch: true
				});
			}
		}
	}, {
		key: 'clearSearch',
		value: function clearSearch() {
			this.refs.searchInput.value = '';

			this.setState({
				pickerDialogOpen: this.state.pickerDialogOpen,
				_icons: this.state._icons,
				icons: this.state._icons,
				selected: this.state.selected,
				didSearch: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var styles = this.getStyles();

			var actions = [_react2['default'].createElement(_materialUi.FlatButton, {
				label: this.props.cancelLabel,
				primary: true,
				onClick: this.handleClose.bind(this)
			}), _react2['default'].createElement(_materialUi.RaisedButton, {
				label: this.props.pickLabel,
				primary: true,
				disabled: !this.state.selected,
				onClick: this.pickAndClose.bind(this),
				icon: this.state.selected ? _react2['default'].createElement(
					_materialUi.FontIcon,
					{ className: 'material-icons' },
					this.state.selected.name
				) : null
			})];

			var icons = this.state.icons.map(function (icon, index) {
				return _react2['default'].createElement(
					'div',
					{ key: index, style: styles.iconsItem, onClick: function () {
							return _this2.select(icon);
						} },
					_react2['default'].createElement('div', {
						style: _this2.state.selected && _this2.state.selected.name === icon.name ? styles.selectedBackgroundBox : styles.backgroundBox }),
					_react2['default'].createElement(
						_materialUi.FontIcon,
						{ style: styles.iconsItemIcon, className: 'material-icons' },
						icon.name
					),
					_react2['default'].createElement(
						'div',
						{ style: styles.iconsItemCaption },
						icon.name.split('_').join(' ')
					)
				);
			});

			return _react2['default'].createElement(
				_materialUiStylesMuiThemeProvider2['default'],
				null,
				_react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(_materialUi.RaisedButton, { onClick: this.handleOpen.bind(this), label: this.props.label, primary: true }),
					_react2['default'].createElement(
						_materialUi.Dialog,
						{
							autoScrollBodyContent: true,
							title: _react2['default'].createElement(
								'div',
								{ style: styles.header.wrapper },
								_react2['default'].createElement(
									'h3',
									{ style: styles.header.title },
									this.props.modalTitle
								),
								_react2['default'].createElement(
									'div',
									{ style: styles.header.search },
									_react2['default'].createElement(
										_materialUi.FontIcon,
										{ className: 'material-icons', style: styles.header.searchIcon },
										'search'
									),
									_react2['default'].createElement('input', { ref: 'searchInput', type: 'text', style: styles.header.input,
										placeholder: 'Search',
										onChange: this.filterList.bind(this) }),
									this.state.didSearch ? _react2['default'].createElement(
										_materialUi.FontIcon,
										{ style: styles.header.closeIcon, onClick: this.clearSearch.bind(this),
											className: 'material-icons' },
										'close'
									) : null
								)
							),
							actions: actions,
							modal: false,
							open: this.state.pickerDialogOpen,
							onRequestClose: this.handleClose.bind(this)
						},
						this.state.icons.length > 0 ? _react2['default'].createElement(
							'div',
							{ style: styles.iconsGrid },
							icons
						) : _react2['default'].createElement(_materialUi.LinearProgress, { mode: 'indeterminate' })
					)
				)
			);
		}
	}]);

	return MaterialUiIconPicker;
})(_react2['default'].Component);

MaterialUiIconPicker.propTypes = {
	cancelLabel: _propTypes2['default'].string,
	label: _propTypes2['default'].string,
	modalTitle: _propTypes2['default'].string,
	onPick: _propTypes2['default'].func.isRequired,
	pickLabel: _propTypes2['default'].string
};

MaterialUiIconPicker.defaultProps = {
	cancelLabel: 'Cancel',
	label: 'Pick icon',
	modalTitle: 'Material icon picker',
	pickLabel: 'Pick'
};

exports['default'] = (0, _radium2['default'])(MaterialUiIconPicker);
module.exports = exports['default'];