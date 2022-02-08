'use strict';

var react = require('react');

function usePlight(data) {
    const stateHook = react.useState(data);
    const proxy = react.useMemo(() => {
        return new Proxy(data, {
            get(target, name, receiver) {
                return Reflect.get(target, name, receiver);
            },
            set(target, name, value, receiver) {
                stateHook[1]({ ...data });
                return Reflect.set(target, name, value, receiver);
            },
        });
    }, []);
    return proxy;
}

module.exports = usePlight;
//# sourceMappingURL=use-plight.js.map
