import React from 'react';
import { Button } from '../Button';
import { useLocale } from '../ConfigProvider';
export var SendButton = function SendButton(_ref) {
  var disabled = _ref.disabled,
    onClick = _ref.onClick;
  var _useLocale = useLocale('Composer'),
    trans = _useLocale.trans;
  return /*#__PURE__*/React.createElement("div", {
    className: "Composer-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "Composer-sendBtn",
    disabled: disabled,
    onMouseDown: onClick,
    color: "primary"
  }, trans('send')));
};