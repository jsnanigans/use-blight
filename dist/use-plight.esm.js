import { useState, useMemo } from 'react';

function usePlight(data) {
    const stateHook = useState(data);
    const proxy = useMemo(() => {
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

export { usePlight as default };
//# sourceMappingURL=use-plight.esm.js.map
