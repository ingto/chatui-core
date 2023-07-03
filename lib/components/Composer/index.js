"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Composer = exports.CLASS_NAME_FOCUSING = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Recorder = require("../Recorder");

var _Toolbar = require("../Toolbar");

var _AccessoryWrap = require("./AccessoryWrap");

var _Popover = require("../Popover");

var _ToolbarItem = require("./ToolbarItem");

var _ComposerInput = require("./ComposerInput");

var _SendButton = require("./SendButton");

var _Action = require("./Action");

var _toggleClass = _interopRequireDefault(require("../../utils/toggleClass"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var CLASS_NAME_FOCUSING = 'S--focusing';
exports.CLASS_NAME_FOCUSING = CLASS_NAME_FOCUSING;

var Composer = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$text = props.text,
      initialText = _props$text === void 0 ? '' : _props$text,
      _props$inputType = props.inputType,
      initialInputType = _props$inputType === void 0 ? 'text' : _props$inputType,
      wideBreakpoint = props.wideBreakpoint,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '请输入...' : _props$placeholder,
      _props$recorder = props.recorder,
      recorder = _props$recorder === void 0 ? {} : _props$recorder,
      onInputTypeChange = props.onInputTypeChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onSend = props.onSend,
      onImageSend = props.onImageSend,
      onAccessoryToggle = props.onAccessoryToggle,
      _props$toolbar = props.toolbar,
      toolbar = _props$toolbar === void 0 ? [] : _props$toolbar,
      onToolbarClick = props.onToolbarClick,
      rightAction = props.rightAction,
      inputOptions = props.inputOptions;

  var _useState = (0, _react.useState)(initialText),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = (0, _react.useState)(initialInputType || 'text'),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      inputType = _useState4[0],
      setInputType = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isAccessoryOpen = _useState6[0],
      setAccessoryOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      accessoryContent = _useState8[0],
      setAccessoryContent = _useState8[1];

  var inputRef = (0, _react.useRef)(null);
  var focused = (0, _react.useRef)(false);
  var blurTimer = (0, _react.useRef)();
  var popoverTarget = (0, _react.useRef)();
  var isMountRef = (0, _react.useRef)(false);

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      isWide = _useState10[0],
      setWide = _useState10[1];

  (0, _react.useEffect)(function () {
    var mq = wideBreakpoint && window.matchMedia ? window.matchMedia("(min-width: ".concat(wideBreakpoint, ")")) : false;

    function handleMq(e) {
      setWide(e.matches);
    }

    setWide(mq && mq.matches);

    if (mq) {
      mq.addListener(handleMq);
    }

    return function () {
      if (mq) {
        mq.removeListener(handleMq);
      }
    };
  }, [wideBreakpoint]);
  (0, _react.useEffect)(function () {
    (0, _toggleClass.default)('S--wide', isWide);

    if (!isWide) {
      setAccessoryContent('');
    }
  }, [isWide]);
  (0, _react.useEffect)(function () {
    if (isMountRef.current && onAccessoryToggle) {
      onAccessoryToggle(isAccessoryOpen);
    }
  }, [isAccessoryOpen, onAccessoryToggle]);
  (0, _react.useEffect)(function () {
    isMountRef.current = true;
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      setText: setText
    };
  });
  var handleInputTypeChange = (0, _react.useCallback)(function () {
    var isVoice = inputType === 'voice';
    var nextType = isVoice ? 'text' : 'voice';
    setInputType(nextType);

    if (isVoice) {
      var input = inputRef.current;
      input.focus(); // eslint-disable-next-line no-multi-assign

      input.selectionStart = input.selectionEnd = input.value.length;
    }

    if (onInputTypeChange) {
      onInputTypeChange(nextType);
    }
  }, [inputType, onInputTypeChange]);
  var handleInputFocus = (0, _react.useCallback)(function (e) {
    clearTimeout(blurTimer.current);
    (0, _toggleClass.default)(CLASS_NAME_FOCUSING, true);
    focused.current = true;

    if (onFocus) {
      onFocus(e);
    }
  }, [onFocus]);
  var handleInputBlur = (0, _react.useCallback)(function (e) {
    blurTimer.current = setTimeout(function () {
      (0, _toggleClass.default)(CLASS_NAME_FOCUSING, false);
      focused.current = false;
    }, 0);

    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);
  var send = (0, _react.useCallback)(function () {
    onSend('text', text);
    setText('');

    if (focused.current) {
      inputRef.current.focus();
    }
  }, [onSend, text]);
  var handleInputKeyDown = (0, _react.useCallback)(function (e) {
    if (!e.shiftKey && e.keyCode === 13) {
      send();
      e.preventDefault();
    }
  }, [send]);
  var handleTextChange = (0, _react.useCallback)(function (value, e) {
    setText(value);

    if (onChange) {
      onChange(value, e);
    }
  }, [onChange]);
  var handleSendBtnClick = (0, _react.useCallback)(function (e) {
    send();
    e.preventDefault();
  }, [send]);
  var handleAccessoryToggle = (0, _react.useCallback)(function () {
    setAccessoryOpen(!isAccessoryOpen);
  }, [isAccessoryOpen]);
  var handleAccessoryBlur = (0, _react.useCallback)(function () {
    setTimeout(function () {
      setAccessoryOpen(false);
      setAccessoryContent('');
    });
  }, []);
  var handleToolbarClick = (0, _react.useCallback)(function (item, e) {
    if (onToolbarClick) {
      onToolbarClick(item, e);
    }

    if (item.render) {
      popoverTarget.current = e.currentTarget;
      setAccessoryContent(item.render);
    }
  }, [onToolbarClick]);
  var handlePopoverClose = (0, _react.useCallback)(function () {
    setAccessoryContent('');
  }, []);
  var isInputText = inputType === 'text';
  var inputTypeIcon = isInputText ? 'volume-circle' : 'keyboard-circle';
  var hasToolbar = toolbar.length > 0;

  var inputProps = _objectSpread(_objectSpread({}, inputOptions), {}, {
    value: text,
    inputRef: inputRef,
    placeholder: placeholder,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onKeyDown: handleInputKeyDown,
    onChange: handleTextChange,
    onImageSend: onImageSend
  });

  if (isWide) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Composer Composer--lg"
    }, hasToolbar && toolbar.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_ToolbarItem.ToolbarItem, {
        item: item,
        onClick: function onClick(e) {
          return handleToolbarClick(item, e);
        },
        key: item.type
      });
    }), accessoryContent && /*#__PURE__*/_react.default.createElement(_Popover.Popover, {
      active: !!accessoryContent,
      target: popoverTarget.current,
      onClose: handlePopoverClose
    }, accessoryContent), /*#__PURE__*/_react.default.createElement("div", {
      className: "Composer-inputWrap"
    }, /*#__PURE__*/_react.default.createElement(_ComposerInput.ComposerInput, (0, _extends2.default)({
      invisible: false
    }, inputProps))), /*#__PURE__*/_react.default.createElement(_SendButton.SendButton, {
      onClick: handleSendBtnClick,
      disabled: !text
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "Composer"
  }, recorder.canRecord && /*#__PURE__*/_react.default.createElement(_Action.Action, {
    className: "Composer-inputTypeBtn",
    "data-icon": inputTypeIcon,
    icon: inputTypeIcon,
    onClick: handleInputTypeChange,
    "aria-label": isInputText ? '切换到语音输入' : '切换到键盘输入'
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Composer-inputWrap"
  }, /*#__PURE__*/_react.default.createElement(_ComposerInput.ComposerInput, (0, _extends2.default)({
    invisible: !isInputText
  }, inputProps)), !isInputText && /*#__PURE__*/_react.default.createElement(_Recorder.Recorder, recorder)), !text && rightAction && /*#__PURE__*/_react.default.createElement(_Action.Action, rightAction), hasToolbar && /*#__PURE__*/_react.default.createElement(_Action.Action, {
    className: (0, _clsx.default)('Composer-toggleBtn', {
      active: isAccessoryOpen
    }),
    icon: "plus-circle",
    onClick: handleAccessoryToggle,
    "aria-label": isAccessoryOpen ? '关闭工具栏' : '展开工具栏'
  }), text && /*#__PURE__*/_react.default.createElement(_SendButton.SendButton, {
    onClick: handleSendBtnClick,
    disabled: false
  })), isAccessoryOpen && /*#__PURE__*/_react.default.createElement(_AccessoryWrap.AccessoryWrap, {
    onClickOutside: handleAccessoryBlur
  }, accessoryContent || /*#__PURE__*/_react.default.createElement(_Toolbar.Toolbar, {
    items: toolbar,
    onClick: handleToolbarClick
  })));
});

exports.Composer = Composer;