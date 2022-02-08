# usePlight

Taking a step back from react back to JS.
A simpler alternative to `useState`, no more set functions, just change the variable.

```tsx
const Button: FC = () => {
  const $ = usePlight({ x: 0 });

  const handleClick = () => ++$.x;

  return <button onClick={handleClick}>Increment: "{$.x}"</button>;
};
```

```tsx
const Input: FC = () => {
  const $ = usePlight({ name: "" });
  return <input value={$.name} onChange={({ target }) => ($.name = target.value)} />;
};
```
