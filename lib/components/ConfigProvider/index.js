"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocale = exports.useConfig = exports.ConfigProvider = exports.ConfigContext = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _locales = _interopRequireDefault(require("./locales"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DEFAULT_LOCALE = 'en-US';
var ConfigContext = /*#__PURE__*/_react.default.createContext({});
exports.ConfigContext = ConfigContext;
var ConfigProvider = function ConfigProvider(_ref) {
  var _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? DEFAULT_LOCALE : _ref$locale,
    locales = _ref.locales,
    elderMode = _ref.elderMode,
    children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(ConfigContext.Provider, {
    value: {
      locale: locale,
      locales: locales,
      elderMode: elderMode
    }
  }, children);
};
exports.ConfigProvider = ConfigProvider;
var useConfig = function useConfig() {
  return (0, _react.useContext)(ConfigContext);
};
exports.useConfig = useConfig;
var useLocale = function useLocale(componentName, fallback) {
  var _useContext = (0, _react.useContext)(ConfigContext),
    locale = _useContext.locale,
    locales = _useContext.locales;
  var defaultStrings = locale && _locales.default[locale] || _locales.default[DEFAULT_LOCALE];
  var strings = _objectSpread(_objectSpread({}, defaultStrings), locales);
  if (!locale && !locales && fallback) {
    strings = fallback;
  } else if (componentName) {
    strings = strings[componentName] || {};
  }
  return {
    locale: locale,
    trans: function trans(key) {
      return key ? strings[key] : strings;
    }
  };
};
exports.useLocale = useLocale;