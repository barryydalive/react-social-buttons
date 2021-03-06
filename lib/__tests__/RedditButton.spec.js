"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _main = require("../main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('FacebookLikeButton renders the correct elements and props', function () {
  var redditProps = {
    url: 'https://mysite.com',
    button: _react.default.createElement("span", null, 'Share via Reddit')
  };
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_main.RedditButton, redditProps));
  expect(wrapper.instance().props.url).toEqual('https://mysite.com');
  expect(wrapper.find('a').length).toEqual(1);
  expect(wrapper.find('a').props().href).toContain('reddit.com/submit');
  expect(wrapper.find('span').text()).toEqual('Share via Reddit'); // console.log(wrapper.debug())
});