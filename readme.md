# useBlight

Taking a step back from react back to JS.
A simpler alternative to `useState`, no more set functions, just change the variable.

```bash
yarn add use-blight
```

```tsx
const Button: FC = () => {
  const $ = useBlight({ x: 0 });

  const handleClick = () => ++$.x;

  return <button onClick={handleClick}>Increment: "{$.x}"</button>;
};
```

```tsx
const Input: FC = () => {
  const $ = useBlight({ name: "" });
  return (
    <input value={$.name} onChange={({ target }) => ($.name = target.value)} />
  );
};
```

```tsx
const Todo = () => {
  const $items = useBlight([{ id: 1, text: "Text", done: true }]);

  const addItem = () => {
    // thats right, push works
    $items.push({
      id: Date.now(),
      text: "New item",
      done: false,
    });
  };

  const handleChangeDone = (item) => {
    // just set the value :)
    item.done = !item.done;
  };

  return (
    <>
      {$items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => handleChangeDone(item)}
          />
          <span>{item.text}</span>
        </div>
      ))}
      <button onClick={addItem}>Add</button>
    </>
  );
};
```
