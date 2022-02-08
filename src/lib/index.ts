import { useMemo, useState } from "react";

export default function usePlight<T extends Record<any, unknown>>(data: T): T {
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
