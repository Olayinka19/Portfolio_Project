var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import './Input.css';
import classNames from 'classnames';
var Input = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.multiline, multiline = _c === void 0 ? false : _c, _d = _a.minHeight, minHeight = _d === void 0 ? 25 : _d, _e = _a.maxHeight, maxHeight = _e === void 0 ? 200 : _e, _f = _a.autoHeight, autoHeight = _f === void 0 ? true : _f, _g = _a.autofocus, autofocus = _g === void 0 ? false : _g, props = __rest(_a, ["type", "multiline", "minHeight", "maxHeight", "autoHeight", "autofocus"]);
    useEffect(function () {
        var _a, _b;
        if (autofocus === true)
            (_b = (_a = props.referance) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.focus();
        if (props.clear instanceof Function) {
            props.clear(clear);
        }
    }, []);
    var onChangeEvent = function (e) {
        var _a, _b;
        if (props.maxlength && (e.target.value || '').length > props.maxlength) {
            if (props.onMaxLengthExceed instanceof Function)
                props.onMaxLengthExceed();
            if (((_b = (_a = props.referance) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.value) == (e.target.value || '').substring(0, props.maxlength))
                return;
        }
        if (props.onChange instanceof Function)
            props.onChange(e);
        if (multiline === true) {
            if (autoHeight === true) {
                if (e.target.style.height !== minHeight + 'px') {
                    e.target.style.height = minHeight + 'px';
                }
                var height = void 0;
                if (e.target.scrollHeight <= maxHeight)
                    height = e.target.scrollHeight + 'px';
                else
                    height = maxHeight + 'px';
                if (e.target.style.height !== height) {
                    e.target.style.height = height;
                }
            }
        }
    };
    var clear = function () {
        var _a, _b, _c;
        var _event = {
            FAKE_EVENT: true,
            target: (_a = props.referance) === null || _a === void 0 ? void 0 : _a.current,
        };
        if ((_c = (_b = props.referance) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.value) {
            props.referance.current.value = '';
        }
        onChangeEvent(_event);
    };
    return (_jsxs("div", __assign({ className: classNames('rce-container-input', props.className) }, { children: [props.leftButtons && _jsx("div", __assign({ className: 'rce-input-buttons' }, { children: props.leftButtons })), multiline === false ? (_jsx("input", { ref: props.referance, type: type, className: classNames('rce-input'), placeholder: props.placeholder, defaultValue: props.defaultValue, style: props.inputStyle, onChange: onChangeEvent, onCopy: props.onCopy, onCut: props.onCut, onPaste: props.onPaste, onBlur: props.onBlur, onFocus: props.onFocus, onSelect: props.onSelect, onSubmit: props.onSubmit, onReset: props.onReset, onKeyDown: props.onKeyDown, onKeyPress: props.onKeyPress, onKeyUp: props.onKeyUp })) : (_jsx("textarea", { ref: props.referance, className: classNames('rce-input', 'rce-input-textarea'), placeholder: props.placeholder, defaultValue: props.defaultValue, style: props.inputStyle, onChange: onChangeEvent, onCopy: props.onCopy, onCut: props.onCut, onPaste: props.onPaste, onBlur: props.onBlur, onFocus: props.onFocus, onSelect: props.onSelect, onSubmit: props.onSubmit, onReset: props.onReset, onKeyDown: props.onKeyDown, onKeyPress: props.onKeyPress, onKeyUp: props.onKeyUp })), props.rightButtons && _jsx("div", __assign({ className: 'rce-input-buttons' }, { children: props.rightButtons }))] })));
};
export default Input;
