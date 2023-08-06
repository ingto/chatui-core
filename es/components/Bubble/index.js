import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "content", "children"];
//import React from 'react';

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

import React from 'react';

// @ts-ignore

export var Bubble = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    content = props.content,
    children = props.children,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "Bubble ".concat(type),
    "data-type": type,
    ref: ref
  }, other), content && /*#__PURE__*/React.createElement("p", null, content), children);
});