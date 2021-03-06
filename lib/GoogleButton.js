"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GoogleButton =
/*#__PURE__*/
function (_Component) {
  _inherits(GoogleButton, _Component);

  _createClass(GoogleButton, null, [{
    key: "propTypes",
    get: function get() {
      return {
        url: _propTypes.default.string
      };
    }
  }]);

  function GoogleButton(props) {
    var _this;

    _classCallCheck(this, GoogleButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleButton).call(this, props));
    _this.state = {
      initalized: false
    };
    return _this;
  }

  _createClass(GoogleButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      if (this.state.initalized) {
        return;
      }

      var gpbutton = _reactDom.default.findDOMNode(this.refs.gpbutton);

      var gpscript = document.createElement('script');
      gpscript.src = '//apis.google.com/js/platform.js';
      gpscript.id = 'gapi';
      gpscript.onload = this.renderWidget.bind(this);
      gpbutton.parentNode.appendChild(gpscript);
      this.setState({
        initalized: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var elem = document.getElementById('gapi');

      if (elem !== undefined) {
        elem.parentNode.removeChild(elem);
      }
    }
  }, {
    key: "renderWidget",
    value: function renderWidget() {
      gapi.plusone.render('gpbutton');
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        ref: "gpbutton",
        id: "gpbutton",
        className: "g-plusone",
        "data-annotation": "bubble",
        "data-align": "left",
        "data-width": "300",
        "data-size": "standard",
        "data-recommendations": "true",
        "data-href": this.props.url
      });
    }
  }]);

  return GoogleButton;
}(_react.Component);

exports.default = GoogleButton;