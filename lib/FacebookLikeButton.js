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

var FacebookLikeButton =
/*#__PURE__*/
function (_Component) {
  _inherits(FacebookLikeButton, _Component);

  _createClass(FacebookLikeButton, null, [{
    key: "propTypes",
    get: function get() {
      return {
        url: _propTypes.default.string
      };
    }
  }]);

  function FacebookLikeButton(props) {
    var _this;

    _classCallCheck(this, FacebookLikeButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FacebookLikeButton).call(this, props));
    _this.state = {
      initalized: false
    };
    return _this;
  }

  _createClass(FacebookLikeButton, [{
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

      var fbbutton = _reactDom.default.findDOMNode(this.refs.fbbutton);

      var fbscript = document.createElement('script');
      fbscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
      fbscript.id = 'facebook-jssdk';
      fbscript.onload = this.renderWidget.bind(this);
      fbbutton.parentNode.appendChild(fbscript);
      this.setState({
        initalized: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var elem = document.getElementById('facebook-jssdk');

      if (elem !== undefined) {
        elem.parentNode.removeChild(elem);
      }
    }
  }, {
    key: "renderWidget",
    value: function renderWidget() {
      /*
         need to detect if it has already been parsed.
         if coming from react router it may need reparsing.
      */
      setTimeout(function () {
        var elem = document.getElementById('fbbutton');

        if (elem.getAttribute('fb-xfbml-state') === null) {
          FB.XFBML.parse();
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "fbbutton",
        ref: "fbbutton",
        className: "fb-like",
        "data-href": this.props.url,
        "data-layout": "standard",
        "data-action": "like",
        "data-show-faces": "true",
        "data-share": "false"
      });
    }
  }]);

  return FacebookLikeButton;
}(_react.Component);

exports.default = FacebookLikeButton;