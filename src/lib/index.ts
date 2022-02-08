import { useCallback, useMemo, useState } from "react";

const modChildren = (value: any, setX: (data: any) => void) => {
  for (const key in value) {
    if (typeof value[key] === "object") {
      const v = modChildren(value[key], setX);
      value[key] = modify(v, setX);
    }
  }
  return value;
}

const modify = (data: any, setX: (data: any) => void) =>
  new Proxy(data, {
    set(target, name, value, receiver) {
      setX({ ...data });
      let v = modChildren(value, setX);
      if (typeof value === "object") {
        v = modify(value, setX);
      }
      return Reflect.set(target, name, v, receiver);
    },
  });

export default function usePlight<T extends any[] | Record<any, unknown>>(
  value: T
): T {
  const [, setX] = useState(value);
  const modded = useMemo(() => modChildren(value, setX), []);
  return useMemo(() => modify(modded, setX), []);
}
