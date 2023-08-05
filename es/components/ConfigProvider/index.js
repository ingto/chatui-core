import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useContext } from 'react';
import defaultLocales from './locales';
var DEFAULT_LOCALE = 'en-US';
export var ConfigContext = /*#__PURE__*/React.createContext({});
export var ConfigProvider = function ConfigProvider(_ref) {
  var _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? DEFAULT_LOCALE : _ref$locale,
    locales = _ref.locales,
    elderMode = _ref.elderMode,
    children = _ref.children;
  return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: {
      locale: locale,
      locales: locales,
      elderMode: elderMode
    }
  }, children);
};
export var useConfig = function useConfig() {
  return useContext(ConfigContext);
};
export var useLocale = function useLocale(componentName, fallback) {
  var _useContext = useContext(ConfigContext),
    locale = _useContext.locale,
    locales = _useContext.locales;
  var defaultStrings = locale && defaultLocales[locale] || defaultLocales[DEFAULT_LOCALE];
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