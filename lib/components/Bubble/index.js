"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bubble = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["type", "content", "children"]; //import React from 'react';
// export interface BubbleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
//   type?: string;
//   content?: React.ReactNode;
// }
// export const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>((props, ref) => {
//   const { type = 'text', content, children, ...other } = props;
//   return (
//     <div className={`Bubble ${type}`} data-type={type} ref={ref} {...other}>
//       {content && <p>{content}</p>}
//       {children}
//     </div>
//   );
// });
// @ts-ignore

var Bubble = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    content = props.content,
    children = props.children,
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "Bubble ".concat(type),
    "data-type": type,
    ref: ref
  }, other), content && /*#__PURE__*/_react.default.createElement("p", null, content), children);
});
exports.Bubble = Bubble;