import { __assign } from 'tslib';
import { useState, useMemo } from 'react';

function usePlight(data) {
    var stateHook = useState(data);
    var proxy = useMemo(function () {
        return new Proxy(data, {
            get: function (target, name, receiver) {
                return Reflect.get(target, name, receiver);
            },
            set: function (target, name, value, receiver) {
                var set = stateHook[1];
                var v = Reflect.set(target, name, value, receiver);
                set(__assign({}, data));
                return v;
            },
        });
    }, []);
    return proxy;
}

export { usePlight as default };
//# sourceMappingURL=use-plight.esm.js.map
