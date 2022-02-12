import { useState, useMemo } from 'react';

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
function useBlight(value) {
    const [, setX] = useState(value);
    const modded = useMemo(() => modChildren(value, setX), []);
    return useMemo(() => modify(modded, setX), []);
}

export { useBlight as default };
//# sourceMappingURL=use-blight.esm.js.map
