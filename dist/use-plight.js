'use strict';

var react = require('react');

const modChildren = (value, setX) => {
    for (const key in value) {
        if (typeof value[key] === "object") {
            const v = modChildren(value[key], setX);
            value[key] = modify(v, setX);
        }
    }
    return value;
};
const modify = (data, setX) => new Proxy(data, {
    set(target, name, value, receiver) {
        setX({ ...data });
        let v = modChildren(value, setX);
        if (typeof value === "object") {
            v = modify(value, setX);
        }
        return Reflect.set(target, name, v, receiver);
    },
});
function usePlight(value) {
    const [, setX] = react.useState(value);
    const modded = react.useMemo(() => modChildren(value, setX), []);
    return react.useMemo(() => modify(modded, setX), []);
}

module.exports = usePlight;
//# sourceMappingURL=use-plight.js.map
