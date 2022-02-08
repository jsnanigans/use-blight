'use strict';

var tslib = require('tslib');
var react = require('react');

function usePlight(data) {
    var stateHook = react.useState(data);
    var proxy = react.useMemo(function () {
        return new Proxy(data, {
            get: function (target, name, receiver) {
                return Reflect.get(target, name, receiver);
            },
            set: function (target, name, value, receiver) {
                var set = stateHook[1];
                var v = Reflect.set(target, name, value, receiver);
                set(tslib.__assign({}, data));
                return v;
            },
        });
    }, []);
    return proxy;
}

module.exports = usePlight;
//# sourceMappingURL=use-plight.js.map
