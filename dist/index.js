"use strict";
exports.__esModule = true;
function eqdict(s) {
    var _a, _b;
    var k = '';
    var v = '';
    var output = {};
    while (s.length > 0) {
        _a = eqdictConsume(s), k = _a[0], s = _a[1];
        if (k) {
            if (Object.keys(output).includes(k)) {
                throw new Error("Duplicated keys: " + k);
            }
            if (s[0] === '=') {
                _b = eqdictConsume(s), v = _b[0], s = _b[1];
                output[k] = v;
            }
            else {
                output[k] = '';
            }
            k = '';
        }
    }
    return output;
}
exports["default"] = eqdict;
function eqdictConsume(s) {
    s = s.replace(/^[ =,\s]+/, '');
    if (!s) {
        return ['', ''];
    }
    else {
        if (s[0] === '"' || s[0] === "'") {
            var iSplitter_1 = s.length;
            s.split('').forEach(function (c, i) {
                if (i > 0) {
                    if (c === s[0] && s.substr(i - 1, 1) !== '\\' && iSplitter_1 === s.length) {
                        iSplitter_1 = i;
                    }
                }
            });
            return [s.substr(1, iSplitter_1 - 1), s.substr(iSplitter_1 + 1)];
        }
        else {
            var iSplitter_2 = s.length;
            s.split('').forEach(function (c, i) {
                if (/[=,\s]/.test(c) && iSplitter_2 === s.length) {
                    iSplitter_2 = i;
                }
            });
            return [s.substr(0, iSplitter_2), s.substr(iSplitter_2)];
        }
    }
}
//# sourceMappingURL=index.js.map